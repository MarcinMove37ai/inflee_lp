// src/app/[locale]/components/Analytics.tsx
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { FB_PIXEL_ID } from "@/app/lib/fbPixel";
// ❌ USUNIĘTO import usePathname - komponent ma być ślepy na zmiany URL

export default function Analytics() {
  // Flaga w pamięci (nie resetuje się przy renderowaniu)
  const isInitialized = useRef(false);

  useEffect(() => {
    // 1. Zabezpieczenie: Jeśli już zainicjowano w tej sesji komponentu, nie rób nic.
    if (isInitialized.current) return;

    // Sprawdzamy czy fbq istnieje (powinno, bo Script jest ładowany poniżej)
    if (typeof window !== 'undefined' && (window as any).fbq) {

        // --- BLOKADA 1: Bezpośrednie ustawienie flagi w obiekcie ---
        (window as any).fbq.disablePushState = true;
        (window as any).fbq.allowDuplicatePageViews = false;

        // --- BLOKADA 2: Konfiguracja w INIT ---
        // Przenosimy INIT tutaj. Wykona się tylko raz.
        (window as any).fbq('init', FB_PIXEL_ID, {}, {
            autoConfig: false,
            disablePushState: true
        });

        // Track PageView - tylko raz
        (window as any).fbq('track', 'PageView');

        console.log("🔒 [Analytics] Pixel zainicjowany (History Tracking: DISABLED). PageView wysłane.");

        // Zamykamy bramkę
        isInitialized.current = true;
    }

  // Pusta tablica zależności [] oznacza: uruchom tylko przy montowaniu layoutu.
  // Brak usePathname sprawia, że zmiana hasha (#pricing) nie wymusi ponownego sprawdzenia.
  }, []);

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          // UWAGA: Usunęliśmy stąd 'init'. Jest teraz wywoływany w useEffect,
          // co daje nam pełną kontrolę nad momentem uruchomienia.
        `,
      }}
    />
  );
}