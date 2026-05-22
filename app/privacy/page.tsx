import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aleko Tools',
  description: 'Privacy policy for Aleko Tools. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="hero" style={{ maxWidth: 720 }}>
        <div className="hero-badge">Privacy</div>
        <h1>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: '#6b7280' }}>Last updated: April 20, 2026</p>
      </div>

      <div className="section" style={{ maxWidth: 720, margin: '2rem auto', fontSize: 14, lineHeight: 1.7, color: '#374151' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>What we collect</h2>
        <p>When you sign up for an Aleko Tools product, we collect: your email address, what you create or save within the tool (e.g., essays, study progress), and basic usage analytics (page views, button clicks). That&apos;s it.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>How we use it</h2>
        <p>To run the tool you signed up for. That&apos;s the whole purpose. We use analytics to understand which features are actually useful so we can improve them.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>AI providers</h2>
        <p>Our tools send text prompts to third-party AI providers (OpenAI, Anthropic) to generate responses. These providers have their own privacy policies. We do not train our own AI models on your data, and we do not authorize our providers to train on identifiable user data.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>Payments</h2>
        <p>Paid subscriptions are processed by Stripe. We never see or store your full credit card number. Stripe&apos;s privacy policy applies to payment data.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>What we never do</h2>
        <ul style={{ marginTop: 8, paddingLeft: 20, listStyle: 'disc' }}>
          <li>Sell your data to advertisers.</li>
          <li>Share your personal content with third parties (except as needed to provide the service, e.g., AI providers).</li>
          <li>Track you across other websites.</li>
        </ul>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>Your rights</h2>
        <p>Email <a href="mailto:aleko@alekotools.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>aleko@alekotools.com</a> anytime to request a copy of your data or to delete your account. I&apos;ll get back to you within 7 days.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>Children</h2>
        <p>Aleko Tools is not intended for children under 13. If you&apos;re under 18, please get a parent&apos;s or guardian&apos;s permission before signing up.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>Changes</h2>
        <p>If this policy changes materially, I&apos;ll update the date above and email anyone with an active account.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>Contact</h2>
        <p>Aleko Tools · <a href="mailto:aleko@alekotools.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>aleko@alekotools.com</a></p>
      </div>
    </div>
  );
}
