import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.name,
    description: `${site.tagline} — ${site.contact.locality}, ${site.contact.region}. By appointment only.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#0e2a1c',
    theme_color: '#0e2a1c',
    icons: [
      { src: '/logos/favicon/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/logos/favicon/vera-d-mark-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/logos/favicon/apple-touch-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
