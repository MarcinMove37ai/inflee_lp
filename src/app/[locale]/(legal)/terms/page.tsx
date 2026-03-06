// src/app/[locale]/(legal)/terms/page.tsx
import { Suspense } from 'react';
import TermsClient from './TermsClient';

export default function TermsPage() {
  return (
    <Suspense fallback={
      <div className="lg:col-span-12 w-full text-center py-24 text-slate-400">
        Loading...
      </div>
    }>
      <TermsClient />
    </Suspense>
  );
}