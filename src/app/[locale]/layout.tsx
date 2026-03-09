// app/[locale]/layout.tsx
import Analytics from './components/Analytics';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import CookieConsent from './components/CookieConsent';

type Props = {
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'inflee.app' }],
    creator: 'inflee.app',
    publisher: 'inflee.app',
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      url: `https://inflee.app/${locale === 'en' ? '' : locale}`,
      siteName: 'inflee.app',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: 'https://inflee.app/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
          type: 'image/png',
        },
        {
          url: 'https://inflee.app/og-image-square.png',
          width: 1200,
          height: 1200,
          alt: t('ogImageSquareAlt'),
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@inflee_app',
      creator: '@inflee_app',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [{ url: 'https://inflee.app/og-image.png', alt: t('ogImageAlt') }],
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
    metadataBase: new URL('https://inflee.app'),
    alternates: {
      canonical: `https://inflee.app/${locale === 'en' ? '' : locale}`,
      languages: { pl: 'https://inflee.app/pl', en: 'https://inflee.app/' },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'inflee.app',
            url: 'https://inflee.app',
            logo: 'https://inflee.app/android-chrome-512x512.png',
            description: locale === 'pl'
              ? 'Platforma do tworzenia e-booków i stron lądowania z AI'
              : 'AI-powered platform for creating ebooks and landing pages',
            sameAs: [
              'https://instagram.com/inflee_app',
              'https://linkedin.com/company/inflee-app',
            ],
          }),
        }}
      />
      <Analytics />
      {children}
      <CookieConsent />
    </NextIntlClientProvider>
  );
}