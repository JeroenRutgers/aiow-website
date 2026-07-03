import type { Metadata } from 'next'
import Link from 'next/link'

import Reveal from '@/components/Reveal'
import AIIntakeDemo from '@/components/AIIntakeDemo'
import GlowPulseButton from '@/components/GlowPulseButton'
import CaseCard from '@/components/CaseCard'
import { getCase } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'AI voor makelaars, zorg, horeca en bouw',
  description:
    'Wat AI concreet oplevert per branche: pijnpunten, werkende voorbeelden en hoe een pilot van 4 tot 6 weken eruitziet.',
  alternates: { canonical: 'https://aiow.io/voor-mkb' },
}

const PILOT_WEKEN = [
  { week: 'Week 1', text: 'We kijken mee in uw proces: waar gaat tijd verloren, wat moet er echt anders.' },
  { week: 'Week 2-3', text: 'We bouwen op uw echte data en workflow, niet op een demo-dataset.' },
  { week: 'Week 4-5', text: 'Live met uw team: echte klanten, echte aanvragen, echte resultaten.' },
  { week: 'Week 6', text: 'Meten en beslissen: wat levert het op, en wat is de volgende stap.' },
]

const BRANCHES = [
  {
    id: 'makelaars',
    h2: 'AI voor makelaars: van lead naar bezichtiging zonder wachttijd',
    pains: [
      'Bezichtigingsaanvragen komen ’s avonds binnen en ’s ochtends is de lead koud.',
      'Elke koper stelt dezelfde tien vragen voordat het echte gesprek begint.',
      'Agenda-afstemming kost meer mailtjes dan de bezichtiging zelf duurt.',
    ],
    caseSlug: 'doorz',
  },
  {
    id: 'zorg',
    h2: 'AI voor de zorg: planning zonder avondwerk',
    pains: [
      'Roosteren kost planners avonden, en elke wijziging betekent opnieuw puzzelen.',
      'CAO-regels, voorkeuren en bezetting tegen elkaar afwegen is handwerk.',
      'Verantwoording over roosterkeuzes is achteraf lastig te reconstrueren.',
    ],
    caseSlug: 'roostercopilot',
  },
  {
    id: 'retail-horeca',
    h2: 'AI voor retail en horeca: klantcontact dat doorloopt terwijl u draait',
    pains: [
      'Reserveringen, vragen en reviews komen binnen op momenten dat niemand tijd heeft.',
      'Dezelfde vragen over openingstijden, menukaart en beschikbaarheid, elke dag opnieuw.',
      'Opvolging van reviews en herhaalbezoek blijft liggen in het seizoen.',
    ],
    caseSlug: 'reload-hub',
  },
  {
    id: 'bouw-vastgoed',
    h2: 'AI klantportaal voor bouw en vastgoedbeheer: status zonder belrondes',
    pains: [
      '"Hoe staat het met mijn project?" is de meest gestelde en duurste vraag.',
      'Documenten, foto’s en afspraken zitten verspreid over mail, app en mappen.',
      'Na oplevering verdwijnt het dossier en daarmee de vervolgopdracht.',
    ],
    caseSlug: 'kleanup',
  },
  {
    id: 'specialisten',
    h2: 'AI kennisbank voor specialistische diensten: uw vakkennis als verkoopkanaal',
    pains: [
      'Uw vakkennis zit in uw hoofd en dat van twee collega’s.',
      'Aanvragen komen incompleet binnen: geen foto’s, geen maten, geen materiaal.',
      'Klanten googelen ’s avonds en komen uit bij de concurrent met betere content.',
    ],
    caseSlug: 'decostone',
  },
]

export default function VoorMkbPage() {
  return (
    <main className="pt-16">
      {/* Hero: statisch, snelheid telt voor SEO-landers */}
      <section className="border-b border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="kicker">Voor MKB</p>
          <h1
            className="mt-4 max-w-3xl font-serif font-semibold tracking-display"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            Wat AI concreet oplevert, per branche.
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-60">
            Geen abstracte mogelijkheden maar werkende voorbeelden: wat het probleem was, wat we
            bouwden, en hoe uw pilot van 4 tot 6 weken eruitziet.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Branches">
            {BRANCHES.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-terra hover:text-terra-text"
              >
                {b.h2.split(':')[0].replace('AI voor ', '').replace('AI klantportaal voor ', '').replace('AI kennisbank voor ', '')}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Branches */}
      {BRANCHES.map((b, idx) => {
        const c = getCase(b.caseSlug)
        return (
          <section
            key={b.id}
            id={b.id}
            className={`scroll-mt-16 ${idx % 2 === 1 ? 'bg-surface-sunken' : ''}`}
          >
            <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
              <Reveal>
                <h2
                  className="max-w-3xl font-serif font-semibold tracking-heading"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
                >
                  {b.h2}
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <Reveal delay={80}>
                  <h3 className="kicker">Herkenbaar?</h3>
                  <ul className="mt-4 space-y-3">
                    {b.pains.map((pain) => (
                      <li key={pain} className="flex gap-3 leading-relaxed text-ink-60">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-terra" aria-hidden="true" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                  <h3 className="kicker mt-10">Zo ziet uw pilot eruit</h3>
                  <ul className="mt-4 space-y-3">
                    {PILOT_WEKEN.map((w) => (
                      <li key={w.week} className="flex gap-4 text-[15px] leading-relaxed">
                        <span className="w-16 shrink-0 font-semibold text-terra-text">{w.week}</span>
                        <span className="text-ink-60">{w.text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium">
                    Vaste pilotprijs: €7.500 tot €12.500 · u hoort de indicatie al in het eerste
                    gesprek.
                  </p>
                </Reveal>
                {c && (
                  <Reveal delay={160}>
                    <h3 className="kicker mb-4">Wat wij bouwden</h3>
                    <CaseCard c={c} compact />
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* Intake demo + CTA */}
      <section className="border-t border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal className="text-center">
            <h2
              className="font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              Benieuwd wat het voor uw bedrijf oplevert?
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <AIIntakeDemo />
          </Reveal>
          <Reveal delay={200} className="mt-12 text-center">
            <GlowPulseButton href="/#contact">Plan een kennismaking (30 min)</GlowPulseButton>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
