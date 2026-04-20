import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Aleko Tools',
  description: 'Contact Aleko Kourtidis for support, partnerships, school inquiries, or filter allowlist requests.',
};

const CARDS = [
  { title: 'General', email: 'aleko@alekotools.com', desc: 'Questions, bug reports, feature requests.' },
  { title: 'Support', email: 'support@alekotools.com', desc: 'Billing, subscription, account help.' },
  { title: 'Schools & educators', email: 'schools@alekotools.com', desc: 'Classroom access, filter allowlist requests, testimonials.' },
  { title: 'Press & partnerships', email: 'press@alekotools.com', desc: 'Media, interviews, content collaborations.' },
];

export default function ContactPage() {
  return (
    <div className="container">
      <div className="hero" style={{ maxWidth: 720 }}>
        <div className="hero-badge">Contact</div>
        <h1>Get in touch.</h1>
        <p>Aleko Tools is built and maintained by Aleko Kourtidis. Email me for anything.</p>
      </div>

      <div className="section" style={{ maxWidth: 720, margin: '2rem auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {CARDS.map(c => (
            <div key={c.title} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{c.title}</div>
              <a href={`mailto:${c.email}`} style={{ display: 'block', marginTop: 4, color: '#7c3aed', textDecoration: 'underline', fontSize: 14 }}>{c.email}</a>
              <p style={{ marginTop: 8, fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: 24, border: '1px solid #e5e7eb', borderRadius: 12, background: '#fafafa' }}>
          <h2 style={{ fontWeight: 700, fontSize: 18 }}>For network administrators</h2>
          <p style={{ marginTop: 8, fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            Tools hosted on alekotools.com and subdomains (studypebble.com, essaycloner.com, etc.) are legitimate educational and productivity tools used by students. If your school or network&apos;s web filter has classified any alekotools property as &quot;uncategorized,&quot; please email <a href="mailto:schools@alekotools.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>schools@alekotools.com</a> and I&apos;ll provide verification documents within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
