import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { TreatmentCard } from '@/components/TreatmentCard';
import { ContactSection } from '@/components/ContactSection';
import { ElementIcon } from '@/components/ElementIcon';
import { categories, fourElements } from '@/content/treatments';
import { whatsappLink } from '@/content/site';

export const metadata: Metadata = {
  title: 'Treatments',
  description:
    'Explore Vera D Royal Wellness treatments — Royal Thai therapeutic massage, head spa, hand & foot rituals and luxury facials in Purley, Surrey. By appointment only.',
  alternates: { canonical: '/treatments/' },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Treatments"
        intro="Four collections of Royal Wellness — each treatment shaped by an assessment of your posture, muscles and Four Elements, so every touch is intentional and anatomically precise."
        image="/images/photos/hero-massage.webp"
      />

      {/* Sticky category nav */}
      <nav className="sticky top-[4.75rem] z-30 border-y border-gold/15 bg-cream shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 lg:justify-center lg:gap-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-body text-[0.72rem] font-medium tracking-[0.12em] text-ink uppercase transition-colors hover:bg-green hover:text-gold-bright"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={idx % 2 === 1 ? 'bg-cream-card py-20' : 'py-20'}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {/* Category header */}
            <div className="reveal grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gold/20">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className={`object-cover ${cat.imagePosition ?? 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/40 to-transparent" />
              </div>
              <div>
                <p className="eyebrow">{cat.eyebrow}</p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-green sm:text-4xl">
                  {cat.name}
                </h2>
                <p className="mt-2 font-heading text-lg italic text-gold-deep">
                  {cat.tagline}
                </p>
                <p className="mt-5 font-body leading-relaxed text-ink-soft">
                  {cat.intro}
                </p>
              </div>
            </div>

            {/* Treatment cards */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {cat.treatments.map((t) => (
                <TreatmentCard key={t.slug} t={t} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Four Elements note */}
      <section className="relative overflow-hidden bg-green-deep py-20 text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,136,47,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow !text-gold-bright">Every Treatment Begins Here</p>
          <h2 className="mt-4 font-heading text-3xl !text-cream sm:text-4xl">
            The Four-Element Assessment
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {fourElements.map((el) => (
              <div key={el.name} className="flex flex-col items-center gap-2">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold-bright">
                  <ElementIcon name={el.name} className="h-8 w-8" />
                </span>
                <span className="font-display text-sm tracking-[0.14em] text-gold-bright uppercase">
                  {el.name}
                </span>
                <span className="font-body text-xs text-cream/60">{el.meaning}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
