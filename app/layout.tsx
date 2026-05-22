import "./globals.css";

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://alekotools.com/#person',
      name: 'Aleko',
      url: 'https://alekotools.com/about',
      jobTitle: 'Indie AI Developer',
    },
    {
      '@type': 'Organization',
      '@id': 'https://alekotools.com/#organization',
      name: 'Aleko Tools',
      alternateName: 'alekotools',
      url: 'https://alekotools.com',
      logo: 'https://alekotools.com/favicon.ico',
      founder: { '@id': 'https://alekotools.com/#person' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'aleko@alekotools.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://alekotools.com/#website',
      url: 'https://alekotools.com',
      name: 'Aleko Tools',
      description: 'A growing collection of AI-powered tools for students.',
      publisher: { '@id': 'https://alekotools.com/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://alekotools.com/#tools',
      name: 'Aleko Tools catalog',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: 'Essay Cloner',
          url: 'https://alekotools.com/essaycloner',
          applicationCategory: 'EducationalApplication',
          description: 'AI essays written in your personal voice — not ChatGPT\u2019s. Analyzes your past writing and generates essays that sound like you.',
          operatingSystem: 'Any (web)',
          offers: { '@type': 'Offer', price: '1.99', priceCurrency: 'USD' },
        },
        {
          '@type': ['SoftwareApplication', 'EducationalApplication'],
          position: 2,
          name: 'StudyPebble',
          url: 'https://studypebble.com',
          applicationCategory: 'EducationalApplication',
          description: 'Adaptive SAT and AP exam prep that finds your weak spots and fixes them with targeted practice.',
          operatingSystem: 'Any (web)',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@type': 'SoftwareApplication',
          position: 3,
          name: 'AI Shadow Shield',
          url: 'https://alekotools.com/shadowshield',
          applicationCategory: 'BusinessApplication',
          description: 'Monitors the web for AI-generated clones of your brand, product, or business.',
          operatingSystem: 'Any (web)',
          offers: { '@type': 'Offer', price: '19', priceCurrency: 'USD' },
        },
        {
          '@type': 'SoftwareApplication',
          position: 4,
          name: 'AI Traffic Guard',
          url: 'https://alekotools.com/trafficguard',
          applicationCategory: 'BusinessApplication',
          description: 'Tracks which of your keywords are being stolen by Google AI Overviews and estimates traffic lost.',
          operatingSystem: 'Any (web)',
          offers: { '@type': 'Offer', price: '29', priceCurrency: 'USD' },
        },
        {
          '@type': 'MobileApplication',
          position: 5,
          name: 'Wholefed',
          url: 'https://apps.apple.com/app/wholefed',
          applicationCategory: 'HealthApplication',
          description: 'Snap a photo of your food, get instant AI health analysis beyond just calories.',
          operatingSystem: 'iOS',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@type': 'MobileApplication',
          position: 6,
          name: 'Feastmate',
          url: 'https://apps.apple.com/us/app/feastmate-ai-recipe-generator/id6738283833',
          applicationCategory: 'LifestyleApplication',
          description: 'AI recipe generator — set your macros, pick ingredients, get full recipes.',
          operatingSystem: 'iOS',
          offers: { '@type': 'Offer', price: '4.99', priceCurrency: 'USD' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: 'Aleko Tools — AI-Powered Tools for Students',
  description: 'AI-powered tools for students. Essay writing in your voice, AP/SAT study guide, food scanning, recipe generation, and more.',
  keywords: 'aleko tools, alekotools, ai tools for students, ai essay writer, ai study guide, student ai tools, educational ai',
  authors: [{ name: 'Aleko', url: 'https://alekotools.com/about' }],
  category: 'education',
  openGraph: {
    title: 'Aleko Tools — AI-Powered Tools for Students',
    description: 'A growing collection of AI-powered tools for students.',
    url: 'https://alekotools.com',
    siteName: 'Aleko Tools',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Aleko Tools', description: 'AI-powered tools for students.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="vQ9wtF1eidiF6zJcbyxm6flNDMcN0EQVIe7-LXSqQJM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
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
            <span>© 2026 Aleko Tools</span>
            <div className="footer-links">
              <a href="/">Tools</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
