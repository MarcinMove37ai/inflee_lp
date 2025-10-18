// src/app/not-found.tsx
export default function NotFound() {
  return (
    <html lang="pl">
      <body style={{
        fontFamily: 'system-ui, sans-serif',
        color: '#fff',
        background: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        margin: 0
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404</h1>
        <p style={{ marginTop: '1rem', color: '#a1a1aa' }}>Strona nie znaleziona</p>
        <a href="/pl" style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          color: '#fff',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #A855F7, #6366F1)',
          fontWeight: '600'
        }}>
          Strona główna
        </a>
      </body>
    </html>
  );
}