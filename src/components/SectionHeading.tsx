import Image from 'next/image';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  divider?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'light',
  divider = true,
}: Props) {
  const isCenter = align === 'center';
  return (
    <div
      className={`reveal ${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${tone === 'dark' ? '!text-gold-bright' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-heading text-3xl leading-tight sm:text-4xl md:text-[2.75rem] ${
          tone === 'dark' ? '!text-cream' : ''
        }`}
      >
        {title}
      </h2>
      {divider && (
        <div className={`mt-6 flex ${isCenter ? 'justify-center' : ''}`}>
          <Image
            src="/logos/vera-d-divider.webp"
            alt=""
            width={220}
            height={16}
            className="h-3 w-auto object-contain opacity-90"
          />
        </div>
      )}
      {intro && (
        <p
          className={`mt-6 font-body text-[1.02rem] leading-relaxed ${
            tone === 'dark' ? 'text-cream/70' : 'text-ink-soft'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
