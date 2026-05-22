import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aleko Tools — AI-Powered Tools for Students',
  description: 'AI-powered tools for students. Essay writing in your voice, AP/SAT study guide, food scanning, recipe generation, and more.',
  keywords: 'aleko tools, alekotools, ai tools for students, ai essay writer, ai study guide, student ai tools',
  authors: [{ name: 'Aleko', url: 'https://alekotools.com/about' }],
  openGraph: { title: 'Aleko Tools — AI-Powered Tools for Students', description: 'AI-powered tools for students.', url: 'https://alekotools.com', siteName: 'Aleko Tools', type: 'website' },
};

const TOOLS = [
  {
    key: 'essaycloner', name: 'Essay Cloner', tagline: "AI essays written in your personal voice — not ChatGPT's",
    price: '$1.99/mo', href: '/essaycloner', badge: 'Live', color: '#7c3aed',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#7c3aed"/><path d="M12 10h10a4 4 0 014 4v1a3 3 0 01-3 3h-5l-2 4v-4h-4a2 2 0 01-2-2v-4a2 2 0 012-2z" fill="#fff" opacity="0.9"/><path d="M14 22h12a2 2 0 012 2v4a2 2 0 01-2 2h-4v4l-2-4h-6a2 2 0 01-2-2v-4a2 2 0 012-2z" fill="#fff" opacity="0.6"/></svg>,
  },
  {
    key: 'studypebble', name: 'Study Acorn', tagline: 'Adaptive AP and SAT study guide that finds your gaps',
    price: 'Free', href: 'https://studypebble.vercel.app', badge: 'Live', color: '#2B5F4A',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#2B5F4A"/><path d="M19 6c0-2 3-2 3 0l-1 4h-1z" fill="#8B6914"/><path d="M10 14c0-5 20-5 20 0l-1 5c0 4-18 4-18 0z" fill="#6B3F1D"/><path d="M11 18c0-2 2-3 4-3h10c2 0 4 1 4 3l-1 12c0 4-16 4-16 0z" fill="#F4A56A"/><circle cx="17" cy="24" r="1.5" fill="#1E1B18"/><circle cx="23" cy="24" r="1.5" fill="#1E1B18"/><path d="M18 29q2 2 4 0" stroke="#1E1B18" strokeWidth="1" strokeLinecap="round" fill="none"/></svg>,
  },
  {
    key: 'shadowshield', name: 'AI Shadow Shield', tagline: 'Know when your company is being cloned with AI',
    price: '$19/mo', href: '/shadowshield', badge: 'Live', color: '#10b981',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#10b981"/><path d="M20 6l12 5v8c0 8-5 13-12 15C13 32 8 27 8 19v-8z" fill="#fff" opacity="0.25"/><path d="M20 10l8 3.5v6c0 5.5-3.5 9-8 10.5-4.5-1.5-8-5-8-10.5v-6z" fill="#fff" opacity="0.4"/><path d="M17 20l3 3 5-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    key: 'trafficguard', name: 'AI Traffic Guard', tagline: 'Track keywords stolen by Google AI Overviews',
    price: '$29/mo', href: '/trafficguard', badge: 'Live', color: '#f59e0b',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#f59e0b"/><rect x="10" y="8" width="20" height="24" rx="3" fill="#fff" opacity="0.3"/><circle cx="20" cy="14" r="3" fill="#fff" opacity="0.8"/><circle cx="20" cy="22" r="3" fill="#fff" opacity="0.5"/><circle cx="20" cy="28" r="2" fill="#fff" opacity="0.3"/></svg>,
  },
];

const APPS = [
  {
    key: 'wholefed', name: 'Wholefed', tagline: 'Snap a photo of your food, get instant AI health analysis (iOS)',
    price: 'Free', href: 'https://apps.apple.com/app/wholefed', badge: 'App Store', color: '#dc2626',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#dc2626"/><circle cx="20" cy="18" r="8" fill="#fff" opacity="0.3"/><path d="M16 16c1-3 7-3 8 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="20" r="5" fill="#fff" opacity="0.5"/><path d="M20 13v-2m0 0c-1-2 1-3 2-1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    key: 'feastmate', name: 'Feastmate', tagline: 'AI recipe generator — set your macros, pick ingredients, get full recipes (iOS)',
    price: '$4.99/mo', href: 'https://apps.apple.com/us/app/feastmate-ai-recipe-generator/id6738283833', badge: 'App Store', color: '#3b82f6',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#3b82f6"/><text x="20" y="27" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">F</text></svg>,
  },
];

const BLOGS = [
  { slug: 'how-to-make-ai-essays-undetectable', title: 'How to Make AI Essays Undetectable in 2026', desc: "Most AI detectors catch ChatGPT essays instantly. Here's the technique that actually works — writing in YOUR voice, not the AI's.", date: 'Apr 14, 2026' },
  { slug: 'ai-tools-every-student-needs', title: '4 AI Tools Every Student Needs in 2026', desc: 'From essay writing to food planning — these AI tools save hours every week. And most are free.', date: 'Apr 13, 2026' },
  { slug: 'why-ai-detectors-dont-work', title: "Why AI Detectors Don't Actually Work (And What Teachers Should Know)", desc: "AI detectors have a dirty secret: they're wrong up to 30% of the time. Here's why they're fundamentally broken.", date: 'Apr 12, 2026' },
];

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="hero-badge">Open-source AI tools</div>
          <h1>Tools that solve real problems</h1>
          <p>A growing collection of AI-powered tools built for students. Each one solves a specific problem — no bloat, no fluff.</p>
        </div>

        <div className="section">
          <div className="section-header"><span className="section-title">Web Tools</span></div>
          <div className="products">
            {TOOLS.map(t => (
              <a key={t.key} className="product-card" href={t.href}>
                <div className="card-top">
                  <div className="card-icon">{t.logo}</div>
                  <span className="card-badge">{t.badge}</span>
                </div>
                <h3>{t.name}</h3>
                <div className="tagline">{t.tagline}</div>
                <div className="card-footer">
                  <span className="card-price">{t.price}</span>
                  <span className="card-arrow">Try it →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header"><span className="section-title">Mobile Apps</span></div>
          <div className="products">
            {APPS.map(t => (
              <a key={t.key} className="product-card" href={t.href} target="_blank" rel="noopener">
                <div className="card-top">
                  <div className="card-icon">{t.logo}</div>
                  <span className="card-badge">{t.badge}</span>
                </div>
                <h3>{t.name}</h3>
                <div className="tagline">{t.tagline}</div>
                <div className="card-footer">
                  <span className="card-price">{t.price}</span>
                  <span className="card-arrow">Download →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <span className="section-title">Latest from the blog</span>
            <Link href="/blog" className="section-link">View all →</Link>
          </div>
          <div className="blog-list">
            {BLOGS.map(b => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="blog-card">
                <div className="blog-card-content">
                  <div className="blog-meta"><span className="blog-date">{b.date}</span></div>
                  <h2>{b.title}</h2>
                  <p>{b.desc}</p>
                </div>
                <span className="blog-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="email-capture">
          <p className="email-label">Get notified when we launch new tools</p>
          <form className="email-form">
            <input type="email" placeholder="your@email.com" className="email-input" required />
            <button type="submit" className="email-btn">Notify me</button>
          </form>
          <p className="email-note">No spam. Just new tool launches.</p>
        </div>
      </div>
    </>
  );
}
