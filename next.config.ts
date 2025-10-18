import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // KRYTYCZNE: Enable standalone output dla Docker
  output: 'standalone',

  // Wyłącz ESLint podczas build dla Docker (można włączyć później)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Wyłącz TypeScript checking podczas build (opcjonalnie)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Opcjonalne optymalizacje dla produkcji
  compress: true,
  poweredByHeader: false,

  // Security headers (opcjonalne)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);