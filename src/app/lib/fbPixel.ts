// app/lib/fbPixel.ts

// Czytamy ID ze zmiennych środowiskowych
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// TypeScript deklaracje
declare global {
  interface Window {
    fbq?: any;
    _fbPixelInitialized?: boolean;
  }
}

// Interfejs dla danych użytkownika (Matching)
interface UserDataPayload {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}

// --- GŁÓWNA FUNKCJA HYBRYDOWA ---
export const trackHybridEvent = async (
  eventName: string,
  params: any = {},
  userData: UserDataPayload = {} // 👈 NOWOŚĆ: Argument na dane osobowe
) => {
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // 1. Browser Pixel (Standardowy)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params, { eventID: eventId });
    console.log(`📡 [Hybrid] Browser sent: ${eventName} (ID: ${eventId})`);
  }

  // 2. Server CAPI (Backend)
  try {
    // Nie musimy już ręcznie czytać ciasteczek _fbp/_fbc tutaj.
    // Przeglądarka wyśle je automatycznie w nagłówkach do naszego API (same-origin).

    await fetch('/api/fb-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        customData: params,
        userData: userData // Przekazujemy e-mail/telefon do backendu
      })
    });
    console.log(`🚀 [Hybrid] CAPI sent: ${eventName} (with userData: ${Object.keys(userData).length > 0})`);
  } catch (e) {
    console.error('CAPI Error:', e);
  }
};

// Prosty wrapper dla samego Pixela (opcjonalny)
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};