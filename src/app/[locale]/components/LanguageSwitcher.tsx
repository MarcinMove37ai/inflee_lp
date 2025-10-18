// app/[locale]/components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (nextLocale: string) => {
    // Nie przełączaj, jeśli już jesteśmy na tym języku
    if (nextLocale === locale) return;

    // Usuwa obecny locale z pathname (np. /pl/o-nas -> /o-nas)
    const newPath = pathname.startsWith(`/${locale}`)
      ? pathname.substring(locale.length + 1)
      : pathname;

    // Użyj startTransition, aby zmiana języka nie blokowała interfejsu
    startTransition(() => {
      router.replace(`/${nextLocale}${newPath}`);
    });
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => switchLocale('pl')}
        disabled={isPending}
        className={`font-semibold transition-colors ${locale === 'pl' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
      >
        PL
      </button>
      <span className="text-slate-500">|</span>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`font-semibold transition-colors ${locale === 'en' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
      >
        EN
      </button>
    </div>
  );
}