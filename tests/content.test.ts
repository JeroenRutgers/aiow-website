import { describe, expect, it } from 'vitest'

import { knowledgeArticles, services, workflows } from '../lib/ai-platform'

function expectUnique(values: string[]) {
  expect(new Set(values).size).toBe(values.length)
}

describe('AI-platform content model', () => {
  it('uses unique stable slugs', () => {
    expectUnique(workflows.map((item) => item.slug))
    expectUnique(knowledgeArticles.map((item) => item.slug))
    expectUnique(services.map((item) => item.slug))
  })

  it('resolves every article workflow relation', () => {
    const workflowSlugs = new Set(workflows.map((item) => item.slug))
    for (const article of knowledgeArticles) {
      if (article.relatedWorkflow) expect(workflowSlugs.has(article.relatedWorkflow)).toBe(true)
    }
  })

  it('keeps evidence links secure and descriptive', () => {
    for (const article of knowledgeArticles) {
      for (const source of article.sources ?? []) {
        expect(source.url.startsWith('https://')).toBe(true)
        expect(source.label.length).toBeGreaterThan(10)
      }
    }
  })

  it('publishes the agreed commercial ladder', () => {
    expect(services.map((item) => [item.name, item.price])).toEqual([
      ['AI Workflow Lab', '€950'],
      ['AI Intake & Blueprint', '€2.950'],
      ['AI Bootcamp', 'vanaf €2.950'],
      ['Startmodule / Pilot', '€7.500 – €12.500'],
      ['Managed AI Workflow', 'vanaf €950 p/m'],
    ])
  })

  it('contains no empty public deliverables', () => {
    for (const service of services) {
      expect(service.deliverables.length).toBeGreaterThanOrEqual(4)
      expect(service.deliverables.every(Boolean)).toBe(true)
      expect(service.href.startsWith('/')).toBe(true)
    }
  })
})
