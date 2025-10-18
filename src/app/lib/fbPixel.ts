export const FB_PIXEL_ID = '574848185272133'
export const FB_ACCESS_TOKEN = 'EAAQv8vdqDiMBO7fMZBfIBq0f458R22GHY1SE8xTrLKL5fB82Jn7hxzfgnxUNZCiTbsBm1vT68vwBu5AWjWNIZCXK7lI3iKZBkEq7uvIK0TnRzEkrHXBqMO2sMbFxUsOh73t8L3ZAoWZAFHQCbINT7xW2gLSFvViXMYZCCWFUNyOihCyoh16ZCtlF23B9IK1psCxZB5wZDZD' // Wklej swój token

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options)
  }
}

// Nowa funkcja dla server-side events
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
      console.log('Server event sent successfully')
    }
  } catch (error) {
    console.error('Server event failed:', error)
  }
}