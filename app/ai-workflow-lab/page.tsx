import type { Metadata } from 'next'
import Link from 'next/link'

import BookingSection from '@/components/BookingSection'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'AI Workflow Lab · één proces scherp voor €950',
  description:
    'Ontleed één terugkerende werkstroom, toets data en risico en eindig met een concrete actiekaart voor 30 dagen.',
  alternates: { canonical: 'https://aiow.io/ai-workflow-lab' },
}

const deliverables = [
  ['Procesontleding', 'We tekenen trigger, bronnen, overdrachten, uitzonderingen, beslisser en gewenste output uit.'],
  ['Risico- en datacheck', 'We bepalen welke gegevens nodig zijn, welke bronnen betrouwbaar zijn en waar menselijke controle hoort.'],
  ['Top drie kansen', 'We rangschikken verbeteringen op frequentie, pijn, bronkwaliteit, eigenaarschap en veiligheid.'],
  ['30-dagen actiekaart', 'U krijgt een compact besluitdocument met eigenaar, eerste meting, experiment en stopcriteria.'],
]

export default function AiWorkflowLabPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <section className="platform-subhero">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="platform-kicker">AI Workflow Lab</p>
            <h1 className="platform-title mt-5">Eén proces. Eén scherpe eerste stap.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              In 90 tot 120 minuten ontleden we één echte werkstroom. U eindigt met een risico- en datacheck, drie kansen en een actiekaart voor de komende 30 dagen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#boeken" className="button-primary button-primary--light">Plan het Lab</Link>
              <Link href="/workflow-scan" className="button-secondary button-secondary--dark">Doe eerst de gratis scan</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">Vaste prijs</p>
            <p className="mt-3 font-serif text-5xl font-semibold tracking-tight text-white">€950</p>
            <p className="mt-2 text-sm text-white/50">excl. btw · vooraf gefactureerd</p>
            <div className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-white/64">
              Volledig en éénmalig te verrekenen met de AI Intake & Blueprint wanneer u binnen 30 dagen doorstart. De resterende Blueprint-factuur is dan €2.000 excl. btw.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Wat u koopt</p>
          <h2 className="section-title max-w-3xl">Beslissingzekerheid voor één concreet proces.</h2>
          <p className="section-lead mt-6 max-w-2xl">
            Het Lab is een kleine betaalde werksessie rond één proces. Het levert richting en een acteerbare kaart. Integratie, softwarebouw en een volledige technische architectuur vallen erbuiten.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:grid-cols-2">
          {deliverables.map(([title, body], index) => (
            <Reveal key={title} delay={index * 70} className="bg-paper p-7 md:p-9">
              <span className="text-xs font-bold tracking-[0.2em] text-terra">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-heading">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/62">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-3 md:px-8 md:py-24">
          <div>
            <p className="kicker">Past goed wanneer</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/66">
              <li>• één proces vaak terugkomt</li>
              <li>• een eigenaar kan beslissen</li>
              <li>• voorbeelden en bronnen beschikbaar zijn</li>
              <li>• het team binnen 30 dagen wil handelen</li>
            </ul>
          </div>
          <div>
            <p className="kicker">Eerst ander werk wanneer</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/66">
              <li>• de proceseigenaar nog onbekend is</li>
              <li>• het proces iedere keer volledig wisselt</li>
              <li>• bronmateriaal ontbreekt</li>
              <li>• alleen algemene AI-inspiratie gewenst is</li>
            </ul>
          </div>
          <div>
            <p className="kicker">Commerciële grens</p>
            <p className="mt-6 text-sm leading-7 text-ink/66">
              Het Lab bevat één werkstroom en maximaal zes deelnemers. Aanvullend onderzoek, juridische beoordeling, technische koppelingen en klant-specifieke promptbibliotheken volgen alleen in een apart voorstel.
            </p>
          </div>
        </div>
      </section>

      <section id="boeken" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <BookingSection />
      </section>
    </main>
  )
}
