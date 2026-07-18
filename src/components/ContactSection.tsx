import { SectionHeading } from './SectionHeading';
import {
  site,
  telLink,
  whatsappLink,
  fullAddress,
} from '@/content/site';

/** Contact + map block. Rendered at the end of every page. */
export function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.contact.mapsQuery,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-cream-deep/50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Book Your Escape"
          intro="A private wellness sanctuary in Purley, Surrey — by appointment only. Reach us on WhatsApp for the fastest booking."
        />

        <div className="reveal mt-14 grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div className="flex flex-col justify-center">
            <dl className="space-y-7">
              <ContactRow label="Address">
                <p className="font-heading text-xl text-green">{fullAddress}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    site.contact.mapsQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-gold-deep underline-offset-4 hover:underline"
                >
                  Get directions →
                </a>
              </ContactRow>

              <ContactRow label="Phone">
                <a
                  href={telLink}
                  className="font-heading text-xl text-green transition-colors hover:text-gold-deep"
                >
                  {site.contact.phoneDisplay}
                </a>
              </ContactRow>

              <ContactRow label="Instagram">
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl text-green transition-colors hover:text-gold-deep"
                >
                  {site.contact.instagramHandle}
                </a>
              </ContactRow>

              <ContactRow label="Hours">
                <p className="font-heading text-xl text-green">
                  {site.contact.bookingNote}
                </p>
              </ContactRow>
            </dl>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book via WhatsApp
              </a>
              <a href={telLink} className="btn-outline">
                Call Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-[0_20px_50px_-24px_rgba(112,67,5,0.4)]">
            <iframe
              title={`Map to ${site.fullName}`}
              src={mapSrc}
              className="h-[340px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold/40 pl-5">
      <dt className="eyebrow !text-[0.65rem]">{label}</dt>
      <dd className="mt-1.5">{children}</dd>
    </div>
  );
}
