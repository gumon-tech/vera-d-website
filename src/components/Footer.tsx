import Link from 'next/link';
import Image from 'next/image';
import {
  site,
  telLink,
  whatsappLink,
  fullAddress,
} from '@/content/site';

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-green-deep text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <Image
            src="/logos/vera-d-logo-full.webp"
            alt={site.fullName}
            width={260}
            height={260}
            className="h-auto w-44 object-contain"
          />
          <p className="mt-5 max-w-xs font-heading text-lg italic leading-relaxed text-cream/70">
            {site.positioning}
          </p>
          <p className="mt-4 font-body text-[0.7rem] tracking-[0.25em] text-gold uppercase">
            {site.heritage}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-body text-[0.72rem] tracking-[0.3em] text-gold uppercase">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-heading text-lg text-cream/80 transition-colors hover:text-gold-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body text-[0.72rem] tracking-[0.3em] text-gold uppercase">
            Visit &amp; Book
          </h3>
          <ul className="mt-5 space-y-3.5 font-body text-sm leading-relaxed text-cream/75">
            <li>{fullAddress}</li>
            <li>
              <a href={telLink} className="transition-colors hover:text-gold-bright">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-bright"
              >
                WhatsApp {site.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-bright"
              >
                Instagram {site.contact.instagramHandle}
              </a>
            </li>
            <li className="pt-1 font-body text-[0.7rem] tracking-[0.25em] text-gold uppercase">
              {site.contact.bookingNote}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-[0.72rem] tracking-wide text-cream/65 sm:flex-row lg:px-8">
          <p>
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">
            {site.contact.locality}, {site.contact.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
