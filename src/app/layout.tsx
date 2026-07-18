import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Jost, Great_Vibes } from 'next/font/google';
import { site } from '@/content/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Reveal } from '@/components/Reveal';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.tagline} in Purley, Surrey`,
    template: `%s · ${site.fullName}`,
  },
  description:
    'Vera D Royal Wellness — a private, appointment-only sanctuary in Purley, Surrey offering Royal Thai therapeutic massage, head spa, hand & foot rituals and luxury facials. Where ancient Thai wisdom meets modern anatomy.',
  keywords: [
    'Thai massage Purley',
    'Royal Thai therapeutic massage',
    'head spa Surrey',
    'luxury facial Croydon',
    'Thai massage Croydon',
    'wellness spa Purley',
    'Vera D Royal Wellness',
  ],
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.fullName,
    locale: 'en_GB',
    title: `${site.fullName} — ${site.tagline}`,
    description:
      'A private, appointment-only Thai wellness sanctuary in Purley, Surrey. Royal Thai therapeutic massage, head spa, hand & foot rituals and luxury facials.',
    url: site.url,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.tagline} in Purley, Surrey`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} — ${site.tagline}`,
    description:
      'Private, appointment-only Thai wellness in Purley, Surrey. Where ancient Thai wisdom meets modern anatomy.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logos/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logos/favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logos/favicon/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/logos/favicon/apple-touch-icon-180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body>
        {/* Enable reveal animations only when JS is available (no-JS shows all). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Reveal />
      </body>
    </html>
  );
}
