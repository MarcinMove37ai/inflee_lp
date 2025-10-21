// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // ✅ KRYTYCZNE: Odrzuć nieprawidłowe locale (jak "logoW.webp")
  if (!locale || !routing.locales.includes(locale as any) || locale.includes('.')) {
    locale = routing.defaultLocale;
  }

  console.log('🌍 Request locale:', await requestLocale);
  console.log('🎯 Final locale:', locale);

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    console.log('✅ Loaded messages for:', locale);

    return {
      locale,
      messages
    };
  } catch (error) {
    console.error('❌ Error loading messages for locale:', locale, error);

    // ✅ Fallback do domyślnego locale w przypadku błędu
    const fallbackMessages = (await import(`../messages/${routing.defaultLocale}.json`)).default;
    return {
      locale: routing.defaultLocale,
      messages: fallbackMessages
    };
  }
});