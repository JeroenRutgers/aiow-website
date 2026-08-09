import type { Metadata } from 'next'
import Link from 'next/link'

import WorkflowScan from '@/components/WorkflowScan'

export const metadata: Metadata = {
  title: 'Gratis Workflow Scan',
  description:
    'Beoordeel in zeven minuten of een terugkerend bedrijfsproces geschikt is als eerste AI-workflow.',
  alternates: { canonical: 'https://aiow.io/workflow-scan' },
}

export default function WorkflowScanPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <section className="platform-subhero">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="platform-kicker">Gratis · 6 vragen · lokaal in uw browser</p>
          <h1 className="platform-title mt-5 max-w-4xl">Is dit een goede eerste AI-workflow?</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Beoordeel frequentie, herhaling, bronnen, eigenaarschap en risico. U krijgt direct een passende route: eerst meten, een Workflow Lab of een volledige Blueprint.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="proof-chip proof-chip--dark">Persoonsgegevens: 0</span>
            <span className="proof-chip proof-chip--dark">Verzending: 0</span>
            <span className="proof-chip proof-chip--dark">Resultaat: direct</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid gap-8 border-b border-ink/10 pb-12 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="kicker">Hoe de score werkt</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-heading">Een transparante keuzehulp.</h2>
          </div>
          <p className="text-base leading-8 text-ink/64">
            Veel herhaling, stabiele stappen en een duidelijke eigenaar verhogen de geschiktheid. Meerdere bronnen en grote gevolgen vragen een zwaardere voorbereiding. De scan belooft geen tijdwinst of omzet. Hij helpt alleen de volgende stap kiezen.
          </p>
        </div>

        <WorkflowScan />
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <p className="kicker">Liever eerst begrijpen</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-heading">Lees hoe u een eerste workflow kiest.</h2>
            <Link href="/kennisbank/eerste-ai-workflow-kiezen" className="button-secondary mt-7">Open de keuzehulp</Link>
          </div>
          <div>
            <p className="kicker">Klaar om één proces te ontleden</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-heading">Plan het AI Workflow Lab voor €950.</h2>
            <Link href="/ai-workflow-lab" className="button-primary mt-7">Bekijk inhoud en voorwaarden</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
