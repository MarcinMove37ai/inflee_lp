// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // ✅ KRYTYCZNE: Odrzuć nieprawidłowe locale (jak "logoW.webp")
  if (!locale || !routing.locales.includes(locale as any) || locale.includes('.')) {
    locale = routing.defaultLocale; // teraz zwróci 'en'
  }


  try {
    const messages = (await import(`../messages/${locale}.json`)).default;

    return {
      locale,
      messages
    };
  } catch (error) {

    // ✅ Fallback do domyślnego locale w przypadku błędu
    const fallbackMessages = (await import(`../messages/${routing.defaultLocale}.json`)).default;
    return {
      locale: routing.defaultLocale,
      messages: fallbackMessages
    };
  }
});