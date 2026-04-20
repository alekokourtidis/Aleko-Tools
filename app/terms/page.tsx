import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Aleko Tools',
  description: 'Terms of service for Aleko Tools.',
};

export default function TermsPage() {
  return (
    <div className="container">
      <div className="hero" style={{ maxWidth: 720 }}>
        <div className="hero-badge">Terms</div>
        <h1>Terms of Service</h1>
        <p style={{ fontSize: 14, color: '#6b7280' }}>Last updated: April 20, 2026</p>
      </div>

      <div className="section" style={{ maxWidth: 720, margin: '2rem auto', fontSize: 14, lineHeight: 1.7, color: '#374151' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>1. Agreement</h2>
        <p>By using any tool on alekotools.com or its subdomains, you agree to these terms.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>2. Who can use the tools</h2>
        <p>You must be at least 13. Under 18? Get a parent or guardian&apos;s permission.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>3. Your account</h2>
        <p>Keep it secure. Don&apos;t share your login. Tell us if you think someone else has access.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>4. Acceptable use</h2>
        <p>Don&apos;t use Aleko Tools to cheat on actual exams or assessments where AI assistance is prohibited, generate harassing or illegal content, attempt to break the services, or impersonate others. I built these for learning and productivity — not for plagiarism or abuse.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>5. Subscriptions</h2>
        <p>Some tools require a paid subscription. Subscriptions auto-renew unless you cancel. You can cancel anytime from your account page. Refund requests within 14 days are handled case-by-case.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>6. AI-generated content</h2>
        <p>Our tools use AI to generate content (essays, practice questions, analysis, etc.). AI output can be wrong. Always review and verify. You, the user, are responsible for how you use the output.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>7. Content ownership</h2>
        <p>Content you create using our tools is yours. We don&apos;t claim ownership of your essays, study notes, recipes, or other outputs.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>8. Disclaimer</h2>
        <p>Aleko Tools is provided &quot;as is.&quot; No warranty of uninterrupted service, specific outcomes, or perfect accuracy.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>9. Changes</h2>
        <p>Terms may be updated. Material changes will update the date at the top.</p>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111', marginTop: 24 }}>10. Contact</h2>
        <p>Questions? <a href="mailto:aleko@alekotools.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>aleko@alekotools.com</a></p>
      </div>
    </div>
  );
}
