import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter, Source_Serif_4 } from 'next/font/google'

import Reveal from './_components/Reveal'
import AgentFlow from './_components/AgentFlow'
import WorkflowCase from './_components/WorkflowCase'
import IntakeForm from './_components/IntakeForm'

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const ui = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Bootcamp voor bedrijven | AIOW',
  description:
    'Eén werkdag waarin uw team AI leert toepassen op de eigen processen. Met kansenmatrix, werkende voorbeelden en een onderbouwd 30/60/90-dagen actieplan. Op de boot, bij AIOW of bij u op kantoor.',
  alternates: { canonical: 'https://aiow.io/ai-bootcamp' },
  openGraph: {
    title: 'AI Bootcamp voor bedrijven | AIOW',
    description:
      'Eén werkdag voor MKB-teams. Van AI-ruis naar werkende workflows, met een onderbouwd 30/60/90-dagen actieplan.',
    url: 'https://aiow.io/ai-bootcamp',
    type: 'website',
    locale: 'nl_NL',
  },
}

// ─── Contact constants ────────────────────────────────────────────────────────
const PHONE_DISPLAY = '+31 6 21898039'
const PHONE_DIGITS = '31621898039'
const MAIL = 'jeroen@aiow.io'

const whatsappText = encodeURIComponent(
  'Hoi Jeroen, ik wil graag een AI Bootcamp bespreken voor ons bedrijf. We willen kort sparren over format: boot, AIOW kantoor of bij ons op locatie.'
)
const mailSubject = encodeURIComponent('Aanvraag AI Bootcamp')
const mailBodyShort = encodeURIComponent(
  `Hoi Jeroen,\n\nWe willen graag een AI Bootcamp bespreken.\n\nBedrijf:\nNaam:\nTelefoon:\nAantal deelnemers:\nVoorkeur locatie: boot / AIOW kantoor / eigen kantoor\nGewenste periode:\nBelangrijkste doel:\n\nGroet,`
)

const whatsappHref = `https://wa.me/${PHONE_DIGITS}?text=${whatsappText}`
const mailHref = `mailto:${MAIL}?subject=${mailSubject}&body=${mailBodyShort}`
const phoneHref = `tel:+${PHONE_DIGITS}`

// ─── Content ──────────────────────────────────────────────────────────────────
const heroStats: [string, string][] = [
  ['1 werkdag', 'Praktisch, doel-gestuurd'],
  ['6 – 16', 'Deelnemers per dag'],
  ['30 / 60 / 90', 'Dagen actieplan na afloop'],
  ['v.a. € 2.950', 'Vaste prijs, ex. btw'],
]

const outcomes: string[] = [
  'De vijf meest waardevolle AI-kansen binnen uw organisatie',
  'Prompt- en workflowformats die uw team daadwerkelijk gebruikt',
  'Een kansenmatrix met impact, complexiteit en risico per kans',
  'Een agent-roadmap voor de komende 30, 60 en 90 dagen',
  'Heldere afspraken over data, privacy en verantwoord gebruik',
  'Eigenaarschap per kans: wie pakt wat op, en wanneer',
]

const dayPlan: { time: string; title: string; text: string }[] = [
  {
    time: '09:30',
    title: 'AI in heldere taal',
    text: 'Wat doet AI vandaag wel en niet, en welke keuzes moet de organisatie deze maanden maken.',
  },
  {
    time: '10:30',
    title: 'Uw processen in beeld',
    text: 'We brengen de tijdvreters in kaart in sales, operatie, marketing, klantcontact en administratie.',
  },
  {
    time: '12:00',
    title: 'Kansenmatrix',
    text: 'Elke kans krijgt een score op impact, complexiteit, risico en haalbaarheid binnen dertig dagen.',
  },
  {
    time: '13:30',
    title: 'Werken aan echte cases',
    text: 'Het team bouwt prompts, workflows en eerste automatiseringsconcepten voor herkenbare taken.',
  },
  {
    time: '15:30',
    title: 'Agents en implementatie',
    text: 'Waar voegt een AI-agent waarde toe, waar volstaat een eenvoudige workflow, en wat vraagt maatwerk.',
  },
  {
    time: '16:30',
    title: 'Actieplan',
    text: 'We sluiten af met quick wins, risico-afspraken, eigenaarschap en een 30/60/90-dagen vervolg.',
  },
]

const useCases: { area: string; flow: string; gain: string }[] = [
  {
    area: 'Sales',
    flow:
      'Lead binnen → AI verrijkt bedrijfsinfo → stelt openingsmail op → CRM-notitie en taak klaar.',
    gain: 'Sneller opvolgen, betere voorbereiding op het eerste gesprek.',
  },
  {
    area: 'Klantcontact',
    flow:
      'Vraag via mail of WhatsApp → AI herkent type → koppelt klant en project → maakt antwoordconcept → mens keurt goed.',
    gain: 'Antwoorden binnen minuten, consistente toon, minder doorvragen.',
  },
  {
    area: 'Administratie',
    flow:
      'Inkomende factuur of contract → AI leest, vat samen, controleert → twijfelgevallen naar mens.',
    gain: 'Minder overtypen, betrouwbaardere boekhouding, kortere doorlooptijd.',
  },
  {
    area: 'Marketing',
    flow:
      'Briefing of campagne-idee → AI maakt SEO-onderbouwing, contentformats en doelgroepvarianten → eindredactie door mens.',
    gain: 'Hogere output, scherpere positionering, kortere productie-cycli.',
  },
  {
    area: 'Operatie',
    flow:
      'Werkbon, planning of QA-rapport → AI vergelijkt met norm → schrijft samenvatting → manager beslist.',
    gain: 'Eerder ingrijpen bij afwijkingen, minder handmatige rapportages.',
  },
  {
    area: 'Directie',
    flow:
      'Maand- of kwartaaldata → AI bouwt overzicht → markeert afwijkingen → directieconcept klaar.',
    gain: 'Sneller scherp besluit, minder afhankelijk van losse rapportages.',
  },
]

type Pkg = {
  name: string
  price: string
  tag: string
  bestFor: string
  items: string[]
  featured?: boolean
}

const packages: Pkg[] = [
  {
    name: 'Compact',
    price: '€ 2.950',
    tag: 'Halve dag',
    bestFor: 'Voor teams die snel richting willen, zonder volledige werkdag te blokkeren.',
    items: [
      'Drie tot vier uur, op locatie naar keuze',
      'Maximaal acht deelnemers',
      'AI-introductie plus twee bedrijfscases',
      'Quick-win overzicht na afloop',
      'Beknopte schriftelijke samenvatting',
    ],
  },
  {
    name: 'Business',
    price: '€ 5.950',
    tag: 'Meest gekozen',
    bestFor: 'Voor teams die AI structureel willen toepassen op hun eigen processen.',
    items: [
      'Volledige werkdag, inclusief catering',
      'Maximaal twaalf deelnemers',
      'Boot, AIOW-kantoor of eigen locatie',
      'Use-case mapping en kansenmatrix',
      '30/60/90-dagen actieplan',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '€ 9.950',
    tag: 'Directie + team',
    bestFor: 'Voor organisaties die na de bootcamp gericht door willen pakken.',
    items: [
      'Volledige dag op maat',
      'Maximaal zestien deelnemers',
      'Promptbibliotheek voor uw organisatie',
      'Agent-roadmap met prioritering',
      'Twee weken nazorg en follow-up gesprek',
    ],
  },
  {
    name: 'Bootcamp + Sprint',
    price: 'v.a. € 14.950',
    tag: 'Met implementatie',
    bestFor: 'Voor bedrijven die direct een eerste werkende AI-workflow willen opleveren.',
    items: [
      'Alles uit Premium',
      'Twee tot vier weken implementatie',
      'Eerste workflow of agent in productie',
      'Key-user training en documentatie',
      'Overdracht en beheer-afspraken',
    ],
  },
]

const caseExamples: {
  sector: string
  size: string
  before: string
  after: string
  metric: string
}[] = [
  {
    sector: 'Bouwbedrijf',
    size: '38 mensen',
    before:
      'Klantvragen via mail en WhatsApp belandden versnipperd bij projectleiders. Antwoorden duurden gemiddeld een halve dag.',
    after:
      'AI-flow categoriseert vragen, koppelt projecten en bereidt antwoorden voor. Projectleider keurt goed en gaat verder.',
    metric: '> 22 uur per week bespaard',
  },
  {
    sector: 'Marketingbureau',
    size: '14 mensen',
    before:
      'SEO-briefings, doelgroepanalyses en eerste concepten kostten per opdracht meerdere dagen handwerk.',
    after:
      'Promptbibliotheek en workflow maken een briefing, onderbouwing en eerste draft beschikbaar binnen één uur.',
    metric: '5× meer concepten getest',
  },
  {
    sector: 'Zakelijke dienstverlener',
    size: '60 mensen',
    before:
      'Contracten en intakeformulieren werden handmatig vergeleken met standaarden door een team van drie.',
    after:
      'AI doet de eerste controle, vlagt afwijkingen, mens beslist over de uitzonderingen.',
    metric: '70% sneller intake-proces',
  },
]

const faqs: [string, string][] = [
  [
    'Moeten deelnemers al ervaring hebben met AI?',
    'Nee. Beginners leren de essentie, gevorderde gebruikers verdiepen hun toepassing voor het eigen werk.',
  ],
  [
    'Is dit niet vooral theorie?',
    'Nee. De dag draait om uw processen, taken, data-afspraken en concrete kansen voor uw team.',
  ],
  [
    'Kan de bootcamp ook op kantoor?',
    'Ja. Op de boot, bij AIOW of bij u op locatie. Voor grotere groepen is een eigen kantoor vaak praktischer.',
  ],
  [
    'Wat is het ideale aantal deelnemers?',
    'Tussen zes en twaalf werkt het beste. Voor grotere teams maken we een aangepast programma.',
  ],
  [
    'Kunnen jullie ook implementeren?',
    'Ja. AIOW kan na de bootcamp workflows, agents, dashboards en interne AI-processen bouwen en beheren.',
  ],
  [
    'Wat gebeurt er met onze data?',
    'We werken zoveel mogelijk met uw eigen omgevingen. Tijdens de dag maken we expliciete afspraken over privacy, retentie en wat wel of niet door externe modellen mag.',
  ],
]

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-[3px] h-4 w-4 shrink-0 text-[color:var(--copper)]"
    >
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// JSON-LD for SEO/AEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Bootcamp voor bedrijven',
  serviceType: 'AI training en implementatie',
  provider: {
    '@type': 'Organization',
    name: 'AIOW',
    url: 'https://aiow.io',
    email: MAIL,
    telephone: `+${PHONE_DIGITS}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
    },
  },
  areaServed: 'Nederland',
  offers: packages.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.price.replace(/[^\d]/g, ''),
    priceCurrency: 'EUR',
    description: p.bestFor,
  })),
}

export default function AIBootcampPage() {
  return (
    <div
      className={`${serif.variable} ${ui.variable} min-h-screen`}
      style={{
        ['--cream' as string]: '#faf9f5',
        ['--cream-2' as string]: '#f3f0e7',
        ['--ink' as string]: '#141413',
        ['--slate' as string]: '#5a7d9f',
        ['--copper' as string]: '#8a6d3b',
        ['--rule' as string]: 'rgba(20,20,19,0.10)',
        ['--rule-soft' as string]: 'rgba(20,20,19,0.06)',
        ['--muted' as string]: 'rgba(20,20,19,0.62)',
        backgroundColor: 'var(--cream)',
        color: 'var(--ink)',
        fontFamily: 'var(--font-serif), Georgia, serif',
      }}
    >
      {/* Force cream background on body for this route, regardless of global dark theme */}
      <style>{`html,body{background:#faf9f5 !important;color:#141413 !important;}`}</style>

      {/*
        Mark the document as light-theme so the gradient scrollbar
        from globals.css (scoped on :root:not([data-theme="light"]))
        does not leak onto this cream page.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.setAttribute('data-theme','light');`,
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SKIP LINK */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[color:var(--ink)] focus:px-3 focus:py-2 focus:text-[color:var(--cream)]"
      >
        Direct naar inhoud
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-[color:var(--rule)] bg-[color:var(--cream)]/85 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--cream)]/70">
        <nav
          aria-label="Hoofdnavigatie"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-[15px] font-semibold tracking-tight"
            aria-label="AIOW home"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-[color:var(--rule)] text-[10px] font-bold tracking-tighter"
              style={{ color: 'var(--ink)' }}
            >
              AI
            </span>
            <span>AIOW</span>
          </Link>
          <div className="hidden items-center gap-2 text-[14px] text-[color:var(--muted)] md:flex">
            {[
              ['#programma', 'Programma'],
              ['#workflow', 'Voorbeeld'],
              ['#cases', 'Voorgangers'],
              ['#pakketten', 'Pakketten'],
              ['#intake', 'Intake'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="inline-flex min-h-[44px] items-center rounded-md px-3 transition-colors hover:text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-full border border-[color:var(--ink)] bg-[color:var(--ink)] px-4 text-[14px] font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
          >
            Plan intake
          </a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* left — copy */}
            <div>
              <Reveal>
                <p
                  className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  AI Bootcamp voor bedrijven
                </p>
              </Reveal>
              <Reveal delay={60}>
                <h1
                  className="text-[34px] font-medium leading-[1.06] tracking-[-0.015em] sm:text-[52px] lg:text-[62px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Van AI-ruis naar werkende workflows.
                  <span className="block text-[color:var(--muted)]">
                    In één werkdag.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p
                  className="mt-6 max-w-xl text-[17px] leading-[1.7] text-[color:var(--muted)] sm:text-[18px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  We zitten met uw team om tafel, brengen uw processen in kaart en
                  leveren een onderbouwd 30/60/90&#8209;dagen actieplan op. Op de
                  boot, bij AIOW of bij u op kantoor. Geen sliders. Geen abstracties.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  <a
                    href="#intake"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[color:var(--ink)] px-6 text-[15px] font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
                  >
                    Plan een intake
                  </a>
                  <a
                    href="#programma"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[color:var(--rule)] px-6 text-[15px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)]"
                  >
                    Bekijk programma
                  </a>
                </div>
              </Reveal>

              {/* trust strip */}
              <Reveal delay={240}>
                <p
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-[color:var(--slate)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  <span>Vaste prijs</span>
                  <span aria-hidden="true" className="text-[color:var(--muted)]">·</span>
                  <span>Reactie binnen één werkdag</span>
                  <span aria-hidden="true" className="text-[color:var(--muted)]">·</span>
                  <span>Plekken voor Q3 nog beschikbaar</span>
                </p>
              </Reveal>
            </div>

            {/* right — visual proof */}
            <Reveal delay={120}>
              <AgentFlow />
            </Reveal>
          </div>

          {/* specs row — productized confidence */}
          <Reveal delay={300}>
            <dl
              className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[color:var(--rule)] bg-[color:var(--rule-soft)] sm:grid-cols-4 lg:mt-20"
              style={{ fontFamily: 'var(--font-ui)' }}
            >
              {heroStats.map(([k, v]) => (
                <div key={k} className="bg-[color:var(--cream)] px-5 py-6 sm:px-6">
                  <dt
                    className="text-[22px] font-medium tracking-tight text-[color:var(--ink)] sm:text-[28px]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {k}
                  </dt>
                  <dd className="mt-1 text-[12px] leading-[1.45] text-[color:var(--muted)] sm:text-[13px]">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* WAAROM */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
            <Reveal>
              <div>
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Waarom nu
                </p>
                <h2
                  className="text-[28px] font-medium leading-[1.18] tracking-tight sm:text-[36px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  AI gebruiken kan iedereen. Het goed organiseren is het werk.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div
                className="space-y-5 text-[17px] leading-[1.75] text-[color:var(--muted)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <p>
                  In de praktijk gebeurt AI versnipperd: losse prompts, losse tools,
                  geen duidelijke data-afspraken en geen zicht op de processen waar
                  AI echt tijd of marge oplevert.
                </p>
                <p>
                  De bootcamp brengt structuur. We kijken naar het werk zelf,
                  selecteren de kansen die het meeste opleveren en bepalen
                  gezamenlijk wat uw team morgen anders doet. U gaat naar huis met
                  een plan dat past bij uw bedrijf — niet bij een modelantwoord uit
                  een training.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROGRAMMA */}
        <section id="programma" className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="max-w-3xl">
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Programma
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Een werkdag met opbrengst. Geen inspiratiesessie zonder vervolg.
                </h2>
              </div>
            </Reveal>

            <ol className="mt-12 divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)] sm:mt-14">
              {dayPlan.map((step, i) => (
                <Reveal key={step.time} delay={i * 40}>
                  <li className="grid gap-3 py-6 sm:grid-cols-[112px_1fr] sm:gap-10 sm:py-7">
                    <div
                      className="text-[13px] font-medium uppercase tracking-[0.16em] text-[color:var(--slate)] sm:pt-1"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      {step.time}
                    </div>
                    <div>
                      <h3
                        className="text-[20px] font-medium tracking-tight text-[color:var(--ink)] sm:text-[22px]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-2 max-w-2xl text-[15px] leading-[1.7] text-[color:var(--muted)] sm:text-[16px]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {step.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* WORKFLOW VOORBEELD */}
        <section id="workflow" className="border-t border-[color:var(--rule)] bg-[color:var(--cream-2)]/40">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <WorkflowCase />
          </div>
        </section>

        {/* RESULTAAT */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
            <Reveal>
              <div>
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Resultaat
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[40px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Waar uw team aan het einde van de dag mee thuiskomt.
                </h2>
              </div>
            </Reveal>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {outcomes.map((item, i) => (
                <Reveal key={item} delay={i * 30}>
                  <li className="flex gap-3 border-b border-[color:var(--rule-soft)] pb-5">
                    <Check />
                    <span
                      className="text-[16px] leading-[1.6] text-[color:var(--ink)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* USE-CASES — flow per discipline */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="max-w-3xl">
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Voor welk werk
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  We werken aan taken die uw team morgen herkent.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-x-10 gap-y-10 sm:mt-14 sm:grid-cols-2">
              {useCases.map((u, i) => (
                <Reveal key={u.area} delay={i * 30}>
                  <article className="border-t border-[color:var(--rule)] pt-6">
                    <h3
                      className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--slate)]"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      {u.area}
                    </h3>
                    <p
                      className="mt-3 text-[17px] leading-[1.6] text-[color:var(--ink)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {u.flow}
                    </p>
                    <p
                      className="mt-3 text-[13px] leading-[1.55] text-[color:var(--muted)]"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      → {u.gain}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CASES / VOORGANGERS */}
        <section id="cases" className="border-t border-[color:var(--rule)] bg-[color:var(--cream-2)]/40">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <p
                    className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                    style={{ fontFamily: 'var(--font-ui)' }}
                  >
                    Wie u voorging
                  </p>
                  <h2
                    className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[40px]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Voorbeelden uit eerdere trajecten.
                  </h2>
                </div>
                <p
                  className="max-w-sm text-[13px] leading-[1.6] text-[color:var(--muted)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Bedrijfsnamen geanonimiseerd. Volledige referenties op aanvraag,
                  na intake.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {caseExamples.map((c, i) => (
                <Reveal key={c.sector} delay={i * 60}>
                  <article className="flex h-full flex-col rounded-lg border border-[color:var(--rule)] bg-[color:var(--cream)] p-7">
                    <header
                      className="flex items-center justify-between"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                        {c.sector}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                        {c.size}
                      </span>
                    </header>
                    <div className="mt-5 space-y-4">
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]"
                          style={{ fontFamily: 'var(--font-ui)' }}
                        >
                          Voor
                        </p>
                        <p
                          className="mt-1 text-[15px] leading-[1.6] text-[color:var(--ink)]"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {c.before}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]"
                          style={{ fontFamily: 'var(--font-ui)' }}
                        >
                          Na
                        </p>
                        <p
                          className="mt-1 text-[15px] leading-[1.6] text-[color:var(--ink)]"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {c.after}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-6">
                      <div className="border-t border-[color:var(--rule-soft)] pt-4">
                        <p
                          className="text-[24px] font-medium tracking-tight text-[color:var(--ink)]"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {c.metric}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIES */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="max-w-3xl">
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Locaties
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Kies de setting die het beste werkt voor uw team.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[color:var(--rule)] bg-[color:var(--rule-soft)] sm:mt-14 lg:grid-cols-3">
              {[
                {
                  title: 'Op de boot',
                  text:
                    'Voor directiedagen en teams die uit de dagelijkse drukte willen stappen. Besloten, scherp, memorabel.',
                  meta: 'Amsterdamse grachten · 6 – 10 deelnemers',
                },
                {
                  title: 'Bij AIOW op kantoor',
                  text:
                    'Voor teams die een praktische werksessie willen met focus, schermen en directe technische verdieping.',
                  meta: 'AIOW HQ Amsterdam · 6 – 12 deelnemers',
                },
                {
                  title: 'Bij u op locatie',
                  text:
                    'Voor grotere groepen, eigen systemen en teams die de bootcamp aan een interne werkdag willen koppelen.',
                  meta: 'Heel Nederland · tot 16 deelnemers',
                },
              ].map((loc, i) => (
                <Reveal key={loc.title} delay={i * 60}>
                  <article className="flex h-full flex-col bg-[color:var(--cream)] p-7 sm:p-8">
                    <h3
                      className="text-[22px] font-medium tracking-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {loc.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-[15px] leading-[1.7] text-[color:var(--muted)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {loc.text}
                    </p>
                    <p
                      className="mt-6 text-[12px] uppercase tracking-[0.14em] text-[color:var(--slate)]"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      {loc.meta}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PAKKETTEN */}
        <section id="pakketten" className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <p
                    className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                    style={{ fontFamily: 'var(--font-ui)' }}
                  >
                    Pakketten
                  </p>
                  <h2
                    className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Van eerste richting tot werkende AI-workflow.
                  </h2>
                </div>
                <p
                  className="max-w-sm text-[13px] leading-[1.6] text-[color:var(--muted)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Vaste prijzen, exclusief btw. Na de intake stemmen we het format
                  af op team, locatie en gewenste opbrengst.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={i * 50}>
                  <article
                    className={`relative flex h-full flex-col rounded-lg border bg-[color:var(--cream)] p-7 transition-colors ${
                      pkg.featured
                        ? 'border-[color:var(--ink)]'
                        : 'border-[color:var(--rule)] hover:border-[color:var(--ink)]/40'
                    }`}
                  >
                    {pkg.featured ? (
                      <span
                        className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[color:var(--ink)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--cream)]"
                        style={{ fontFamily: 'var(--font-ui)' }}
                      >
                        {pkg.tag}
                      </span>
                    ) : (
                      <span
                        className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]"
                        style={{ fontFamily: 'var(--font-ui)' }}
                      >
                        {pkg.tag}
                      </span>
                    )}
                    <h3
                      className="mt-3 text-[22px] font-medium tracking-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className="mt-3 min-h-[60px] text-[14px] leading-[1.6] text-[color:var(--muted)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {pkg.bestFor}
                    </p>
                    <div
                      className="mt-6 text-[30px] font-medium tracking-tight text-[color:var(--ink)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {pkg.price}
                    </div>
                    <ul className="mt-6 space-y-3">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check />
                          <span
                            className="text-[14px] leading-[1.55] text-[color:var(--ink)]"
                            style={{ fontFamily: 'var(--font-serif)' }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#intake"
                      className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full px-5 text-[14px] font-medium transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)] ${
                        pkg.featured
                          ? 'bg-[color:var(--ink)] text-[color:var(--cream)] hover:opacity-90'
                          : 'border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)]'
                      }`}
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      Kies {pkg.name}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INTAKE */}
        <section id="intake" className="border-t border-[color:var(--rule)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
            <Reveal>
              <div>
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Intake
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Plan een korte intake.
                </h2>
                <p
                  className="mt-6 text-[17px] leading-[1.7] text-[color:var(--muted)]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  In twintig minuten bepalen we welk format past: boot, kantoor,
                  halve dag, volledige dag of bootcamp met implementatiesprint.
                </p>

                <ul
                  className="mt-8 space-y-4 text-[14px] leading-[1.55] text-[color:var(--ink)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  <li className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--rule)] text-[color:var(--ink)]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M20.6 3.4A11 11 0 003.4 17.7L2 22l4.4-1.4A11 11 0 1020.6 3.4z" />
                        <path d="M8 11.5c0 4 3.5 5.5 5.5 5.5 1 0 2-.5 2.5-1l-1.5-1.5c-.3.3-.8.5-1 .5-1 0-3-1-3-3 0-.5.3-1 .5-1L9.5 9.5C9 10 8 10.5 8 11.5z" />
                      </svg>
                    </span>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[color:var(--ink)]/80"
                    >
                      WhatsApp Jeroen
                      <span className="ml-2 text-[color:var(--muted)]">{PHONE_DISPLAY}</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--rule)] text-[color:var(--ink)]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <a href={mailHref} className="hover:text-[color:var(--ink)]/80">
                      {MAIL}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--rule)] text-[color:var(--ink)]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M5 4h3l2 5-2 1a12 12 0 005 5l1-2 5 2v3a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" />
                      </svg>
                    </span>
                    <a href={phoneHref} className="hover:text-[color:var(--ink)]/80">
                      {PHONE_DISPLAY}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <IntakeForm />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <div className="max-w-3xl">
                <p
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                  style={{ fontFamily: 'var(--font-ui)' }}
                >
                  Veelgestelde vragen
                </p>
                <h2
                  className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[40px]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Wat klanten vooraf willen weten.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)] sm:mt-14">
              {faqs.map(([q, a], i) => (
                <Reveal key={q} delay={i * 30}>
                  <details className="group py-6">
                    <summary
                      className="flex cursor-pointer list-none items-start justify-between gap-6 text-[18px] font-medium tracking-tight text-[color:var(--ink)] [&::-webkit-details-marker]:hidden"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      <span>{q}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--rule)] text-[color:var(--ink)] transition-transform group-open:rotate-45"
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3">
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p
                      className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-[color:var(--muted)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — one clear next step */}
        <section className="border-t border-[color:var(--rule)]">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <Reveal>
              <p
                className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--copper)]"
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                Eén volgende stap
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="text-[30px] font-medium leading-[1.15] tracking-tight sm:text-[44px]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Plan een intake. Twintig minuten. Geen verplichting.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--muted)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                We stemmen format, locatie en doel af. Daarna sturen we een offerte
                met datum-opties. Reactie doorgaans binnen één werkdag.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-7 text-[15px] font-medium text-[color:var(--cream)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)] sm:w-auto"
                >
                  Plan intake via WhatsApp
                </a>
                <a
                  href="#intake"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[color:var(--ink)] px-7 text-[15px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--slate)] sm:w-auto"
                >
                  Vul formulier in
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER — trust signals */}
      <footer className="border-t border-[color:var(--rule)] bg-[color:var(--cream-2)]/40">
        <div
          className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[color:var(--ink)]"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-[color:var(--rule)] text-[10px] font-bold tracking-tighter"
                >
                  AI
                </span>
                AIOW
              </Link>
              <p
                className="mt-4 max-w-[260px] text-[13px] leading-[1.6] text-[color:var(--muted)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Praktische AI-workflows en agents voor MKB-teams. Ontwerp, bouw,
                training en beheer onder één dak.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-[color:var(--ink)]">
                <li>
                  <a href={mailHref} className="hover:opacity-80">
                    {MAIL}
                  </a>
                </li>
                <li>
                  <a href={phoneHref} className="hover:opacity-80">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                Op de pagina
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-[color:var(--ink)]">
                <li>
                  <a href="#programma" className="hover:opacity-80">
                    Programma
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="hover:opacity-80">
                    Voorbeeld
                  </a>
                </li>
                <li>
                  <a href="#cases" className="hover:opacity-80">
                    Voorgangers
                  </a>
                </li>
                <li>
                  <a href="#pakketten" className="hover:opacity-80">
                    Pakketten
                  </a>
                </li>
                <li>
                  <a href="#intake" className="hover:opacity-80">
                    Intake
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--slate)]">
                Bedrijfsgegevens
              </p>
              <ul
                className="mt-4 space-y-2 text-[13px] leading-[1.55] text-[color:var(--muted)]"
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                <li className="text-[color:var(--ink)]">AIOW B.V.</li>
                <li>Amsterdam, Nederland</li>
                <li>Reactietijd: één werkdag</li>
                <li>Vaste prijzen, ex. btw</li>
              </ul>
            </div>
          </div>

          <div
            className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--rule)] pt-6 text-[12px] text-[color:var(--muted)] sm:flex-row sm:items-center"
          >
            <span>© {new Date().getFullYear()} AIOW B.V. — AI Bootcamp voor bedrijven</span>
            <span>Gemaakt in Amsterdam.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
