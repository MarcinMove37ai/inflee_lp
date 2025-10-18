// src/i18n/config.ts
export const locales = ['pl', 'en'] as const;
export const defaultLocale = 'pl' as const;

export type Locale = (typeof locales)[number];