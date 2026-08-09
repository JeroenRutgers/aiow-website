import type { Metadata } from 'next'
import Link from 'next/link'

import BookingSection from '@/components/BookingSection'
import Reveal from '@/components/Reveal'
import { services } from '@/lib/ai-platform'

export const metadata: Metadata = {
  title: 'AI-diensten voor MKB',
  description:
    'Van gratis Workflow Scan en AI Workflow Lab tot teamtraining, een werkende startmodule en doorlopend beheer.',
  alternates: { canonical: 'https://aiow.io/diensten' },
}

const managedLayers = [
  {
    title: 'Eigendom bij uw bedrijf',
    items: ['Mac of andere afgesproken hardware', 'Opslag en projectdata', 'Provideraccounts', 'Bedrijfsspecifieke configuratie en maatwerkskills'],
  },
  {
    title: 'Beheer door AIOW',
    items: ['Installatie en beveiligde configuratie', 'Versies, health checks en herstel', 'Support en maandelijkse optimalisatie', 'Geteste promotie van wijzigingen'],
  },
  {
    title: 'Menselijke grenzen',
    items: ['Akkoord vóór externe acties', 'Budget- en runtimelimieten', 'Intrekbare beheerstoegang', 'Logboek en terugvalpunt per release'],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <section className="platform-hero min-h-[62svh]">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
          <p className="platform-kicker">AIOW diensten</p>
          <h1 className="platform-hero__title max-w-[11ch]">Van eerste inzicht naar een beheerde AI-workflow.</h1>
          <p className="platform-hero__intro max-w-2xl">
            Iedere fase heeft een vaste uitkomst, eigenaar en beslismoment. U kunt klein beginnen en
            pas opschalen wanneer de vorige stap waarde bewijst.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/workflow-scan" className="button-primary button-primary--light">Doe de gratis Workflow Scan</Link>
            <Link href="/workflows" className="button-secondary button-secondary--dark">Bekijk workflows</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Vijf betaalde stappen</p>
          <h2 className="section-title max-w-3xl">Koop de stap die u nu kunt gebruiken.</h2>
          <p className="section-intro max-w-2xl">
            De prijzen hieronder zijn startpunten voor de beschreven scope. Databronnen, koppelingen,
            hardware en providergebruik worden vóór opdracht zichtbaar gemaakt.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80} className={`service-card ${service.featured ? 'service-card--featured' : ''}`}>
              <p className="kicker">{service.eyebrow}</p>
              <h3>{service.name}</h3>
              <p className="service-card__promise">{service.promise}</p>
              <p className="service-card__price">{service.price}</p>
              <p className="service-card__tax">{service.tax}</p>
              <p className="service-card__time">{service.timeframe}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-60">{service.forWho}</p>
              <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link href={service.href}>{service.cta} →</Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="managed-ai-workflow" className="scroll-mt-24 bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="kicker">Managed AI Workflow</p>
              <h2 className="section-title">Uw module. Uw accounts. Beheerd als productiesysteem.</h2>
              <p className="section-intro">
                Het managed model start na acceptatie van een eerste module. AIOW bewaakt de werking,
                behandelt incidenten, bespreekt gebruik en verbetert binnen een afgesproken bundel.
                Uw bedrijf houdt eigendom van data, accounts en klantspecifieke configuratie.
              </p>
              <div className="mt-7 rounded-2xl border border-hairline bg-surface p-5">
                <p className="font-serif text-3xl font-semibold tracking-heading">vanaf €950 per maand</p>
                <p className="mt-1 text-sm text-ink-60">excl. btw · providergebruik en licenties apart</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-60">
                  Inclusief monitoring, incidenttriage, maandelijkse gebruiksreview en kleine
                  optimalisaties binnen de bundel. Nieuwe modules en grote koppelingen krijgen vooraf
                  een aparte scope.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {managedLayers.map((layer) => (
                <article key={layer.title} className="rounded-[24px] border border-hairline bg-surface p-6">
                  <h3 className="font-serif text-xl font-semibold tracking-heading">{layer.title}</h3>
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-ink-60">
                    {layer.items.map((item) => (
                      <li key={item} className="border-t border-hairline pt-3 first:border-0 first:pt-0">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Commerciële grens</p>
            <h2 className="section-title">Vooraf helder wat binnen de prijs valt.</h2>
          </div>
          <div className="grid gap-4 text-sm leading-relaxed text-ink-60">
            <p>Een Startmodule / Pilot bevat één afgebakende workflow, afgesproken bronnen, menselijke gates, acceptatietests, onboarding en overdracht.</p>
            <p>Volledige CRM-migraties, onbeperkt maatwerk, extra agents, meerdere bedrijfsonderdelen en 24/7-beheer krijgen een aparte scope en prijs.</p>
            <p>Het AI Workflow Lab van €950 wordt éénmalig volledig verrekend wanneer de Intake & Blueprint binnen 30 dagen start.</p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-hairline bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="text-center">
            <p className="kicker">Contact</p>
            <h2 className="section-title mx-auto max-w-3xl">Welke fase past bij uw bedrijf?</h2>
            <p className="section-intro mx-auto max-w-2xl">Beschrijf het proces, de systemen en het gewenste resultaat. U krijgt een directe en eerlijke eerste inschatting.</p>
          </Reveal>
          <Reveal delay={120} className="mt-12"><BookingSection /></Reveal>
        </div>
      </section>
    </main>
  )
}
