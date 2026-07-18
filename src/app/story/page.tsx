import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactSection } from '@/components/ContactSection';
import { site, whatsappLink } from '@/content/site';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'The journey behind Vera D Royal Wellness — fifteen years of London Thai wellness craft, from 2009 to an intimate, appointment-only sanctuary in Purley, Surrey.',
  alternates: { canonical: '/story/' },
};

const timeline = [
  {
    year: '2009',
    title: 'A journey begins',
    body: 'Our founder opens the doors to a refined Thai beauty and wellness practice in London, built on clean technique and genuine care.',
  },
  {
    year: '2009–2024',
    title: "King's Cross",
    body: 'Over fifteen years, the practice becomes one of the area’s most-loved Thai wellness destinations — thousands of restored bodies, one philosophy: the healing power of Thai tradition.',
  },
  {
    year: '2025',
    title: 'Vera D Royal Wellness',
    body: 'That legacy takes a new form — an intimate, appointment-only sanctuary in Purley, devoted purely to therapeutic wellness where ancient Thai wisdom meets modern anatomy.',
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Legacy of Healing"
        intro="Vera D is the next chapter of a journey that began in 2009."
        image="/images/photos/hero-lounge.webp"
      />

      {/* Narrative */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="reveal space-y-6 font-heading text-xl leading-relaxed text-ink sm:text-[1.4rem]">
            <p>
              For over fifteen years, our founder built a Thai beauty and
              wellness practice into one of London’s most loved destinations —
              earning thousands of five-star experiences through a simple
              philosophy:{' '}
              <span className="text-gold-deep italic">
                clean technique, genuine care, and the healing power of Thai
                tradition.
              </span>
            </p>
            <p>
              Vera D Royal Wellness carries that legacy into a new form — an
              intimate, appointment-only sanctuary in Purley, dedicated purely
              to therapeutic wellness: where ancient Thai wisdom meets modern
              anatomy.
            </p>
          </div>
          <p className="reveal mt-10 font-body text-[0.72rem] tracking-[0.3em] text-gold-deep uppercase">
            {site.heritage}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-card py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7.5rem] top-2 hidden h-full w-px bg-gold/25 md:block" />
            <ol className="space-y-14">
              {timeline.map((item) => (
                <li
                  key={item.year}
                  className="reveal grid gap-4 md:grid-cols-[7rem_1fr] md:gap-10"
                >
                  <div className="relative md:text-right">
                    <span className="font-heading text-2xl text-gold-deep">
                      {item.year}
                    </span>
                    <span className="absolute -right-[1.65rem] top-2 hidden h-3 w-3 rounded-full border-2 border-gold bg-cream-card md:block" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-green">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Philosophy image band */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20">
            <Image
              src="/images/photos/owner-guasha.webp"
              alt="Vera D Royal Wellness founder performing a Gua Sha facial"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_22%]"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight text-green sm:text-4xl">
              Every touch, intentional
            </h2>
            <p className="mt-5 font-body text-lg leading-relaxed text-ink-soft">
              We believe true wellness is never rushed and never generic. Every
              treatment begins with an assessment — of your posture, your
              muscles and your body’s Four Elements — so that what follows is
              precise, personal and deeply restorative.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
              This is therapy for the body and soul, delivered in a private
              sanctuary made for one guest at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book via WhatsApp
              </a>
              <Link href="/treatments/" className="btn-outline">
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
