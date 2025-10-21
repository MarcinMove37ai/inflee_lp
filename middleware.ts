// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ KLUCZOWE: Bezpośrednie wykluczenie plików statycznych PRZED next-intl
  if (
    pathname.includes('.') || // Wszystkie pliki z rozszerzeniem
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/images') || // Jeśli obrazy są w /images
    pathname.startsWith('/public')    // Jeśli coś jest w /public
  ) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Dopasuj wszystkie ścieżki OPRÓCZ plików statycznych
    '/((?!_next|_vercel|api|favicon|images|.*\\..*).)*',
    '/'
  ]
};