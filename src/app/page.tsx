// src/app/page.tsx
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// Importuj ten sam komponent co [locale]/page.tsx
import LocalePage from './[locale]/(main)/page';

export default async function RootPage() {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocalePage params={Promise.resolve({ locale })} />
    </NextIntlClientProvider>
  );
}
//push 
