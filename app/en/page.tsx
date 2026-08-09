import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AIOW · AI workflows and managed agents',
  description:
    'AIOW helps Dutch companies understand AI, build one valuable workflow and scale into a managed AI team with human control.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://aiow.io/en' },
}

const services = [
  ['AI Workflow Lab', '€950 ex VAT', 'A live process review, risk and data check, three opportunities and a 30-day action card.'],
  ['AI Intake & Blueprint', '€2,950 ex VAT', 'A current-state map, source inventory, risk notes and a fixed MVP proposal.'],
  ['AI Bootcamp', 'from €2,950 ex VAT', 'One working day with your team, using your own processes and safe examples.'],
  ['Start module / Pilot', '€7,500–€12,500 ex VAT', 'One bounded workflow, implemented and tested in four to six weeks.'],
  ['Managed AI Workflow', 'from €950/month ex VAT', 'Monitoring, incident triage, usage review and bounded optimization for an accepted module.'],
]

export default function EnglishPage() {
  return (
    <main className="pt-16">
      <section className="platform-hero min-h-[72svh]">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
          <p className="platform-kicker">AIOW · English overview</p>
          <h1 className="platform-hero__title max-w-[11ch]">Learn AI. Build what works. Scale with control.</h1>
          <p className="platform-hero__intro max-w-2xl">
            We help Dutch businesses understand AI, build one useful workflow and scale it into a
            managed production system. Every external action remains subject to a visible human decision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/workflow-scan" className="button-primary button-primary--light">Try the free Workflow Scan</Link>
            <a href="mailto:jeroen@aiow.io?subject=AI%20Workflow%20Lab" className="button-secondary button-secondary--dark">Contact Jeroen</a>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/45">
            Our complete knowledge base and guided lessons are currently published in Dutch. This
            English page is a concise commercial overview and is intentionally not indexed yet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="kicker">Services</p>
        <h2 className="section-title max-w-3xl">A clear next step for each stage.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map(([title, price, text]) => (
            <article key={title} className="rounded-[24px] border border-hairline bg-surface p-7">
              <h3 className="font-serif text-3xl font-semibold tracking-heading">{title}</h3>
              <p className="mt-3 font-semibold text-terra-text">{price}</p>
              <p className="mt-5 leading-relaxed text-ink-60">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface-sunken">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-3">
          {[
            ['Client ownership', 'Hardware, storage, provider accounts and project data can remain in the client’s name.'],
            ['Human approval', 'Sending, publishing, buying and other external actions require explicit approval.'],
            ['Tested delivery', 'Build, tests, acceptance criteria, evidence and rollback are part of the delivery.'],
          ].map(([title, text]) => (
            <article key={title}>
              <h2 className="font-serif text-2xl font-semibold tracking-heading">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-60">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
