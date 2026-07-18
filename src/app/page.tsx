import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactSection } from '@/components/ContactSection';
import { StructuredData } from '@/components/StructuredData';
import { site, whatsappLink } from '@/content/site';
import {
  categories,
  fourElements,
  trustBadges,
  whyVeraD,
} from '@/content/treatments';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <TrustStrip />
      <TreatmentCategories />
      <FourElements />
      <WhyVeraD />
      <StoryTeaser />
      <BrandBadge />
      <ContactSection />
    </>
  );
}

/* ---------------------------------------------------------------- */

function TrustStrip() {
  return (
    <section className="border-y border-gold/15 bg-cream-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-gold/10 px-6 md:grid-cols-4 md:divide-x lg:px-8">
        {trustBadges.map((badge) => (
          <div
            key={badge}
            className="flex items-center justify-center px-4 py-7 text-center"
          >
            <span className="font-body text-[0.72rem] font-medium tracking-[0.18em] text-green uppercase sm:text-[0.8rem]">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function TreatmentCategories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Treatments"
          title="Four Rituals of Royal Wellness"
          intro="Each treatment begins with an assessment — of your posture, your muscles, and your body's Four Elements — so that every touch is intentional, anatomically precise and deeply restorative."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/treatments/#${cat.id}`}
              className="reveal group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-gold/15"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/92 via-green-deep/40 to-transparent" />
              <div className="relative z-10 p-8">
                <p className="font-body text-[0.66rem] tracking-[0.28em] text-gold-bright uppercase">
                  {String(i + 1).padStart(2, '0')} · {cat.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-[1.7rem] leading-tight text-cream">
                  {cat.name}
                </h3>
                <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-cream/75">
                  {cat.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-[0.72rem] tracking-[0.16em] text-gold-bright uppercase transition-transform duration-300 group-hover:translate-x-1">
                  View menu →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function FourElements() {
  return (
    <section className="relative overflow-hidden bg-green-deep py-24 text-cream">
      {/* faint radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,136,47,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Signature"
          title="The Power of Four Elements"
          intro="Our therapies are designed to balance your body and mind for deep healing and long-lasting wellness."
          tone="dark"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {fourElements.map((el) => (
            <div key={el.name} className="reveal text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-3xl">
                {el.symbol}
              </div>
              <h3 className="mt-5 font-display text-lg tracking-[0.14em] !text-gold-bright uppercase">
                {el.name}
              </h3>
              <p className="mt-2 font-body text-sm text-cream/70">{el.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function WhyVeraD() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 lg:aspect-auto lg:h-full lg:min-h-[30rem]">
            <Image
              src="/images/photos/owner-guasha.webp"
              alt="A Vera D therapist at work"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* List */}
          <div>
            <SectionHeading
              eyebrow="Why Vera D"
              title="Intentional. Anatomical. Restorative."
              intro="Fifteen years of London practice, distilled into a private Purley sanctuary devoted purely to therapeutic wellness."
              align="left"
            />
            <ul className="reveal mt-10 space-y-6">
              {whyVeraD.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green font-body text-sm text-gold-bright">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl text-green">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-[0.95rem] leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

function StoryTeaser() {
  return (
    <section className="bg-cream-card py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="eyebrow">Our Story</p>
        <blockquote className="mt-6 font-heading text-2xl leading-relaxed text-green italic sm:text-[1.75rem]">
          “Vera D is the next chapter of a journey that began in 2009 — carrying
          fifteen years of London craft into an intimate, appointment-only
          sanctuary in Purley.”
        </blockquote>
        <p className="mt-6 font-body text-[0.72rem] tracking-[0.28em] text-gold-deep uppercase">
          {site.heritage}
        </p>
        <div className="mt-8">
          <Link href="/story/" className="btn-outline">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

/** Dark expressive brand badge — the script "VeraD" on slate, per คุณนก's note. */
function BrandBadge() {
  return (
    <section className="relative overflow-hidden bg-espresso py-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,136,47,0.16),transparent_65%)]" />
      <div className="relative mx-auto max-w-2xl px-6">
        <Image
          src="/logos/vera-d-mark.webp"
          alt=""
          width={90}
          height={90}
          className="mx-auto h-16 w-16 object-contain"
        />
        <p className="mt-8 font-script text-6xl leading-none text-gold-gradient sm:text-7xl">
          Vera D
        </p>
        <p className="mt-4 font-display text-sm tracking-[0.4em] text-cream/80 uppercase">
          Royal Wellness
        </p>
        <div className="mx-auto mt-6 h-px w-40 rule-gold" />
        <p className="mt-6 font-heading text-xl italic text-cream/70">
          {site.positioning}
        </p>
        <p className="mt-2 font-body text-[0.7rem] tracking-[0.3em] text-gold uppercase">
          {site.heritage}
        </p>
        <div className="mt-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reserve Your Ritual
          </a>
        </div>
      </div>
    </section>
  );
}
