// src/app/page.tsx
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  console.log('🌍 Full Accept-Language:', acceptLanguage);

  // Pobierz PIERWSZY język z listy (najwyższy priorytet)
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase());

  console.log('📋 All languages:', languages);

  // Sprawdź TYLKO PIERWSZY język
  const firstLanguage = languages[0] || '';
  const preferEnglish = firstLanguage.startsWith('en');

  console.log('🎯 First language:', firstLanguage);
  console.log('🏴 Prefer English?', preferEnglish);

  // Przekieruj na odpowiedni język
  const locale = preferEnglish ? 'en' : 'pl';

  console.log('✅ Redirecting to:', `/${locale}`);

  redirect(`/${locale}`);
}