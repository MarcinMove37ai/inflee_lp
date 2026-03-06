// src/app/[locale]/(legal)/layout.tsx
'use client';

import { useLocale } from 'next-intl';
import { Link as IntlLink } from '@/i18n/routing';
import Image from 'next/image';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <LazyMotion features={domAnimation}>
      <div
        style={{
          fontFamily: '"Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
          minHeight: '100vh',
          background: '#0a0a0a',
          color: 'white',
          width: '100%',
        }}
        suppressHydrationWarning
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 h-20">
          <div className="container mx-auto px-6 h-full flex justify-between items-center">
            <IntlLink
              href="/"
              className="group flex items-center cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/70 backdrop-blur-sm rounded-lg ring-1 ring-white/20 flex items-center justify-center p-1 sm:p-1.5 group-hover:ring-white/30 transition-all duration-300 mr-2 sm:mr-3">
                <Image
                  src="/logoW.webp"
                  alt="inflee.app logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <h1
                  className="text-xl sm:text-2xl font-bold leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #A855F7, #6366F1)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  inflee.app
                </h1>
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-400 tracking-wide uppercase leading-tight group-hover:text-slate-300 transition-colors duration-300">
                  {isEn ? 'Educate | Grow | Earn' : 'Edukuj | Rośnij | Zarabiaj'}
                </p>
              </div>
            </IntlLink>
          </div>
        </header>

        {/* Main */}
        <main className="pt-20 relative flex flex-col justify-center" style={{ minHeight: '100vh' }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/heroR.webp"
              alt=""
              aria-hidden="true"
              fill
              priority
              quality={75}
              className="object-cover object-center lg:object-left"
              sizes="100vw"
            />
          </div>

          {/* Gradient Overlay - mobile */}
          <div
            className="absolute inset-0 z-10 block lg:hidden"
            style={{ background: 'rgba(1,1,1,0.80)' }}
          />

          {/* Gradient Overlay - desktop */}
          <div
            className="absolute inset-0 z-10 hidden lg:block"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(1,1,1,0.90) 45%, rgba(1,1,1,0.95) 100%)',
            }}
          />

          {/* Content */}
          <section className="relative z-20">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {children}
            </div>
          </section>
        </main>
      </div>
    </LazyMotion>
  );
}