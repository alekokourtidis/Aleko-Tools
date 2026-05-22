import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Aleko Tools',
  description: 'Aleko Tools is a collection of AI-powered tools built by a 17-year-old indie developer focused on solving real problems for students.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <div className="hero" style={{ maxWidth: 720 }}>
        <div className="hero-badge">About</div>
        <h1>Built by one person, for students.</h1>
        <p>
          Hi, I&apos;m Aleko. I&apos;m 17 and I build AI-powered tools that solve real problems — mostly for students, because that&apos;s the world I live in.
        </p>
      </div>

      <div className="section" style={{ maxWidth: 720, margin: '2rem auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What I make</h2>
        <p>
          Each tool on this site solves a single specific problem. No bloat, no fluff. I ship fast, iterate from feedback, and remove anything that doesn&apos;t earn its place.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 32, marginBottom: 12 }}>How I build</h2>
        <p>
          I work with modern AI models (Claude, GPT-4o, Whisper) plus Next.js, Vercel, and Supabase. I&apos;m not a computer science student — I&apos;m a 17-year-old who shipped my first app with zero prior coding experience by leveraging AI as a collaborator. If that sounds like your situation, welcome.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 32, marginBottom: 12 }}>Why I do this</h2>
        <p>
          Most tools built for students are built by 40-year-old founders who haven&apos;t taken a test in 20 years. I&apos;m currently in high school. I build things I actually wish existed.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 32, marginBottom: 12 }}>Contact</h2>
        <p>
          Email: <a href="mailto:aleko@alekotools.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>aleko@alekotools.com</a>
        </p>
      </div>
    </div>
  );
}
