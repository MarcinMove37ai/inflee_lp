// src/app/[locale]/(legal)/privacy/page.tsx
import { Suspense } from 'react';
import PrivacyClient from './PrivacyClient';

export default function PrivacyPage() {
  return (
    <Suspense fallback={
      <div className="lg:col-span-12 w-full text-center py-24 text-slate-400">
        Loading...
      </div>
    }>
      <PrivacyClient />
    </Suspense>
  );
}