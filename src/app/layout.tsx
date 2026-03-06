// src/app/layout.tsx
import type { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';
import './[locale]/globals.css';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className="scroll-smooth bg-[#0A0A0A]" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className="text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}