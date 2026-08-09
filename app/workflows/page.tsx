import type { Metadata } from 'next'
import Link from 'next/link'

import Reveal from '@/components/Reveal'
import WorkflowExplorer from '@/components/WorkflowExplorer'

export const metadata: Metadata = {
  title: 'AI-workflows voor MKB',
  description: 'Bekijk praktische AI-workflows met trigger, AI-voorwerk, menselijke goedkeuring en meetbare uitkomst.',
  alternates: { canonical: 'https://aiow.io/workflows' },
}

export default function WorkflowsPage() {
  return (
    <main className="pt-16">
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
          <p className="kicker">AIOW workflowbibliotheek</p>
          <h1 className="section-title max-w-4xl">Van klantvraag naar gecontroleerde uitkomst.</h1>
          <p className="section-intro max-w-2xl">
            Een workflow is een hele keten: startmoment, bronnen, AI-voorwerk, menselijke beslissing
            en een bruikbare uitkomst. Kies een categorie en bekijk de grens per stap.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/workflow-scan" className="button-primary">Beoordeel uw eerste workflow</Link>
            <Link href="/kennisbank/eerste-ai-workflow-kiezen" className="button-secondary">Lees de keuzehulp</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal><WorkflowExplorer /></Reveal>
      </section>

      <section className="border-y border-hairline bg-surface-sunken">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-3">
          {[
            ['1. Meet de startsituatie', 'Leg doorlooptijd, correcties, ontbrekende informatie en eigenaarschap vast vóór de bouw.'],
            ['2. Bouw met een gate', 'Maak zichtbaar welke stappen automatisch lopen en wie vóór externe impact beslist.'],
            ['3. Accepteer op bewijs', 'Test echte scenario’s, fouten en herstel. Pas daarna begint dagelijks gebruik.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[24px] border border-hairline bg-surface p-6">
              <h2 className="font-serif text-2xl font-semibold tracking-heading">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-60">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
