import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  if (process.env.AIOW_STAGING === '1') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://aiow.io/sitemap.xml',
  };
}
