import Image from 'next/image';
import Link from 'next/link';
import { site, whatsappLink } from '@/content/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/photos/hero-lounge.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlays: warm dark vignette so gold reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/88 via-green-deep/78 to-espresso/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_center,rgba(10,26,17,0.7),transparent_72%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
        <Image
          src="/logos/vera-d-mark.webp"
          alt=""
          width={110}
          height={110}
          priority
          className="h-20 w-20 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] sm:h-24 sm:w-24"
        />

        <p className="mt-7 font-body text-[0.72rem] tracking-[0.4em] text-gold-bright uppercase sm:text-sm">
          Vera D · Royal Wellness
        </p>

        <h1 className="mt-5 font-heading text-4xl font-light leading-[1.08] text-cream sm:text-5xl md:text-6xl">
          Royal Thai
          <br />
          <span className="text-gold-gradient">Therapeutic Massage</span>
        </h1>

        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/80 sm:text-lg">
          {site.subtagline}
        </p>
        <p className="mt-2 font-script text-3xl text-gold-bright sm:text-4xl">
          Deep Healing. Lasting Results.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book via WhatsApp
          </a>
          <Link href="/treatments/" className="btn-outline !border-cream/50 !text-cream hover:!bg-cream hover:!text-green">
            Explore Treatments
          </Link>
        </div>

        <p className="mt-8 font-body text-[0.68rem] tracking-[0.28em] text-cream/60 uppercase">
          {site.contact.bookingNote} · {site.contact.locality}, {site.contact.region}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-9 w-[1px] bg-gradient-to-b from-gold-bright to-transparent" />
      </div>
    </section>
  );
}
