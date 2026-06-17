import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://alekotools.com', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://alekotools.com/about', changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://alekotools.com/contact', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
