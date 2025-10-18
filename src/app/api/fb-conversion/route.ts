import { NextRequest, NextResponse } from 'next/server'
import { FB_PIXEL_ID, FB_ACCESS_TOKEN } from '../../lib/fbPixel'

export async function POST(request: NextRequest) {
  try {
    const { eventName, userData, customData } = await request.json()

    // Przygotowanie danych dla Conversions API
    const eventData = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: {
          em: userData.email ? [userData.email.toLowerCase().trim()] : undefined,
          ph: userData.phone ? [userData.phone.replace(/\D/g, '')] : undefined,
          fn: userData.firstName ? [userData.firstName.toLowerCase().trim()] : undefined,
          client_ip_address: request.ip || request.headers.get('x-forwarded-for'),
          client_user_agent: request.headers.get('user-agent'),
        },
        custom_data: customData
      }],
      access_token: FB_ACCESS_TOKEN
    }

    // Wysłanie do Facebook Conversions API
    const response = await fetch(`https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData)
    })

    const result = await response.json()

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Conversions API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send event' }, { status: 500 })
  }
}