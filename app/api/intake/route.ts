import { NextRequest, NextResponse } from 'next/server'

import { genereerAdvies } from '@/lib/intake-advies'
import { parseIntakePayload } from '@/lib/intake-validation'

const rateLimit = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

function checkRateLimit(ip: string) {
  const now = Date.now()
  for (const [key, value] of rateLimit) {
    if (value.reset <= now) rateLimit.delete(key)
  }

  const entry = rateLimit.get(ip)
  if (!entry || entry.reset <= now) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }

  if (entry.count >= MAX_REQUESTS) return false
  entry.count += 1
  return true
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#039;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
      { status: 429 },
    )
  }

  let rawPayload: unknown
  try {
    rawPayload = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Ongeldige invoer.' }, { status: 400 })
  }

  const parsed = parseIntakePayload(rawPayload)
  if (!parsed.ok) {
    return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  }

  const { name, email, website, answers } = parsed.value
  if (website) return NextResponse.json({ success: true })

  const advies = genereerAdvies(answers)
  const message = [
    'Nieuwe AIOW AI-intake',
    '',
    `Naam: ${name}`,
    `E-mail: ${email}`,
    `Branche: ${answers.branche}`,
    `Proces: ${answers.pijnpunt}`,
    `Team: ${answers.teamgrootte}`,
    `Timing: ${answers.timing}`,
    '',
    `Advies: ${advies.tekst}`,
  ].join('\n')

  const deliveries: Promise<Response>[] = []

  const telegramToken = process.env.TELEGRAM_BOT_TOKEN
  const telegramChatId = process.env.TELEGRAM_CHAT_ID
  if (telegramToken && telegramChatId) {
    deliveries.push(
      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: telegramChatId, text: message }),
      }),
    )
  }

  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    deliveries.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AIOW Website <intake@aiow.io>',
          to: ['jeroen@aiow.io'],
          reply_to: email,
          subject: `Nieuwe AI-intake van ${name}`,
          text: message,
          html: `<pre style="font-family:system-ui;white-space:pre-wrap">${escapeHtml(message)}</pre>`,
        }),
      }),
    )
  }

  if (deliveries.length === 0) {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, error: 'Verzenden is tijdelijk niet beschikbaar. Mail jeroen@aiow.io.' },
        { status: 503 },
      )
    }
    return NextResponse.json({ success: true, preview: true })
  }

  const results = await Promise.allSettled(deliveries)
  const delivered = results.some(
    (result) => result.status === 'fulfilled' && result.value.ok,
  )

  if (!delivered) {
    return NextResponse.json(
      { success: false, error: 'Verzenden is tijdelijk niet beschikbaar. Mail jeroen@aiow.io.' },
      { status: 503 },
    )
  }

  return NextResponse.json({ success: true })
}
