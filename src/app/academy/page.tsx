import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactSection } from '@/components/ContactSection';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Academy',
  description:
    'Taitam-D Academy, under Vera-D Group — VTCT-accredited training in Thai massage and beauty therapy. The teaching heritage behind Vera D Royal Wellness.',
  alternates: { canonical: '/academy/' },
};

const offerings = [
  {
    title: 'Thai Massage Craft',
    body: 'Traditional technique, assisted stretching and pressure-point therapy — taught with anatomical precision.',
  },
  {
    title: 'Beauty Therapy',
    body: 'Facial and skin therapies grounded in genuine care and professional, hygiene-first standards.',
  },
  {
    title: 'VTCT Accreditation',
    body: 'Recognised, industry-standard qualifications that open doors across the wellness profession.',
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Vera-D Group"
        title="Taitam-D Academy"
        intro="The teaching heritage behind Vera D Royal Wellness — where our craft is passed on."
        image="/images/photos/hero-head-spa.webp"
        imagePosition="object-center"
      />

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="reveal">
            <p className="eyebrow">Professional Training</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-green sm:text-4xl">
              A craft worth passing on
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
              Professional training continues under Vera-D Group at{' '}
              <span className="text-green">{site.academy.name}</span> —
              VTCT-accredited courses in Thai massage and beauty therapy. The
              same clean technique and genuine care that define every Vera D
              treatment are taught to the next generation of therapists.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 md:grid-cols-3 lg:px-8">
          {offerings.map((o, i) => (
            <div
              key={o.title}
              className="reveal rounded-2xl border border-gold/15 bg-cream-card p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-green font-body text-sm text-gold-bright">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-heading text-xl text-green">{o.title}</h3>
              <p className="mt-2 font-body text-[0.95rem] leading-relaxed text-ink-soft">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* External CTA band */}
      <section className="relative overflow-hidden bg-green-deep py-20 text-center text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,136,47,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="font-heading text-3xl !text-cream sm:text-4xl">
            Learn with Taitam-D Academy
          </h2>
          <p className="mt-4 font-body text-cream/70">
            Explore courses, accreditation and enrolment on the academy website.
          </p>
          <div className="mt-8">
            <a
              href={site.academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit taitamd-beautyacademy.com
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
