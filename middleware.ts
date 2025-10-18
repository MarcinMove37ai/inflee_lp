// middleware.ts (w głównym katalogu)
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Dopasuj WSZYSTKIE ścieżki NAJPIERW
  matcher: [
    // WAŻNE: Najpierw root path
    '/',

    // Potem ścieżki z locale
    '/(pl|en)/:path*',

    // Wykluczenia na końcu
    '/((?!_next|_vercel|api|.*\\..*).*)'
  ]
};