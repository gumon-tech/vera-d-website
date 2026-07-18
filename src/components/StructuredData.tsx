import { site, fullAddress } from '@/content/site';
import { categories } from '@/content/treatments';

/** JSON-LD DaySpa schema for local SEO. Rendered on the home page. */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    '@id': `${site.url}/#business`,
    name: site.fullName,
    description:
      'Private, appointment-only Thai wellness sanctuary in Purley, Surrey — Royal Thai therapeutic massage, head spa, hand & foot rituals and luxury facials.',
    url: site.url,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logos/favicon/vera-d-mark-512.png`,
    telephone: site.contact.phoneDisplay,
    priceRange: '££££',
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.addressLine,
      addressLocality: site.contact.locality,
      addressRegion: site.contact.region,
      postalCode: site.contact.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3369,
      longitude: -0.1127,
    },
    areaServed: ['Purley', 'Croydon', 'South London', 'Surrey'],
    sameAs: [site.contact.instagramUrl],
    availableService: categories.map((cat) => ({
      '@type': 'Service',
      name: cat.name,
      description: cat.intro,
    })),
    makesOffer: categories.flatMap((cat) =>
      cat.treatments.map((t) => ({
        '@type': 'Offer',
        name: t.name,
        priceCurrency: 'GBP',
        price: t.price,
        category: cat.name,
      })),
    ),
    knowsLanguage: ['en'],
    slogan: site.subtagline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
