import { MetadataRoute } from 'next';
import { cases } from '@/lib/cases';

const BASE_URL = 'https://aiow.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/voor-mkb`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/ai-bootcamp`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/over-aiow`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...cases.map((c) => ({
      url: `${BASE_URL}/cases/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
