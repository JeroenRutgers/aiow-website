import type { Metadata } from 'next'
import Link from 'next/link'

import AgentWorkflowDemo from '@/components/AgentWorkflowDemo'
import BookingSection from '@/components/BookingSection'
import HeroFilm from '@/components/HeroFilm'
import Reveal from '@/components/Reveal'
import WorkflowExplorer from '@/components/WorkflowExplorer'
import { knowledgeArticles, services } from '@/lib/ai-platform'

export const metadata: Metadata = {
  title: 'AIOW · Leer AI. Bouw wat werkt. Schaal met controle.',
  description:
    'AIOW helpt Nederlandse bedrijven AI begrijpen, één waardevolle workflow bouwen en betrouwbaar beheren. Open kennisbank, gratis Workflow Scan, AI Workflow Lab, Bootcamp en implementatie.',
  alternates: {
    canonical: 'https://aiow.io',
  },
  openGraph: {
    title: 'AIOW · AI leren en werkend maken',
    description:
      'Van gratis AI-kennis naar een werkende bedrijfsworkflow en een beheerd AI-team.',
    url: 'https://aiow.io',
    type: 'website',
    locale: 'nl_NL',
  },
}

const journey = [
  {
    number: '01',
    label: 'Leer',
    title: 'Begrijp wat AI voor uw werk betekent',
    body: 'Heldere lessen, praktische voorbeelden en veilige werkafspraken. Vrij toegankelijk voor iedere ondernemer en medewerker.',
    href: '/kennisbank',
    cta: 'Open de kennisbank',
  },
  {
    number: '02',
    label: 'Kies',
    title: 'Vind één proces dat de moeite waard is',
    body: 'De gratis Workflow Scan beoordeelt herhaling, bronnen, eigenaarschap en risico en kiest een passende route.',
    href: '/workflow-scan',
    cta: 'Doe de Workflow Scan',
  },
  {
    number: '03',
    label: 'Bouw',
    title: 'Maak de workflow werkend in uw bedrijf',
    body: 'We bouwen met echte bronnen, duidelijke menselijke goedkeuring en een vooraf afgesproken acceptatiemoment.',
    href: '/workflows',
    cta: 'Bekijk workflows',
  },
  {
    number: '04',
    label: 'Schaal',
    title: 'Beheer wat in de praktijk waarde bewijst',
    body: 'Monitoring, incidenttriage, gebruiksreview en gerichte verbetering voor een bewezen eerste module.',
    href: '/diensten#managed-ai-workflow',
    cta: 'Bekijk managed AI',
  },
]

const proof = [
  {
    label: 'Praktijkomgeving',
    title: 'DecoStone bedrijfsvoering',
    body: 'Offertes, facturen, klantcommunicatie, kennisbank en projecten vormen één echte omgeving waarin wij dagelijks leren wat betrouwbare AI vraagt.',
    stat: 'Dagelijks gebruikt',
  },
  {
    label: 'Werkend principe',
    title: 'Menselijke goedkeuring',
    body: 'Externe acties blijven zichtbaar en controleerbaar. De agent bereidt voor, de verantwoordelijke geeft akkoord.',
    stat: 'Gate vóór impact',
  },
  {
    label: 'Eigendom',
    title: 'Uw data en accounts',
    body: 'Bij het managed model staan hardware, opslag, provideraccounts en bedrijfsspecifieke configuratie op naam van uw bedrijf.',
    stat: 'Intrekbare toegang',
  },
]

function JsonLd() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://aiow.io/#organization',
      name: 'AIOW BV',
      url: 'https://aiow.io',
      email: 'jeroen@aiow.io',
      telephone: '+31621898039',
      areaServed: 'NL',
      knowsAbout: ['AI-workflows', 'AI-agents', 'AI-geletterdheid', 'MKB-automatisering'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://aiow.io/#website',
      name: 'AIOW',
      url: 'https://aiow.io',
      inLanguage: ['nl-NL', 'en'],
      publisher: { '@id': 'https://aiow.io/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AIOW AI-diensten',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.promise,
          provider: { '@id': 'https://aiow.io/#organization' },
          areaServed: 'NL',
        },
      })),
    },
  ]

  return data.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ))
}

export default function Home() {
  return (
    <main>
      <JsonLd />

      <HeroFilm />

      <section id="home-products" className="border-b border-hairline bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-hairline px-5 md:grid-cols-4 md:px-8">
          {[
            ['Gratis', 'Workflow Scan'],
            ['€950', 'AI Workflow Lab'],
            ['4–6 weken', 'Startmodule / Pilot'],
            ['vanaf €950 p/m', 'Managed AI Workflow'],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-8 text-center md:py-10">
              <p className="font-serif text-2xl font-semibold tracking-heading text-terra-text md:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow-proof" className="scroll-mt-20 bg-canvas">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="kicker">Werkend bewijs</p>
            <h2 className="section-title">AI die meewerkt, blijft controleerbaar.</h2>
            <p className="section-intro">
              Geen losse chatbot. Een afgebakende workflow die bronnen leest, werk voorbereidt en
              vóór externe impact op een mens wacht.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-ink-60 sm:grid-cols-3 lg:grid-cols-1">
              <p>
                <strong className="block text-ink">01 · Context</strong> De juiste bronnen en ontbrekende informatie.
              </p>
              <p>
                <strong className="block text-ink">02 · Voorwerk</strong> Een zichtbaar concept met eigenaar en vervolgstap.
              </p>
              <p>
                <strong className="block text-ink">03 · Besluit</strong> Verzenden of uitvoeren gebeurt pas na akkoord.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <AgentWorkflowDemo />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Eén route van kennis naar resultaat</p>
          <h2 className="section-title max-w-3xl">
            U hoeft niet vooraf te weten welk AI-systeem u nodig heeft.
          </h2>
          <p className="section-intro max-w-2xl">
            Begin met begrijpen. Kies daarna één waardevolle workflow. Bouw pas verder wanneer de
            eerste stap werkt en meetbaar is.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-hairline bg-hairline lg:grid-cols-4">
          {journey.map((item, index) => (
            <Reveal key={item.label} delay={index * 80} className="journey-card">
              <div className="flex items-center justify-between">
                <span className="journey-card__number">{item.number}</span>
                <span className="kicker">{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href={item.href}>{item.cta} →</Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="kicker">Workflowbibliotheek</p>
              <h2 className="section-title max-w-3xl">Zie wat AI in een echt proces doet.</h2>
              <p className="section-intro max-w-2xl">
                Iedere workflow toont de trigger, het AI-voorwerk, het menselijke beslispunt en de
                uitkomst. Zo blijft de belofte concreet.
              </p>
            </div>
            <Link href="/workflows" className="text-sm font-semibold text-terra-text hover:underline">
              Open de hele bibliotheek →
            </Link>
          </Reveal>
          <div className="mt-12">
            <WorkflowExplorer compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Diensten</p>
          <h2 className="section-title max-w-3xl">Een duidelijke investering per groeifase.</h2>
          <p className="section-intro max-w-2xl">
            De eerste betaalde stap is klein en begrensd. Implementatie en beheer volgen met een
            vaste scope, acceptatiecriteria en zichtbare eigenaars.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 80}
              className={`service-card ${service.featured ? 'service-card--featured' : ''}`}
            >
              <p className="kicker">{service.eyebrow}</p>
              <h3>{service.name}</h3>
              <p className="service-card__promise">{service.promise}</p>
              <p className="service-card__price">{service.price}</p>
              <p className="service-card__tax">{service.tax}</p>
              <p className="service-card__time">{service.timeframe}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={service.href}>{service.cta} →</Link>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-ink-60">
          Providerkosten, hardware en omvangrijke koppelingen worden vooraf apart zichtbaar gemaakt.
          Het AI Workflow Lab van €950 wordt éénmalig volledig verrekend met een Intake & Blueprint
          die binnen 30 dagen start.
        </p>
      </section>

      <section className="knowledge-band">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="platform-kicker">AIOW Kennisbank</p>
              <h2 className="section-title section-title--light">Leer wat u nodig heeft. In gewone taal.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                Van generatieve AI en agents tot veiligheid, kosten en menselijke controle. Vrij
                toegankelijk, bronbewust en geschreven voor dagelijkse bedrijfsbeslissingen.
              </p>
              <Link href="/kennisbank" className="button-primary button-primary--light mt-8">
                Open alle AI-lessen
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {knowledgeArticles.slice(0, 4).map((article) => (
                <Link key={article.slug} href={`/kennisbank/${article.slug}`} className="knowledge-preview">
                  <div className="flex items-center justify-between gap-3">
                    <span>{article.category}</span>
                    <small>{article.readTime}</small>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <strong>Lees les →</strong>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="bewijs" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Bewijs van werkwijze</p>
          <h2 className="section-title max-w-3xl">De techniek is zichtbaar. De grens ook.</h2>
          <p className="section-intro max-w-2xl">
            Wij laten zien welke laag draait, wie eigenaar is en waar een mens beslist. Dat maakt
            een AI-systeem bruikbaar en controleerbaar.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-hairline bg-hairline md:grid-cols-3">
          {proof.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="proof-card">
              <p className="kicker">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <strong>{item.stat}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Eerste stap</p>
            <h2 className="section-title mx-auto max-w-3xl">
              Breng uw beste AI-kans terug tot één uitvoerbaar besluit.
            </h2>
            <p className="section-intro mx-auto max-w-2xl">
              De gratis scan kiest een route. Het AI Workflow Lab van €950 excl. btw ontleedt één
              werkstroom en levert een risico- en datacheck, drie kansen en een 30-dagen actiekaart.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/workflow-scan" className="button-primary">
                Doe de gratis Workflow Scan
              </Link>
              <Link href="/kennisbank/eerste-ai-workflow-kiezen" className="button-secondary">
                Lees eerst de keuzehulp
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <Reveal className="text-center">
          <p className="kicker">Contact</p>
          <h2 className="section-title mx-auto max-w-3xl">Bespreek uw situatie rechtstreeks met Jeroen.</h2>
          <p className="section-intro mx-auto max-w-2xl">
            Stuur in drie zinnen welk proces tijd kost, welke systemen u gebruikt en wat u binnen
            drie maanden wilt verbeteren.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <BookingSection />
        </Reveal>
      </section>
    </main>
  )
}
