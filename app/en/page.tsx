import type { Metadata } from 'next'
import Link from 'next/link'

import HeroVideo from '@/components/HeroVideo'
import GlowPulseButton from '@/components/GlowPulseButton'
import Reveal from '@/components/Reveal'
import BookingSection from '@/components/BookingSection'
import { cases } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'AIOW · AI for SMEs, live in 4 to 6 weeks',
  description:
    'AIOW builds working AI for Dutch SMEs: intake, planning, knowledge and lead follow-up. Fixed pilot pricing, live with real clients.',
  alternates: {
    canonical: 'https://aiow.io/en',
    languages: { 'nl-NL': 'https://aiow.io', en: 'https://aiow.io/en' },
  },
  openGraph: {
    title: 'AIOW · AI for SMEs',
    description:
      'AI that works today. For businesses with customers today. Fixed pilot pricing, live with real clients.',
    url: 'https://aiow.io/en',
    type: 'website',
    locale: 'en_US',
  },
}

const PROPOSITIONS = [
  {
    title: 'AI that fits your workflow',
    body: 'We start from how your business works today, not from a tool you have to learn. WhatsApp, phone, your calendar: AI connects to what you already use.',
  },
  {
    title: 'Working solutions, not prototypes',
    body: 'Six systems run with real clients today. You can see them, click through them and ask their owners about them.',
  },
  {
    title: 'Dutch and directly reachable',
    body: 'One point of contact, an answer within one working day. No ticket system in another timezone.',
  },
]

// EN samenvattingen per case (volgorde volgt lib/cases.ts)
const CASE_EN: Record<string, { built: string; result: string }> = {
  decostone: {
    built:
      'Knowledge base with 60+ advisory articles, a living maintenance dossier per project, WhatsApp photo intake and a client portal with project status.',
    result:
      'Requests arrive complete with photos and material; clients stay connected after delivery.',
  },
  doorz: {
    built:
      'AI intake that summarises buyers, sellers and investors in one minute, linked to calendar booking and instant lead alerts.',
    result: 'Every lead gets a follow-up within a minute; every meeting starts with a clear briefing.',
  },
  roostercopilot: {
    built:
      'Scheduling assistant for hospital wards: AI proposes, the planner decides. Built on EU AI Act principles, no black box.',
    result: 'Planners test scenarios in minutes instead of evenings; compliance is built in.',
  },
  kleanup: {
    built:
      'Reports via web and WhatsApp, AI triage with human checks, dispatch to field teams and photo evidence before and after.',
    result: 'From loose photo to managed ticket with service windows and reporting.',
  },
  'reload-hub': {
    built:
      'E-bike charging lockers for cafés and employers, with AI-driven matching of locations, partners and occupancy.',
    result: 'A complete pilot package from hardware spec to partner selection.',
  },
  glimp: {
    built:
      'Attention app built around three lists of ten, with on-device intelligence. No account, no feed.',
    result: 'Shows how AIOW builds privacy-first: intelligence without data leaving the device.',
  },
}

const PRICING = [
  {
    name: 'Intro call',
    price: 'Free',
    period: '30 minutes',
    description:
      'Video call or on location. You explain how your business works; we tell you honestly whether AI will pay off. If not, we say so.',
  },
  {
    name: 'AI Bootcamp',
    price: 'from €2,950',
    period: '1 working day · ex VAT',
    description:
      'One working day in which your team learns to apply AI to its own processes, ending with a 30/60/90-day action plan.',
  },
  {
    name: 'Pilot',
    price: '€7,500 – €12,500',
    period: 'fixed · 4 to 6 weeks',
    description:
      'One well-defined solution, live in your business. Fixed price up front, concrete deliverable, measurable result.',
  },
  {
    name: 'Ongoing',
    price: 'from €950',
    period: 'per month · cancel monthly',
    description:
      'Maintenance, monitoring, improvements and new iterations. You remain the owner of your data and solution.',
  },
]

export default function HomeEn() {
  return (
    <main>
      {/* Hero */}
      <HeroVideo
        mp4Src="/videos/hero-craft.mp4"
        webmSrc="/videos/hero-craft.webm"
        poster="/videos/hero-craft-poster.jpg"
        className="min-h-[100svh]"
      >
        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <div className="max-w-2xl text-white">
            <p className="kicker !text-white/70">AIOW · AI for SMEs</p>
            <h1
              className="mt-4 font-serif font-semibold leading-[1.02] tracking-display"
              style={{ fontSize: 'clamp(40px, 6.5vw, 76px)' }}
            >
              AI that works today. For businesses with customers today.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/85">
              We build AI that runs inside your business: intake, planning, customer contact and
              knowledge. Built in the Netherlands, live with real clients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GlowPulseButton href="#contact">Book a 30-minute AI intro call</GlowPulseButton>
              <Link
                href="#cases"
                className="rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white"
              >
                See our working cases
              </Link>
            </div>
            <p className="mt-10 text-sm text-white/60">
              Live with 6+ clients · Fixed pilot pricing · Dutch and directly reachable
            </p>
          </div>
        </div>
      </HeroVideo>

      {/* Propositions */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">What we do differently</p>
          <h2
            className="mt-3 max-w-2xl font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            No AI experiments. Working systems.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {PROPOSITIONS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="bg-surface p-8 md:p-10">
              <p className="text-sm font-semibold text-ink-40">0{i + 1}</p>
              <h3 className="mt-4 text-[22px] font-semibold tracking-heading">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="scroll-mt-16 bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="kicker">Proof</p>
            <h2
              className="mt-3 font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Already running.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cases.map((c, i) => {
              const en = CASE_EN[c.slug]
              return (
                <Reveal key={c.slug} delay={(i % 2) * 100}>
                  <Link
                    href={`/cases/${c.slug}`}
                    className="group flex h-full flex-col justify-between border border-hairline bg-surface p-8 transition-colors duration-500 hover:border-ink-40 md:p-10"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <span className="font-serif text-2xl tracking-heading">{c.client}</span>
                        <span className="whitespace-nowrap rounded-full border border-hairline px-3 py-1 text-[11px] font-semibold uppercase tracking-kicker text-ink-60">
                          {c.industry}
                        </span>
                      </div>
                      <p className="text-[17px] leading-relaxed text-ink-60">{en?.built ?? c.built}</p>
                    </div>
                    <div className="mt-8">
                      <p className="text-[15px] font-medium leading-relaxed text-terra-text">
                        {en?.result ?? c.result}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-ink transition-transform duration-500 group-hover:translate-x-1">
                        View case (Dutch) →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Investment</p>
          <h2
            className="mt-3 font-serif font-semibold tracking-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            You know the cost up front.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={`flex flex-col justify-between border p-8 ${
                tier.name === 'Pilot' ? 'border-terra bg-surface' : 'border-hairline bg-surface'
              }`}
            >
              <div>
                <p className="kicker">{tier.name}</p>
                <p className="mt-3 font-serif text-3xl font-semibold tracking-heading">{tier.price}</p>
                <p className="mt-1 text-sm text-ink-40">{tier.period}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-60">{tier.description}</p>
              </div>
              <Link
                href="#contact"
                className={`mt-8 inline-block text-center text-sm font-semibold ${
                  tier.name === 'Pilot'
                    ? 'rounded-full bg-terra px-5 py-3 text-white transition-colors hover:bg-terra-deep'
                    : 'text-terra-text hover:underline'
                }`}
              >
                {tier.name === 'Pilot' ? 'Discuss your pilot' : 'Ask about it →'}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-60">
          No weeks-long quote processes. You will hear a price indication in the intro call.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Contact</p>
            <h2
              className="mt-3 font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Book an intro call. 30 minutes, free.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-ink-60">
              Prefer to write first? Describe your situation in three sentences and you will get an
              answer within one working day. Dutch and English both welcome.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <BookingSection />
          </Reveal>
          <p className="mt-10 text-center text-sm text-ink-40">
            <Link href="/" className="hover:text-ink">
              Nederlandse versie →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
