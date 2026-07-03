import { NextResponse } from 'next/server'

// Eenvoudige in-memory rate limit per IP (best-effort op serverless)
const hits = new Map<string, { count: number; reset: number }>()
const LIMIT = 5
const WINDOW_MS = 10 * 60 * 1000

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > LIMIT
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) return NextResponse.json({ ok: false }, { status: 429 })

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const { branche, pijnpunt, teamgrootte, timing, email, advies, website } = body as Record<
    string,
    string | undefined
  >

  // Honeypot: echte bezoekers laten dit veld leeg
  if (website) return NextResponse.json({ ok: true })

  if (!branche || !pijnpunt) return NextResponse.json({ ok: false }, { status: 400 })

  const lines = [
    'Nieuwe AI-intake via aiow.io',
    `Branche: ${branche}`,
    `Pijnpunt: ${pijnpunt}`,
    `Team: ${teamgrootte ?? '-'}`,
    `Timing: ${timing ?? '-'}`,
    `E-mail bezoeker: ${email ?? 'niet opgegeven'}`,
    `Gegeven advies: ${advies ?? '-'}`,
  ].join('\n')

  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AIOW Intake <intake@aiow.io>',
        to: 'jeroen@aiow.io',
        subject: `AI-intake: ${branche} · ${timing ?? 'timing onbekend'}`,
        text: lines,
        ...(email ? { reply_to: email } : {}),
      }),
    }).catch(() => {})

    // Kopie naar de bezoeker als die om het advies vroeg
    if (email && advies) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AIOW <intake@aiow.io>',
          to: email,
          subject: 'Uw AI-advies van aiow.io',
          text: `U vroeg dit advies aan via aiow.io:\n\n${advies}\n\nVragen? Antwoord gewoon op deze mail, of plan een kennismaking van 30 minuten via https://aiow.io/#contact\n\nGroet,\nJeroen · AIOW`,
        }),
      }).catch(() => {})
    }
  }

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text: lines }),
    }).catch(() => {}) // Telegram is best-effort
  }

  return NextResponse.json({ ok: true })
}
