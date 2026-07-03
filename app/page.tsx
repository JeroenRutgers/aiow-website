import type { Metadata } from 'next'
import Link from 'next/link'

import HeroVideo from '@/components/HeroVideo'
import GlowPulseButton from '@/components/GlowPulseButton'
import Reveal from '@/components/Reveal'
import CaseCard from '@/components/CaseCard'
import AIIntakeDemo from '@/components/AIIntakeDemo'
import FAQSection, { FAQ } from '@/components/FAQSection'
import BookingSection from '@/components/BookingSection'
import { cases } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'AIOW · AI voor het MKB, werkend in 4 tot 6 weken',
  description:
    'AIOW bouwt AI die vandaag werkt voor Nederlandse MKB-bedrijven: klantintake, planning, kennisbank en leadopvolging. Vaste pilotprijs, live bij echte klanten.',
  alternates: {
    canonical: 'https://aiow.io',
    languages: { 'nl-NL': 'https://aiow.io', en: 'https://aiow.io/en' },
  },
  openGraph: {
    title: 'AIOW · AI voor het MKB',
    description:
      'AI dat vandaag werkt. Voor de ondernemer die vandaag klanten heeft. Vaste pilotprijs, live bij echte klanten.',
    url: 'https://aiow.io',
    type: 'website',
    locale: 'nl_NL',
  },
}

const PROPOSITIES = [
  {
    title: 'AI dat past bij uw workflow',
    body: 'We beginnen bij hoe uw bedrijf nu werkt, niet bij een tool die u moet leren. WhatsApp, telefoon, uw agenda: AI sluit daarop aan.',
  },
  {
    title: 'Werkende oplossingen, geen prototypes',
    body: 'Zes systemen draaien vandaag bij echte klanten. U kunt ze zien, aanklikken en navragen.',
  },
  {
    title: 'Nederlands en direct bereikbaar',
    body: 'Eén aanspreekpunt, Nederlandse taal, antwoord binnen een werkdag. Geen ticketsysteem in een andere tijdzone.',
  },
]

const INDUSTRIES = [
  {
    sector: 'Makelaars en vastgoed',
    pain: 'Intake die elke lead direct kwalificeert, agenda-booking zonder heen-en-weer bellen.',
    slug: 'doorz',
  },
  {
    sector: 'Zorg en planning',
    pain: 'Roosterscenario’s doorrekenen met de planner aan het stuur, verantwoording ingebouwd.',
    slug: 'roostercopilot',
  },
  {
    sector: 'Retail en horeca',
    pain: 'Klantvragen, reserveringen en review-opvolging afgehandeld terwijl u draait.',
    slug: 'reload-hub',
  },
  {
    sector: 'Bouw en vastgoedbeheer',
    pain: 'Klantportaal met projectstatus, documenten en een levend dossier per object.',
    slug: 'kleanup',
  },
  {
    sector: 'Specialistische diensten',
    pain: 'Uw vakkennis als doorzoekbare kennisbank plus foto-intake via WhatsApp.',
    slug: 'decostone',
  },
]

const PRICING = [
  {
    name: 'Kennismaking',
    price: 'Gratis',
    period: '30 minuten',
    description:
      'Videocall of op locatie. U vertelt hoe uw bedrijf werkt, wij vertellen eerlijk of AI iets oplevert. Zo niet, dan zeggen we dat ook.',
    cta: { label: 'Plan kennismaking', href: '#contact' },
    featured: false,
  },
  {
    name: 'AI Bootcamp',
    price: 'v.a. €2.950',
    period: '1 werkdag · ex btw',
    description:
      'Eén werkdag waarin uw team AI leert toepassen op de eigen processen. Kansenmatrix, werkende voorbeelden en een 30/60/90-dagen actieplan.',
    cta: { label: 'Bekijk de bootcamp', href: '/ai-bootcamp' },
    featured: false,
  },
  {
    name: 'Pilot',
    price: '€7.500 – €12.500',
    period: 'vast · 4 tot 6 weken',
    description:
      'Eén afgebakende oplossing, live bij u in gebruik. Vaste prijs vooraf, concrete deliverable, meetbaar resultaat. Geen uurtje-factuurtje.',
    cta: { label: 'Bespreek uw pilot', href: '#contact' },
    featured: true,
  },
  {
    name: 'Doorlopend',
    price: 'v.a. €950',
    period: 'per maand · opzegbaar',
    description:
      'Onderhoud, monitoring, verbeteringen en nieuwe iteraties. Maandelijks opzegbaar. U blijft eigenaar van data en oplossing.',
    cta: { label: 'Vraag ernaar', href: '#contact' },
    featured: false,
  },
]

const METRICS = [
  ['6+', 'systemen live'],
  ['4–6', 'weken naar werkende AI'],
  ['Vast', 'pilotprijs vooraf'],
  ['NL', 'gebouwd en bereikbaar'],
]

function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIOW',
    url: 'https://aiow.io',
    email: 'jeroen@aiow.io',
    telephone: '+31621898039',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jeroen@aiow.io',
      telephone: '+31621898039',
      availableLanguage: ['nl', 'en'],
      contactType: 'sales',
    },
  }
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI-oplossingen voor MKB',
    areaServed: 'NL',
    provider: { '@type': 'Organization', name: 'AIOW', url: 'https://aiow.io' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 7500,
        maxPrice: 12500,
        priceCurrency: 'EUR',
      },
    },
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <>
      {[org, service, faq].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}

export default function Home() {
  return (
    <main>
      <JsonLd />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroVideo
        mp4Src="/videos/hero-craft.mp4"
        webmSrc="/videos/hero-craft.webm"
        poster="/videos/hero-craft-poster.jpg"
        className="min-h-[100svh]"
      >
        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="max-w-2xl text-white">
            <p className="kicker !text-white/70">AIOW · AI voor het MKB</p>
            <h1
              className="mt-4 font-serif font-semibold leading-[1.02] tracking-display"
              style={{ fontSize: 'clamp(40px, 6.5vw, 76px)' }}
            >
              AI dat vandaag werkt. Voor de ondernemer die vandaag klanten heeft.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/85">
              Wij bouwen AI die meedraait in uw bedrijf: intake, planning, klantcontact en kennis.
              Gebouwd in Nederland, live bij echte klanten.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GlowPulseButton href="#contact">Boek een AI kennismaking (30 min)</GlowPulseButton>
              <Link
                href="#cases"
                className="rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white"
              >
                Bekijk onze werkende cases
              </Link>
            </div>
            <p className="mt-10 text-sm text-white/60">
              Live bij 6+ klanten · Vaste pilotprijs · Nederlands en direct bereikbaar
            </p>
          </div>
        </div>
      </HeroVideo>

      {/* ── Proposities ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Wat we anders doen</p>
          <h2
            className="mt-3 max-w-2xl font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Geen AI-experimenten. Werkende systemen.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {PROPOSITIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="bg-surface p-8 md:p-10">
              <p className="text-sm font-semibold text-ink-40">0{i + 1}</p>
              <h3 className="mt-4 text-[22px] font-semibold tracking-heading">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cases ────────────────────────────────────────────────────────── */}
      <section id="cases" className="scroll-mt-16 bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="kicker">Bewijs</p>
            <h2
              className="mt-3 font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Dit draait al.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 100}>
                <CaseCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics strip ────────────────────────────────────────────────── */}
      <section className="border-y border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-hairline md:grid-cols-4">
          {METRICS.map(([value, label]) => (
            <div key={label} className="px-5 py-10 text-center">
              <p className="font-serif text-3xl font-semibold text-terra-text md:text-4xl">{value}</p>
              <p className="mt-1 text-sm text-ink-60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Voor wie ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Voor wie</p>
          <h2
            className="mt-3 font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Herkent u uw bedrijf?
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.sector} delay={i * 80} className="flex flex-col justify-between bg-surface p-8">
              <div>
                <h3 className="text-lg font-semibold tracking-heading">{ind.sector}</h3>
                <p className="mt-3 leading-relaxed text-ink-60">{ind.pain}</p>
              </div>
              <Link
                href={`/cases/${ind.slug}`}
                className="mt-6 text-sm font-semibold text-terra-text hover:underline"
              >
                Zo ziet dat eruit →
              </Link>
            </Reveal>
          ))}
          <Reveal delay={400} className="flex flex-col justify-center bg-surface-sunken p-8">
            <p className="leading-relaxed text-ink-60">Uw branche er niet bij?</p>
            <Link href="/voor-mkb" className="mt-2 font-semibold text-ink hover:underline">
              Lees per branche wat AI concreet oplevert →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── AI intake demo ───────────────────────────────────────────────── */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Probeer het zelf</p>
            <h2
              className="mt-3 font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Wat kan AI voor uw bedrijf?
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-ink-60">
              Vier vragen, direct een eerlijk advies. Geen account, geen verplichting.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <AIIntakeDemo />
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="investering" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Investering</p>
          <h2
            className="mt-3 font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            U weet vooraf waar u aan toe bent.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={`flex flex-col justify-between border p-8 ${
                tier.featured ? 'border-terra bg-surface' : 'border-hairline bg-surface'
              }`}
            >
              <div>
                <p className="kicker">{tier.name}</p>
                <p className="mt-3 font-serif text-3xl font-semibold tracking-heading">{tier.price}</p>
                <p className="mt-1 text-sm text-ink-40">{tier.period}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-60">{tier.description}</p>
              </div>
              <Link
                href={tier.cta.href}
                className={`mt-8 inline-block text-center text-sm font-semibold ${
                  tier.featured
                    ? 'rounded-full bg-terra px-5 py-3 text-white transition-colors hover:bg-terra-deep'
                    : 'text-terra-text hover:underline'
                }`}
              >
                {tier.cta.label} {tier.featured ? '' : '→'}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-60">
          Geen offertetrajecten van weken. In het kennismakingsgesprek hoort u al een prijsindicatie.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Eerlijke antwoorden</p>
            <h2
              className="mt-3 font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Wat MKB-ondernemers ons vragen
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <FAQSection />
          </Reveal>
        </div>
      </section>

      {/* ── Ambient break ────────────────────────────────────────────────── */}
      <HeroVideo
        mp4Src="/videos/ambient-marble.mp4"
        webmSrc="/videos/ambient-marble.webm"
        poster="/videos/ambient-marble-poster.jpg"
        className="min-h-[60vh]"
      >
        <div className="flex min-h-[60vh] items-center justify-center px-5">
          <Reveal className="text-center">
            <h2
              className="font-serif font-semibold tracking-display text-white"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
            >
              Van vraag naar draaiende AI in 4 tot 6 weken.
            </h2>
            <Link href="#contact" className="mt-6 inline-block text-3xl text-terra" aria-label="Naar contact">
              ↓
            </Link>
          </Reveal>
        </div>
      </HeroVideo>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 md:px-8 md:py-32">
        <Reveal className="text-center">
          <p className="kicker">Contact</p>
          <h2
            className="mt-3 font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Plan een kennismaking. 30 minuten, gratis.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-ink-60">
            Liever eerst iets sturen? Beschrijf uw situatie in drie zinnen, u krijgt binnen één
            werkdag antwoord.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <BookingSection />
        </Reveal>
      </section>
    </main>
  )
}
