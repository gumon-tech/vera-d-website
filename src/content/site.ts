/**
 * Site-wide content & config — single source of truth.
 * Prices/menu live in treatments.ts. Everything the header, footer, and
 * contact block need lives here so it can be edited in one place.
 */

export const site = {
  name: 'Vera D',
  fullName: 'Vera D Royal Wellness',
  tagline: 'Royal Thai Therapeutic Massage',
  subtagline: 'Where Ancient Thai Wisdom Meets Modern Anatomy',
  heritage: 'by TaitamD Academy',
  positioning: 'Exclusive Therapy for Body & Soul',

  // Production URL — used for canonical + JSON-LD + OG (GitHub Pages custom domain)
  url: 'https://vera-d.gumon.io',

  contact: {
    addressLine: '1 Highbarrow Close',
    locality: 'Purley',
    region: 'Surrey',
    postcode: 'CR8',
    country: 'United Kingdom',
    phoneDisplay: '+44 (0)7882 359499',
    phoneHref: '+447882359499',
    whatsappNumber: '447882359499',
    whatsappDisplay: '07882 359499',
    instagramHandle: '@VeraD_RoyalWellness',
    instagramUrl: 'https://instagram.com/VeraD_RoyalWellness',
    bookingNote: 'By Appointment Only',
    // Google Maps embed (place search — no API key needed for iframe embed)
    mapsQuery: '1 Highbarrow Close, Purley, Surrey, CR8',
  },

  academy: {
    name: 'Taitam-D Academy',
    blurb:
      'VTCT-accredited training in Thai massage and beauty therapy, under Vera-D Group.',
    url: 'https://taitamd-beautyacademy.com',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments/' },
    { label: 'Our Story', href: '/story/' },
    { label: 'Academy', href: '/academy/' },
  ],
} as const;

/** Pre-filled WhatsApp deep link. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  const text =
    message ??
    "Hello Vera D Royal Wellness, I'd like to book an appointment.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** tel: link. */
export const telLink = `tel:${site.contact.phoneHref}`;

/** Full one-line address. */
export const fullAddress = `${site.contact.addressLine}, ${site.contact.locality}, ${site.contact.region}, ${site.contact.postcode}`;
