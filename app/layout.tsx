import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="vQ9wtF1eidiF6zJcbyxm6flNDMcN0EQVIe7-LXSqQJM" />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-brand">alekotools<span>.com</span></a>
            <div className="nav-links">
              <a href="/">Tools</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/affiliates">Affiliates</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <span>© 2026 Aleko Kourtidis</span>
            <div className="footer-links">
              <a href="/">Tools</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="https://tiktok.com/@alekokourtidis" target="_blank" rel="noopener">TikTok</a>
              <a href="https://instagram.com/alekokourtidis" target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
