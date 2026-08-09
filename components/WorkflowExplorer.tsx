'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  workflowCategories,
  workflows,
  type WorkflowCategory,
} from '@/lib/ai-platform'

export default function WorkflowExplorer({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState<'Alles' | WorkflowCategory>('Alles')

  const visible = useMemo(() => {
    const filtered = category === 'Alles' ? workflows : workflows.filter((item) => item.category === category)
    return compact ? filtered.slice(0, 4) : filtered
  }, [category, compact])

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Filter workflows op categorie">
        {workflowCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              category === item
                ? 'border-ink bg-ink text-white'
                : 'border-hairline bg-surface text-ink-60 hover:border-ink hover:text-ink'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((workflow) => (
          <article key={workflow.slug} id={workflow.slug} className="workflow-card scroll-mt-24">
            <div className="flex items-center justify-between gap-4">
              <span className="kicker">{workflow.category}</span>
              <span className="workflow-card__delivery">{workflow.delivery}</span>
            </div>
            <h3>{workflow.title}</h3>
            <p className="workflow-card__promise">{workflow.promise}</p>
            <div className="workflow-card__flow" aria-label={`Stroom voor ${workflow.title}`}>
              <span>Trigger</span>
              <i aria-hidden="true">→</i>
              <span>AI-voorwerk</span>
              <i aria-hidden="true">→</i>
              <span>Menselijke gate</span>
              <i aria-hidden="true">→</i>
              <span>Resultaat</span>
            </div>
            <dl className="workflow-card__details">
              <div>
                <dt>Start</dt>
                <dd>{workflow.trigger}</dd>
              </div>
              <div>
                <dt>Controle</dt>
                <dd>{workflow.humanGate}</dd>
              </div>
              <div>
                <dt>Uitkomst</dt>
                <dd>{workflow.result}</dd>
              </div>
            </dl>
            <Link
              href={`/ai-scan?workflow=${workflow.slug}`}
              className="mt-6 inline-flex items-center text-sm font-semibold text-terra-text hover:underline"
            >
              Onderzoek deze workflow →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
