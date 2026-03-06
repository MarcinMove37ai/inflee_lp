// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404</h1>
      <p style={{ marginTop: '1rem', color: '#a1a1aa' }}>Page not found</p>
      <a href="/" style={{
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        color: '#fff',
        textDecoration: 'none',
        background: 'linear-gradient(135deg, #A855F7, #6366F1)',
        fontWeight: '600'
      }}>
        Go to homepage
      </a>
    </div>
  );
}