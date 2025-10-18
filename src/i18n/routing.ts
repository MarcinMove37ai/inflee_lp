// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  localeDetection: true  // <-- DODAJ TO!
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);