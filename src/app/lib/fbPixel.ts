// app/lib/fbPixel.ts

export const FB_PIXEL_ID = '574848185272133';
export const FB_ACCESS_TOKEN = 'EAAQv8vdqDiMBO7fMZBfIBq0f458R22GHY1SE8xTrLKL5fB82Jn7hxzfgnxUNZCiTbsBm1vT68vwBu5AWjWNIZCXK7lI3iKZBkEq7uvIK0TnRzEkrHXBqMO2sMbFxUsOh73t8L3ZAoWZAFHQCbINT7xW2gLSFvViXMYZCCWFUNyOihCyoh16ZCtlF23B9IK1psCxZB5wZDZD';

// TypeScript deklaracje
declare global {
  interface Window {
    fbq?: any;
    _fbPixelInitialized?: boolean;
  }
}

// Pomocnik do pobierania ciasteczek (fbp/fbc są kluczowe dla CAPI)
const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
};

// --- GŁÓWNA FUNKCJA HYBRYDOWA (Browser + Server) ---
// Używamy jej do kluczowych zdarzeń: PageView, ViewContent (Cennik), InitiateCheckout, Contact
export const trackHybridEvent = async (eventName: string, params: any = {}) => {
  // 1. Generujemy UNIKALNE ID zdarzenia (to pozwala FB skleić duplikaty)
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // 2. Browser Pixel (Priorytet 1 - Client Side)
  if (typeof window !== 'undefined' && window.fbq) {
    // Przekazujemy ID do Pixela, aby FB wiedział, że to to samo zdarzenie co z serwera
    window.fbq('track', eventName, params, { eventID: eventId });
    console.log(`📡 [Hybrid] Browser sent: ${eventName} (ID: ${eventId})`);
  }

  // 3. Server CAPI (Priorytet 2 - Server Side Zabezpieczenie)
  try {
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // Wysyłamy w tle do naszego API Next.js
    await fetch('/api/fb-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId, // To samo ID co w Pixelu!
        customData: params,
        userData: {
          fbp: fbp, // Ciasteczko przeglądarkowe Facebooka
          fbc: fbc, // Ciasteczko kliknięcia (jeśli user wszedł z reklamy)
          client_user_agent: navigator.userAgent,
        }
      })
    });
    console.log(`SERVER [Hybrid] CAPI sent: ${eventName}`);
  } catch (e) {
    console.error('CAPI Error:', e);
  }
};

// Funkcja tylko dla Browsera (dla mniej ważnych zdarzeń, np. zwykłe kliknięcia)
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};