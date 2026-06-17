import type { Metadata } from 'next';
import RotatingWord from './RotatingWord';

export const metadata: Metadata = {
  title: 'Aleko — Tools for Universities, Nonprofits & Health Teams',
  description: 'One person building real software: AI health apps, fundraising and outreach intelligence for universities and nonprofits, and tools for students.',
  keywords: 'aleko, alekotools, ai developer, nonprofit outreach tools, fundraising intelligence, ai health app, wholefed',
  authors: [{ name: 'Aleko', url: 'https://alekotools.com/about' }],
  openGraph: { title: 'Aleko — One person, building real tools', description: 'AI apps and outreach intelligence for universities, nonprofits, and health teams.', url: 'https://alekotools.com', siteName: 'Aleko Tools', type: 'website' },
};

const F = (color: string, letter: string) => (
  <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill={color} /><text x="20" y="27" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="sans-serif">{letter}</text></svg>
);

const TOOLS = [
  {
    key: 'essaycloner', name: 'Essay Cloner', tagline: "AI essays written in your personal voice — not ChatGPT's",
    price: '$1.99/mo', href: '/essaycloner', badge: 'Live', cta: 'Try it →',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#7c3aed" /><path d="M12 10h10a4 4 0 014 4v1a3 3 0 01-3 3h-5l-2 4v-4h-4a2 2 0 01-2-2v-4a2 2 0 012-2z" fill="#fff" opacity="0.9" /><path d="M14 22h12a2 2 0 012 2v4a2 2 0 01-2 2h-4v4l-2-4h-6a2 2 0 01-2-2v-4a2 2 0 012-2z" fill="#fff" opacity="0.6" /></svg>,
  },
  {
    key: 'studypebble', name: 'Study Acorn', tagline: 'Adaptive AP and SAT study guide that finds your gaps',
    price: 'Free', href: 'https://studypebble.vercel.app', badge: 'Live', cta: 'Try it →',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#2B5F4A" /><path d="M19 6c0-2 3-2 3 0l-1 4h-1z" fill="#8B6914" /><path d="M10 14c0-5 20-5 20 0l-1 5c0 4-18 4-18 0z" fill="#6B3F1D" /><path d="M11 18c0-2 2-3 4-3h10c2 0 4 1 4 3l-1 12c0 4-16 4-16 0z" fill="#F4A56A" /><circle cx="17" cy="24" r="1.5" fill="#1E1B18" /><circle cx="23" cy="24" r="1.5" fill="#1E1B18" /><path d="M18 29q2 2 4 0" stroke="#1E1B18" strokeWidth="1" strokeLinecap="round" fill="none" /></svg>,
  },
  {
    key: 'shadowshield', name: 'AI Shadow Shield', tagline: 'Know when your company is being cloned with AI',
    price: '$19/mo', href: '/shadowshield', badge: 'Live', cta: 'Try it →',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#10b981" /><path d="M20 6l12 5v8c0 8-5 13-12 15C13 32 8 27 8 19v-8z" fill="#fff" opacity="0.25" /><path d="M20 10l8 3.5v6c0 5.5-3.5 9-8 10.5-4.5-1.5-8-5-8-10.5v-6z" fill="#fff" opacity="0.4" /><path d="M17 20l3 3 5-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    key: 'trafficguard', name: 'AI Traffic Guard', tagline: 'Track keywords stolen by Google AI Overviews',
    price: '$29/mo', href: '/trafficguard', badge: 'Live', cta: 'Try it →',
    logo: <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#f59e0b" /><rect x="10" y="8" width="20" height="24" rx="3" fill="#fff" opacity="0.3" /><circle cx="20" cy="14" r="3" fill="#fff" opacity="0.8" /><circle cx="20" cy="22" r="3" fill="#fff" opacity="0.5" /><circle cx="20" cy="28" r="2" fill="#fff" opacity="0.3" /></svg>,
  },
  {
    key: 'feastmate', name: 'Feastmate', tagline: 'AI recipe generator — set your macros, get full recipes (iOS)',
    price: '$4.99/mo', href: 'https://apps.apple.com/us/app/feastmate-ai-recipe-generator/id6738283833', badge: 'App Store', cta: 'Download →',
    logo: F('#3b82f6', 'F'),
  },
];

const NONPROFIT = [
  {
    key: 'galway', org: 'University of Galway', name: 'Galway Alumni Atlas',
    tagline: 'Surfaces high-net-worth alumni with cultivation-readiness scoring, a 12-variant outreach engine, and event ROI ranking for the development office.',
    href: 'https://galway-alumni-atlas.vercel.app', badge: 'Live', color: '#a3174c',
  },
  {
    key: 'bluestar', org: 'Blue Star Families', name: 'Blue Star Veteran Atlas',
    tagline: '322 verified prospects with cultivation scoring, a 16-template outreach engine, and a Silicon Valley chapter-launch dashboard for the development team.',
    href: 'https://bluestar-veteran-atlas.vercel.app', badge: 'Live', color: '#1e3a8a',
  },
  {
    key: 'reelfind', org: 'REEL (twice-exceptional learners)', name: 'REEL Find Support',
    tagline: 'A searchable, vetted directory of 2e providers and schools with a parent intake questionnaire and an AI resource chatbot for families.',
    href: 'https://reel-find-support.vercel.app', badge: 'Live', color: '#6366f1',
  },
  {
    key: 'reelout', org: 'REEL (twice-exceptional learners)', name: 'REEL Outreach',
    tagline: 'Internal workspace that compiles providers, partner schools, donors, and collaborators with per-field source-confidence flags, a drag-and-drop vetting pipeline, and source-cited outreach drafting. (Interactive demo, sample data.)',
    href: 'https://reel-outreach-demo.vercel.app', badge: 'Demo', color: '#4f46e5',
  },
  {
    key: 'sharks', org: 'San Jose Sharks', name: 'Sharks Fan Atlas',
    tagline: 'Prospect-intelligence layer identifying Bay Area residents likely to become season-ticket holders, suite buyers, or corporate sponsors.',
    href: null, badge: 'In progress', color: '#006272',
  },
];

const TRACK = [
  { stat: '~$30k', label: 'in a single month', desc: 'Scaled a clothing brand (two brands run end to end — product, ops, marketing).' },
  { stat: 'Author', label: 'wrote a book', desc: 'A full-length book, written and finished.' },
  { stat: 'Finisher', label: 'triathlon', desc: 'Trained for and completed a triathlon.' },
];

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-badge">Indie builder · 17</div>
        <h1>One person, building real tools for<br /><RotatingWord />.</h1>
        <p>AI health apps, fundraising and outreach intelligence for universities and nonprofits, and software for students. I find a real problem and ship the thing that solves it.</p>
      </div>

      {/* WHOLEFED — star of the show */}
      <a className="feature-card" href="https://apps.apple.com/app/wholefed" target="_blank" rel="noopener">
        <div className="feature-icon">
          <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#dc2626" /><circle cx="20" cy="18" r="8" fill="#fff" opacity="0.3" /><path d="M16 16c1-3 7-3 8 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /><circle cx="20" cy="20" r="5" fill="#fff" opacity="0.5" /><path d="M20 13v-2m0 0c-1-2 1-3 2-1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>
        <div className="feature-body">
          <div className="feature-eyebrow">Featured · iOS</div>
          <h2>Wholefed</h2>
          <p>Snap a photo of your food and get instant AI health analysis that goes beyond calories — what's good in it, what's missing, and what to pair it with. Live on the App Store.</p>
          <span className="feature-cta">Get it on the App Store →</span>
        </div>
      </a>

      <div className="section">
        <div className="section-header"><span className="section-title">Apps &amp; Tools</span></div>
        <div className="products">
          {TOOLS.map(t => (
            <a key={t.key} className="product-card" href={t.href} target="_blank" rel="noopener">
              <div className="card-top">
                <div className="card-icon">{t.logo}</div>
                <span className="card-badge">{t.badge}</span>
              </div>
              <h3>{t.name}</h3>
              <div className="tagline">{t.tagline}</div>
              <div className="card-footer">
                <span className="card-price">{t.price}</span>
                <span className="card-arrow">{t.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-header"><span className="section-title">Outreach systems for nonprofits &amp; universities</span></div>
        <p className="section-sub">Custom prospect-intelligence and fundraising tools, each built around one organization's real data. Most are private and gated for staff use.</p>
        <div className="products">
          {NONPROFIT.map(n => {
            const inner = (
              <>
                <div className="card-top">
                  <div className="card-icon" style={{ background: n.color }}>
                    <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill={n.color} /><text x="20" y="27" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="sans-serif">{n.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</text></svg>
                  </div>
                  <span className="card-badge">{n.badge}</span>
                </div>
                <div className="card-org">{n.org}</div>
                <h3>{n.name}</h3>
                <div className="tagline">{n.tagline}</div>
                <div className="card-footer">
                  <span className="card-price">Custom build</span>
                  <span className="card-arrow">{n.href ? 'View →' : 'Private'}</span>
                </div>
              </>
            );
            return n.href
              ? <a key={n.key} className="product-card" href={n.href} target="_blank" rel="noopener">{inner}</a>
              : <div key={n.key} className="product-card is-private">{inner}</div>;
          })}
        </div>
      </div>

      <div className="section">
        <div className="section-header"><span className="section-title">Track record</span></div>
        <p className="section-sub">Not software — but the same habit of deciding a thing should exist and then making it exist.</p>
        <div className="track">
          {TRACK.map(t => (
            <div key={t.label} className="track-item">
              <div className="track-stat">{t.stat}</div>
              <div className="track-label">{t.label}</div>
              <p className="track-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="email-capture">
        <p className="email-label">Building outreach or fundraising tools for an organization? Get in touch.</p>
        <form className="email-form">
          <input type="email" placeholder="your@email.com" className="email-input" required />
          <button type="submit" className="email-btn">Reach out</button>
        </form>
        <p className="email-note">One person. Real builds. No agency overhead.</p>
      </div>
    </div>
  );
}
