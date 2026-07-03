import Link from 'next/link'
import type { Case } from '@/lib/cases'

/**
 * Case-kaart: hairline, industrie-badge als pill, resultaatregel in terracotta.
 * De hele kaart is één link.
 */
export default function CaseCard({ c, compact = false }: { c: Case; compact?: boolean }) {
  return (
    <Link
      href={`/cases/${c.slug}`}
      className="group flex h-full flex-col justify-between border border-hairline bg-surface p-8 transition-colors duration-500 hover:border-ink-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra md:p-10"
    >
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="font-serif text-2xl tracking-heading">{c.client}</span>
          <span className="whitespace-nowrap rounded-full border border-hairline px-3 py-1 text-[11px] font-semibold uppercase tracking-kicker text-ink-60">
            {c.industry}
          </span>
        </div>
        <p className="text-[17px] leading-relaxed text-ink-60">{compact ? c.short : c.built}</p>
      </div>
      <div className="mt-8">
        <p className="text-[15px] font-medium leading-relaxed text-terra-text">{c.result}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-ink transition-transform duration-500 group-hover:translate-x-1">
          Bekijk case →
        </span>
      </div>
    </Link>
  )
}
