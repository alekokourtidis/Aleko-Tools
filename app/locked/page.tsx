export const metadata = {
  title: 'Unavailable',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default async function Locked({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const { e } = await searchParams;
  const error = e === '1';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0a0a0a',
        color: '#e5e5e5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>
        This site is unavailable.
      </h1>
      <p style={{ color: '#777', fontSize: '14px', marginTop: '10px' }}>
        The page you are looking for cannot be reached.
      </p>

      <form
        method="POST"
        action="/api/unlock"
        style={{
          marginTop: '40px',
          display: 'flex',
          gap: '8px',
          opacity: 0.5,
        }}
      >
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="••••••"
          aria-label="Access code"
          style={{
            background: '#161616',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            color: '#e5e5e5',
            padding: '8px 12px',
            fontSize: '14px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#1f1f1f',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            color: '#e5e5e5',
            padding: '8px 14px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Enter
        </button>
      </form>
      {error && (
        <p style={{ color: '#a33', fontSize: '12px', marginTop: '12px' }}>
          Incorrect.
        </p>
      )}
    </div>
  );
}
