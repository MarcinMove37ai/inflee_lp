// app/[locale]/layout.tsx
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import CookieConsent from './components/CookieConsent';
// 🛑 USUNIĘTO: import { Inter } from 'next/font/google';

// 🛑 USUNIĘTO: const inter = Inter(...)

// --- Typ Props ---
type Props = {
  params: Promise<{ locale: string }>;
};

// ✅ Ustawienia viewportu
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ✅ Asynchroniczne metadata (tu params jest Promise)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params; // ← poprawnie awaitowane
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
      url: 'https://inflee.app/',
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
      canonical: `https://inflee.app/${locale}`,
      languages: { pl: 'https://inflee.app/pl', en: 'https://inflee.app/en' },
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

// --- GŁÓWNY KOMPONENT LAYOUTU (tu params NIE jest Promise) ---
export default async function LocaleLayout({
  children,
  params, // <-- 1. Pobierz cały obiekt `params`
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;// <-- 2. Wyciągnij `locale` wewnątrz funkcji
  const messages = await getMessages({ locale });

  return (
    // 🛑 USUNIĘTO: `${inter.className}` z tagu <html>
    <html lang={locale} className={`scroll-smooth bg-[#0A0A0A]`}>
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* ✅ Preload dla obrazów */}
        <link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/logoW.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hiw_1_1.webp" />
        <link rel="preload" as="image" href="/images/hiw_2_1.webp" />
        <link rel="preload" as="image" href="/images/hiw_3_1.webp" />
        <link rel="preload" as="image" href="/images/hiw_4_1.webp" />

        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '574848185272133');
                  fbq('track', 'PageView');
                }, 3000);
              });
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=574848185272133&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'inflee.app',
              description:
                'Platforma AI dla początkujących twórców cyfrowych. Analizuj profil, targetuj odbiorców, monetyzuj treści.',
              url: 'https://inflee.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://inflee.app/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://instagram.com/inflee_app',
                'https://linkedin.com/company/inflee-app',
              ],
            }),
          }}
        />
      </head>
      <body className="text-slate-200 overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}