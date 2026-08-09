import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getKnowledgeArticle, getWorkflow, knowledgeArticles } from '@/lib/ai-platform'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getKnowledgeArticle(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://aiow.io/kennisbank/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: `https://aiow.io/kennisbank/${article.slug}`,
      publishedTime: article.updated,
      modifiedTime: article.updated,
      locale: 'nl_NL',
    },
  }
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getKnowledgeArticle(slug)
  if (!article) notFound()

  const workflow = article.relatedWorkflow ? getWorkflow(article.relatedWorkflow) : undefined
  const related = knowledgeArticles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.updated,
    dateModified: article.updated,
    inLanguage: 'nl-NL',
    mainEntityOfPage: `https://aiow.io/kennisbank/${article.slug}`,
    author: { '@type': 'Organization', name: 'AIOW BV', url: 'https://aiow.io' },
    publisher: { '@type': 'Organization', name: 'AIOW BV', url: 'https://aiow.io' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AIOW', item: 'https://aiow.io' },
      { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://aiow.io/kennisbank' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://aiow.io/kennisbank/${article.slug}` },
    ],
  }

  return (
    <main className="pt-16">
      {[articleSchema, breadcrumbSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      ))}

      <article>
        <header className="bg-surface-sunken">
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-20 md:px-8 md:pb-24 md:pt-28">
            <Link href="/kennisbank" className="text-sm font-semibold text-terra-text hover:underline">← Alle AI-lessen</Link>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-40">
              <span>{article.category}</span><span>·</span><span>{article.level}</span><span>·</span><span>{article.readTime}</span>
            </div>
            <h1 className="section-title mt-5 max-w-4xl">{article.title}</h1>
            <p className="section-intro max-w-2xl">{article.description}</p>
            <p className="mt-8 text-sm text-ink-40">Bijgewerkt: 9 augustus 2026 · AIOW Kennisbank</p>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-28">
          <div className="min-w-0">
            <section className="rounded-[24px] border border-terra/30 bg-[#FFF8F2] p-6 md:p-8">
              <p className="kicker text-terra-text">Kort antwoord</p>
              <p className="mt-4 text-lg leading-relaxed">{article.shortAnswer}</p>
            </section>

            <div className="mt-14 grid gap-14">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl font-semibold tracking-heading md:text-4xl">{section.heading}</h2>
                  <div className="mt-5 grid gap-4 text-[17px] leading-[1.8] text-ink-60">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3 rounded-[20px] bg-surface-sunken p-6 text-[15px] leading-relaxed text-ink-60">
                      {section.bullets.map((bullet) => <li key={bullet} className="border-t border-hairline pt-3 first:border-0 first:pt-0">{bullet}</li>)}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {article.sources && article.sources.length > 0 && (
              <aside className="mt-12 rounded-2xl border border-ink/10 bg-paper p-6">
                <p className="kicker">Bronnen en verder lezen</p>
                <ul className="mt-4 space-y-3">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer" className="font-semibold text-terra-deep underline decoration-terra/30 underline-offset-4 hover:decoration-terra-deep">
                        {source.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <section className="mt-14 rounded-[2rem] bg-ink p-7 text-white md:p-10">
              <p className="platform-kicker">Na deze les</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-heading">{article.outcome}</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {workflow && <Link href={`/workflows#${workflow.slug}`} className="button-primary button-primary--light">Bekijk passende workflow</Link>}
                <Link href="/workflow-scan" className="button-secondary button-secondary--dark">Vertaal dit naar uw bedrijf</Link>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[20px] border border-hairline bg-surface p-5">
              <p className="kicker">In deze les</p>
              <ol className="mt-4 grid gap-3 text-sm text-ink-60">
                {article.sections.map((section, index) => <li key={section.heading}><span className="mr-2 text-ink-40">0{index + 1}</span>{section.heading}</li>)}
              </ol>
            </div>
            {related.length > 0 && (
              <div className="mt-4 rounded-[20px] bg-surface-sunken p-5">
                <p className="kicker">Lees verder</p>
                <div className="mt-4 grid gap-4">
                  {related.map((item) => <Link key={item.slug} href={`/kennisbank/${item.slug}`} className="text-sm font-semibold leading-snug hover:text-terra-text">{item.title} →</Link>)}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </main>
  )
}
