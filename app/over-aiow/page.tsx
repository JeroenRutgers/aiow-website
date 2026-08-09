import type { Metadata } from 'next'
import Link from 'next/link'

import BookingSection from '@/components/BookingSection'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Over AIOW · een mens en een gecontroleerd AI-team',
  description:
    'AIOW bouwt praktische AI-workflows en beheerde agents voor Nederlandse bedrijven, met Jeroen als aanspreekpunt en aantoonbare review- en goedkeuringsgates.',
  alternates: { canonical: 'https://aiow.io/over-aiow' },
}

const team = [
  {
    role: 'Jeroen · eigenaar en eindbeslisser',
    text: 'Bepaalt scope, klantbelofte, prioriteit en externe goedkeuring. U spreekt rechtstreeks met de persoon die verantwoordelijk blijft voor het resultaat.',
  },
  {
    role: 'Product en ontwerp',
    text: 'Productflows, copy en visuele keuzes krijgen een aparte specialistische review voordat een publieke versie wordt voorgesteld.',
  },
  {
    role: 'Architectuur en technische QA',
    text: 'Security, databronnen, goedkeuringsgrenzen, tests, bewijs en herstelpaden worden als één systeem beoordeeld.',
  },
  {
    role: 'Delivery en operations',
    text: 'Builds, integraties, deployment en productiecontrole volgen vaste acceptatie- en rollbackstappen.',
  },
]

const principles = [
  ['Eén eigenaar per resultaat', 'Elk belangrijk werkitem heeft één lead, één builder en een andere reviewer.'],
  ['Menselijke gate vóór impact', 'Verzenden, publiceren, betalen en andere externe acties vragen een expliciet akkoord.'],
  ['Bewijs hoort bij oplevering', 'Builds, tests, screenshots, bronverwijzingen en herstelstappen horen bij het product.'],
  ['Uw data blijft van u', 'Accounts, projectdata en bedrijfsspecifieke configuratie blijven overdraagbaar en intrekbaar.'],
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="platform-hero min-h-[68svh]">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
          <p className="platform-kicker">Over AIOW</p>
          <h1 className="platform-hero__title max-w-[11ch]">Een mens aan tafel. Een AI-team achter het werk.</h1>
          <p className="platform-hero__intro max-w-2xl">
            AIOW is opgericht door Jeroen Rutgers. We combineren directe menselijke
            verantwoordelijkheid met gespecialiseerde AI-agents voor product, techniek, research,
            review en operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/diensten" className="button-primary button-primary--light">Bekijk onze diensten</Link>
            <Link href="/#contact" className="button-secondary button-secondary--dark">Neem contact op</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="kicker">Het vertrekpunt</p>
            <h2 className="section-title">AI moet passen bij het echte werk.</h2>
          </div>
          <div className="grid gap-5 text-lg leading-relaxed text-ink-60">
            <p>
              Jeroen bouwt vanuit twee werelden: ambacht en software. In beide telt hetzelfde.
              Eerst goed kijken hoe mensen, materiaal en informatie zich in de praktijk gedragen.
              Daarna pas een systeem ontwerpen.
            </p>
            <p>
              DecoStone is onze dagelijkse praktijkomgeving. Offertes, facturen, projecten,
              klantcommunicatie en een vakinhoudelijke kennisbank laten iedere dag zien waar AI
              versnelt en waar menselijk oordeel nodig blijft.
            </p>
            <p>
              Die lessen vertalen we naar afgebakende workflows voor andere bedrijven. Iedere stap
              heeft een eigenaar, een controlepunt en een terugvalmogelijkheid.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="kicker">Het teammodel</p>
            <h2 className="section-title max-w-3xl">Specialisten werken samen onder één verantwoordelijkheid.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {team.map((item, index) => (
              <Reveal key={item.role} delay={(index % 2) * 80} className="rounded-[24px] border border-hairline bg-surface p-7">
                <p className="font-serif text-2xl font-semibold tracking-heading">{item.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Werkprincipes</p>
          <h2 className="section-title max-w-3xl">Controle is onderdeel van het ontwerp.</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {principles.map(([title, text], index) => (
            <Reveal key={title} delay={index * 60} className="grid gap-2 py-6 md:grid-cols-[18rem_1fr] md:gap-10">
              <h3 className="font-semibold">{title}</h3>
              <p className="leading-relaxed text-ink-60">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Rechtstreeks contact</p>
            <h2 className="section-title mx-auto max-w-3xl">Bespreek uw proces met Jeroen.</h2>
            <p className="section-intro mx-auto max-w-2xl">U krijgt een eerlijke eerste inschatting van de kans, de randvoorwaarden en een passende volgende stap.</p>
          </Reveal>
          <Reveal delay={100} className="mt-12"><BookingSection /></Reveal>
        </div>
      </section>
    </main>
  )
}
