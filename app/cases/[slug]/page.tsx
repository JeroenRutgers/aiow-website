import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Reveal from '@/components/Reveal'
import CaseCard from '@/components/CaseCard'
import GlowPulseButton from '@/components/GlowPulseButton'
import { cases, getCase } from '@/lib/cases'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) return {}
  return {
    title: `${c.client}: ${c.industry} · AIOW case`,
    description: `Hoe AIOW voor ${c.client} (${c.industry}) ${c.short.toLowerCase()} Bekijk aanpak, oplossing en resultaat.`,
    alternates: { canonical: `https://aiow.io/cases/${c.slug}` },
    openGraph: {
      title: `${c.client} · AIOW case`,
      description: c.short,
      url: `https://aiow.io/cases/${c.slug}`,
      type: 'article',
      locale: 'nl_NL',
    },
  }
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params
  const c = getCase(slug)
  if (!c) notFound()

  const related = c.related.map(getCase).filter((r): r is NonNullable<typeof r> => Boolean(r))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${c.client}: ${c.short}`,
    about: { '@type': 'Organization', name: c.client },
    author: { '@type': 'Organization', name: 'AIOW', url: 'https://aiow.io' },
  }

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="border-b border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <nav className="text-sm text-ink-40" aria-label="Breadcrumb">
            <Link href="/#cases" className="hover:text-ink">
              Cases
            </Link>{' '}
            / <span className="text-ink-60">{c.client}</span>
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <h1
              className="font-serif font-semibold tracking-display"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
            >
              {c.client}
            </h1>
            <span className="rounded-full border border-hairline px-3 py-1 text-[11px] font-semibold uppercase tracking-kicker text-ink-60">
              {c.industry}
            </span>
          </div>
          <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink-60">{c.short}</p>
        </div>
      </section>

      {/* Feiten-band */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          {c.metrics.map((m) => (
            <div key={m} className="px-5 py-8 text-center font-medium text-terra-text md:px-8">
              {m}
            </div>
          ))}
        </div>
      </section>

      {/* Probleem */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Het probleem</p>
          <p
            className="mt-4 max-w-3xl font-serif leading-snug tracking-heading"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            {c.problem}
          </p>
        </Reveal>
      </section>

      {/* Aanpak */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="kicker">Onze aanpak</p>
          </Reveal>
          <div className="mt-10 max-w-2xl">
            {c.approach.map((fase, i) => (
              <Reveal key={fase.fase} delay={i * 80} className="relative border-l border-hairline pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-terra" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-lg font-semibold">{fase.fase}</h3>
                  <span className="text-sm text-ink-40">{fase.duur}</span>
                </div>
                <p className="mt-2 leading-relaxed text-ink-60">{fase.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we bouwden */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Wat we bouwden</p>
        </Reveal>
        <div className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {c.details.map((d, i) => (
            <Reveal key={d.title} delay={i * 100} className="bg-surface p-8">
              <h3 className="text-lg font-semibold tracking-heading">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-60">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Resultaat */}
      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="kicker !text-terra-text">Resultaat</p>
            <p
              className="mt-4 max-w-3xl font-serif leading-snug tracking-heading"
              style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
            >
              {c.result}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <h2
              className="font-serif font-semibold tracking-heading"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              {c.ctaLine}
            </h2>
            <div className="mt-8">
              <GlowPulseButton href="/#contact">Plan een kennismaking (30 min)</GlowPulseButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="kicker">Meer cases</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <CaseCard key={r.slug} c={r} compact />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
