import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { TAPE_THIS_DOCS } from '@/lib/tape-this-docs'

type Props = { params: Promise<{ doc: string }> }

export function generateStaticParams() {
  return Object.keys(TAPE_THIS_DOCS).map((doc) => ({ doc }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params
  const d = TAPE_THIS_DOCS[doc]
  if (!d) return {}
  return {
    title: `${d.title} · Tape This`,
    robots: { index: false },
    alternates: { canonical: `https://aiow.io/tape-this/${doc}` },
  }
}

export default async function TapeThisDocPage({ params }: Props) {
  const { doc } = await params
  const d = TAPE_THIS_DOCS[doc]
  if (!d) notFound()

  return (
    <main className="pt-16">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-sm text-ink-60 hover:text-ink">
          ← Back to Home
        </Link>
        <h1 className="mt-6 font-serif text-3xl font-semibold tracking-heading md:text-4xl">
          {d.title}
        </h1>
        <p className="mt-2 text-sm text-ink-40">Last updated: {d.updated}</p>
        <div className="mt-10 space-y-8">
          {d.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold tracking-heading">{s.h}</h2>
              {s.p.map((para, i) =>
                Array.isArray(para) ? (
                  <ul key={i} className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-ink-60">
                    {para.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="mt-3 leading-relaxed text-ink-60">
                    {para}
                  </p>
                )
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
