import Image from 'next/image';

/** Dark banner atop subpages — keeps the transparent header legible and sets tone. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image = '/images/photos/hero-massage.webp',
  imagePosition = 'object-center',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  /** Tailwind object-position class; wide banners crop portrait photos hard, so bias toward the subject. */
  imagePosition?: string;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden pt-24">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover ${imagePosition}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/88 via-green-deep/72 to-espresso/90" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="eyebrow !text-gold-bright">{eyebrow}</p>
        <h1 className="mt-4 font-heading text-4xl font-light leading-tight text-cream sm:text-5xl md:text-[3.25rem]">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-cream/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
