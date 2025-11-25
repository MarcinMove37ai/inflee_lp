// lib/fbPixel.ts
export const FB_PIXEL_ID = '574848185272133'
export const FB_ACCESS_TOKEN = 'EAAQv8vdqDiMBO7fMZBfIBq0f458R22GHY1SE8xTrLKL5fB82Jn7hxzfgnxUNZCiTbsBm1vT68vwBu5AWjWNIZCXK7lI3iKZBkEq7uvIK0TnRzEkrHXBqMO2sMbFxUsOh73t8L3ZAoWZAFHQCbINT7xW2gLSFvViXMYZCCWFUNyOihCyoh16ZCtlF23B9IK1psCxZB5wZDZD'

// ⚠️ PAGEVIEW jest teraz obsługiwany w layout.tsx
// Ta funkcja jest zachowana dla kompatybilności wstecznej, ale NIE powinna być używana
export const pageview = () => {
  console.warn('[FB Pixel] pageview() is deprecated - PageView is now handled in layout.tsx')
  // Celowo nie wysyłamy - to jest obsługiwane w layout
}

// Funkcja do śledzenia custom events (np. Contact, AddToCart, Purchase)
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options)
    console.log(`[FB Pixel] Event tracked: ${name}`, options)
  }
}

// Server-side event tracking przez Conversions API
export const serverEvent = async (eventName: string, userData: any, customData: any = {}) => {
  try {
    const response = await fetch('/api/fb-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData,
        customData
      })
    })

    if (response.ok) {
      console.log(`[FB Pixel] Server event sent: ${eventName}`)
      return true
    } else {
      console.error(`[FB Pixel] Server event failed: ${eventName}`, response.status)
      return false
    }
  } catch (error) {
    console.error(`[FB Pixel] Server event error: ${eventName}`, error)
    return false
  }
}

// TypeScript deklaracje dla window.fbq
declare global {
  interface Window {
    fbq?: any;
    _fbPixelInitialized?: boolean;
    _fbPageViewSent?: boolean;
  }
}