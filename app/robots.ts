import type { MetadataRoute } from 'next';

// Site is public and indexable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://alekotools.com/sitemap.xml',
  };
}
