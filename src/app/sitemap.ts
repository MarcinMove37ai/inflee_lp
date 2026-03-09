import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://inflee.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://inflee.app',
          pl: 'https://inflee.app/pl',
        },
      },
    },
    {
      url: 'https://inflee.app/pl',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://inflee.app',
          pl: 'https://inflee.app/pl',
        },
      },
    },
  ];
}