import type { Metadata } from 'next'

import Reveal from '@/components/Reveal'
import GlowPulseButton from '@/components/GlowPulseButton'

export const metadata: Metadata = {
  title: 'Over AIOW · klein team, werkende AI, gebouwd in NL',
  description:
    'Waarom AIOW anders werkt dan bureaus: agent-first ontwikkeling, vaste prijzen, Nederlandse data en direct contact.',
  alternates: { canonical: 'https://aiow.io/over-aiow' },
}

const CAPACITEITEN = [
  {
    title: 'Bouwen en deployen',
    text: 'Van ontwerp tot livegang: componenten, integraties en hosting, in dagen in plaats van sprints.',
  },
  {
    title: 'Kwaliteit en review',
    text: 'Elke oplossing wordt getoetst op werking, veiligheid en toegankelijkheid voordat die live gaat.',
  },
  {
    title: 'Planning en bewaking',
    text: 'Systemen worden live gemonitord. Als iets afwijkt, weten wij het eerder dan u.',
  },
]

const VERSCHILLEN = [
  ['Vaste prijzen', 'Geen uurtarief dat oploopt, maar een bedrag dat vooraf vaststaat.'],
  ['Werkende software', 'Geen adviesrapport als eindproduct, maar een systeem dat draait.'],
  ['Eén aanspreekpunt', 'Geen accountmanagement-lagen. U belt, Jeroen neemt op.'],
]

export default function OverAiowPage() {
  return (
    <main className="pt-16">
      <section className="border-b border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="kicker">Over AIOW</p>
          <h1
            className="mt-4 max-w-3xl font-serif font-semibold tracking-display"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            Klein team. Grote output. Alles in Nederland.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Het verhaal</p>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-60">
              <p>
                AIOW is gestart door Jeroen Rutgers, een bouwer die van ambacht houdt: van
                natuursteen tot software. De rode draad is hetzelfde. Goed kijken hoe iets echt
                gebruikt wordt, en dan iets maken dat jaren meegaat.
              </p>
              <p>
                AIOW bestaat om AI uit de hype te halen en in bedrijven te zetten. Geen
                strategiedecks, geen prototypes die in een la verdwijnen, maar systemen die
                maandag meedraaien in het echte werk.
              </p>
              <p>
                Bewust een klein bureau. Dat betekent korte lijnen, snelle beslissingen en een
                leverancier die gewoon opneemt.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="kicker">Hoe we werken: agent-first</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-60">
              Naast Jeroen werkt een vast team van AI-agents die bouwen, testen en bewaken.
              Daardoor levert AIOW met een klein team wat traditionele bureaus met tien man doen,
              in weken in plaats van maanden. U merkt het aan tempo en prijs.
            </p>
            <div className="mt-8 divide-y divide-hairline border-y border-hairline">
              {CAPACITEITEN.map((cap) => (
                <div key={cap.title} className="py-5">
                  <h3 className="font-semibold">{cap.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-60">{cap.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="kicker">Waarom NL-first</p>
            <p
              className="mt-4 max-w-3xl font-serif leading-snug tracking-heading"
              style={{ fontSize: 'clamp(22px, 2.8vw, 30px)' }}
            >
              Data in Europa. Nederlandse taal in elk klantcontact. AVG en EU AI Act als
              ontwerpvoorwaarde in plaats van verrassing achteraf. En gewoon: bereikbaar op
              Nederlandse werktijden.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Anders dan bureaus</p>
        </Reveal>
        <div className="mt-8 divide-y divide-hairline border-y border-hairline">
          {VERSCHILLEN.map(([titel, tekst], i) => (
            <Reveal key={titel} delay={i * 80} className="grid gap-2 py-6 md:grid-cols-[240px_1fr] md:gap-8">
              <h3 className="font-semibold">{titel}</h3>
              <p className="leading-relaxed text-ink-60">{tekst}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="mt-16 text-center">
          <GlowPulseButton href="/#contact">Plan een kennismaking (30 min)</GlowPulseButton>
        </Reveal>
      </section>
    </main>
  )
}
