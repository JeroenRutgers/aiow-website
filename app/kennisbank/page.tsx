import type { Metadata } from 'next'
import Link from 'next/link'

import Reveal from '@/components/Reveal'
import { knowledgeArticles } from '@/lib/ai-platform'

export const metadata: Metadata = {
  title: 'AI-kennisbank en lessen',
  description: 'Leer generatieve AI, agents, veiligheid, menselijke controle, workflowkeuze en kosten begrijpen in praktische Nederlandse lessen.',
  alternates: { canonical: 'https://aiow.io/kennisbank' },
}

const paths = [
  {
    title: 'Ik begin met AI',
    description: 'Begrijp de basis, het verschil tussen tools en de eerste veilige werkafspraken.',
    slugs: ['wat-is-generatieve-ai', 'chatgpt-api-en-ai-agent-verschil', 'ai-geletterdheid-voor-teams'],
  },
  {
    title: 'Ik wil een workflow bouwen',
    description: 'Kies een proces, ontwerp de menselijke gate en maak succes meetbaar.',
    slugs: ['eerste-ai-workflow-kiezen', 'menselijke-controle-ai-workflow', 'veilig-ai-gebruiken-met-klantdata'],
  },
  {
    title: 'Ik wil AI inkopen of beheren',
    description: 'Vergelijk totale kosten en bepaal wanneer een eigen beheerde agent zinvol is.',
    slugs: ['wat-kost-ai-voor-een-mkb-bedrijf', 'eigen-ai-agent-op-eigen-hardware'],
  },
]

export default function KnowledgePage() {
  return (
    <main className="pt-16">
      <section className="knowledge-band">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
          <p className="platform-kicker">AIOW Kennisbank</p>
          <h1 className="section-title section-title--light max-w-4xl">Alles wat u nodig heeft om AI bewust te gebruiken.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Korte Nederlandse lessen voor ondernemers en teams. Praktisch, bronbewust en gericht op
            keuzes die u morgen in uw werk kunt toepassen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#leerpaden" className="button-primary button-primary--light">Kies een leerpad</Link>
            <Link href="/workflow-scan" className="button-secondary button-secondary--dark">Van leren naar een eerste workflow</Link>
          </div>
        </div>
      </section>

      <section id="leerpaden" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker">Leerpaden</p>
          <h2 className="section-title max-w-3xl">Begin bij de vraag die u nu heeft.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 80} className="rounded-[28px] border border-hairline bg-surface p-7">
              <p className="font-serif text-3xl font-semibold text-terra-text">0{index + 1}</p>
              <h3 className="mt-8 font-serif text-2xl font-semibold tracking-heading">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">{path.description}</p>
              <ol className="mt-6 grid gap-3">
                {path.slugs.map((slug, lessonIndex) => {
                  const article = knowledgeArticles.find((item) => item.slug === slug)
                  if (!article) return null
                  return (
                    <li key={slug}>
                      <Link href={`/kennisbank/${slug}`} className="group flex gap-3 border-t border-hairline pt-3 text-sm">
                        <span className="text-ink-40">{lessonIndex + 1}</span>
                        <span className="font-semibold group-hover:text-terra-text">{article.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="kicker">Alle lessen</p>
            <h2 className="section-title max-w-3xl">Lees op onderwerp en niveau.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {knowledgeArticles.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 60}>
                <Link href={`/kennisbank/${article.slug}`} className="flex min-h-[21rem] flex-col rounded-[24px] border border-hairline bg-surface p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.11em] text-ink-40">
                    <span>{article.category}</span>
                    <span>{article.level}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-semibold leading-tight tracking-heading">{article.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-60">{article.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-8 text-sm">
                    <span className="text-ink-40">{article.readTime}</span>
                    <strong className="text-terra-text">Lees les →</strong>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
