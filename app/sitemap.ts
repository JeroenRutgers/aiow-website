import { MetadataRoute } from 'next'
import { cases } from '@/lib/cases'
import { knowledgeArticles } from '@/lib/ai-platform'

const BASE_URL = 'https://aiow.io'
const UPDATED = new Date('2026-08-09T00:00:00Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/diensten`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/workflow-scan`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/ai-workflow-lab`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.93 },
    { url: `${BASE_URL}/workflows`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/kennisbank`, lastModified: UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/voor-mkb`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/ai-bootcamp`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/over-aiow`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/glimp`, lastModified: UPDATED, changeFrequency: 'monthly', priority: 0.5 },
    ...knowledgeArticles.map((article) => ({
      url: `${BASE_URL}/kennisbank/${article.slug}`,
      lastModified: new Date(`${article.updated}T00:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...cases.map((item) => ({
      url: `${BASE_URL}/cases/${item.slug}`,
      lastModified: UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.55,
    })),
  ]
}
