// app/[locale]/components/Analytics.tsx
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { FB_PIXEL_ID, trackHybridEvent } from "@/app/lib/fbPixel"; // 👈 Importujemy nową funkcję hybrydową

export default function Analytics() {
  // Flaga, żeby kod wykonał się tylko raz (React Strict Mode protection)
  const isInitialized = useRef(false);

  useEffect(() => {
    // 1. Zabezpieczenie przed podwójnym odpaleniem
    if (isInitialized.current) return;

    // Sprawdzamy czy fbq istnieje (powinno, bo Script ładuje się poniżej)
    if (typeof window !== 'undefined' && (window as any).fbq) {

        // --- BLOKADY AUTOMATYZMU ---
        // Wyłączamy automatyczne śledzenie zmian URL (kotwic)
        (window as any).fbq.disablePushState = true;
        (window as any).fbq.allowDuplicatePageViews = false;

        // --- INIT ---
        (window as any).fbq('init', FB_PIXEL_ID, {}, {
            autoConfig: false,
            disablePushState: true
        });

        // 🔥 KLUCZOWA ZMIANA: Wysyłamy PageView HYBRYDOWO (Browser + Server)
        console.log("🔒 [Analytics] Init & Hybrid PageView sent");
        trackHybridEvent('PageView');

        // Zamykamy bramkę
        isInitialized.current = true;
    }
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

          // INIT został przeniesiony do useEffect wyżej, aby mieć nad nim pełną kontrolę
        `,
      }}
    />
  );
}