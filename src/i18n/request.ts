// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Walidacja locale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  console.log('🌍 Request locale:', await requestLocale);
  console.log('🎯 Final locale:', locale);

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    console.log('✅ Loaded messages for:', locale);
    console.log('📦 Message keys:', Object.keys(messages).join(', '));
    console.log('🔤 Nav features:', messages.nav?.features);

    return {
      locale,
      messages
    };
  } catch (error) {
    console.error('❌ Error loading messages for locale:', locale, error);
    throw error;
  }
});