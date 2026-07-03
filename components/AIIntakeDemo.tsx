'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BRANCHES,
  PIJNPUNTEN,
  TEAMGROOTTES,
  TIMINGS,
  genereerAdvies,
  type IntakeAnswers,
} from '@/lib/intake-advies'

type Stap = {
  key: keyof IntakeAnswers
  vraag: string
  opties: readonly string[]
}

const STAPPEN: Stap[] = [
  { key: 'branche', vraag: 'In welke branche zit uw bedrijf?', opties: BRANCHES },
  { key: 'pijnpunt', vraag: 'Waar gaat nu de meeste tijd verloren?', opties: PIJNPUNTEN },
  { key: 'teamgrootte', vraag: 'Hoe groot is uw team?', opties: TEAMGROOTTES },
  { key: 'timing', vraag: 'Hoe snel wilt u iets werkends zien?', opties: TIMINGS },
]

export default function AIIntakeDemo() {
  const [stap, setStap] = useState(0)
  const [antwoorden, setAntwoorden] = useState<Partial<IntakeAnswers>>({})
  const [email, setEmail] = useState('')
  const [verzonden, setVerzonden] = useState<'idle' | 'bezig' | 'ok' | 'fout'>('idle')

  const klaar = stap >= STAPPEN.length
  const advies = klaar ? genereerAdvies(antwoorden as IntakeAnswers) : null

  function kies(key: keyof IntakeAnswers, waarde: string) {
    setAntwoorden((prev) => ({ ...prev, [key]: waarde }))
    setStap((s) => s + 1)
  }

  async function stuurAdvies() {
    if (!advies || verzonden === 'bezig') return
    setVerzonden('bezig')
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...antwoorden, email: email || undefined, advies: advies.tekst, website: '' }),
      })
      setVerzonden(res.ok ? 'ok' : 'fout')
    } catch {
      setVerzonden('fout')
    }
  }

  return (
    <div className="mx-auto w-full max-w-[560px] border border-hairline bg-surface p-6 md:p-8">
      {/* Doorlopen stappen als compacte chat-historie */}
      {STAPPEN.slice(0, Math.min(stap, STAPPEN.length)).map((s) => (
        <div key={s.key} className="mb-4">
          <p className="text-sm text-ink-60">{s.vraag}</p>
          <p className="mt-1 inline-block rounded-full bg-surface-sunken px-4 py-1.5 text-sm font-medium">
            {antwoorden[s.key]}
          </p>
        </div>
      ))}

      {!klaar && (
        <div>
          <p className="mb-4 text-[17px] font-medium">{STAPPEN[stap].vraag}</p>
          <div className="flex flex-wrap gap-2">
            {STAPPEN[stap].opties.map((optie) => (
              <button
                key={optie}
                type="button"
                onClick={() => kies(STAPPEN[stap].key, optie)}
                className="rounded-full border border-hairline px-4 py-2 text-sm font-medium transition-colors hover:border-terra hover:text-terra-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
              >
                {optie}
              </button>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-40">
            Vraag {stap + 1} van {STAPPEN.length} · geen account, geen verplichting
          </p>
        </div>
      )}

      {klaar && advies && (
        <div>
          <div className="mb-2 flex gap-1" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="inline-block h-1.5 w-1.5 rounded-full bg-ink-40"
                style={{ animation: `typing-dot 1.2s ease-in-out ${i * 0.15}s 2` }}
              />
            ))}
          </div>
          <p className="text-[17px] leading-relaxed">{advies.tekst}</p>
          <Link
            href={`/cases/${advies.caseSlug}`}
            className="mt-3 inline-block text-sm font-semibold text-terra-text hover:underline"
          >
            Bekijk de {advies.caseNaam} case →
          </Link>

          <div className="mt-8 border-t border-hairline pt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-terra px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-terra-deep"
            >
              Bespreek dit in 30 minuten
            </Link>

            {verzonden !== 'ok' ? (
              <form
                className="mt-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  void stuurAdvies()
                }}
              >
                <label htmlFor="intake-email" className="text-sm text-ink-60">
                  Of stuur mij dit advies per e-mail
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="intake-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="naam@bedrijf.nl"
                    className="w-full rounded-full border border-hairline bg-canvas px-4 py-2.5 text-sm outline-none focus:border-terra"
                  />
                  {/* Honeypot tegen bots */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <button
                    type="submit"
                    disabled={verzonden === 'bezig'}
                    className="whitespace-nowrap rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink disabled:opacity-50"
                  >
                    {verzonden === 'bezig' ? 'Versturen…' : 'Verstuur'}
                  </button>
                </div>
                {verzonden === 'fout' && (
                  <p className="mt-2 text-sm text-terra-text">
                    Versturen lukte niet. Mail ons direct: jeroen@aiow.io
                  </p>
                )}
              </form>
            ) : (
              <p className="mt-5 text-sm font-medium text-[#4A7C59]">
                Verstuurd. U ontvangt het advies binnen enkele minuten.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
