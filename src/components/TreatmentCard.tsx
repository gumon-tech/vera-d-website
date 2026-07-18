import { ProcessFlow } from './ProcessFlow';
import type { Treatment } from '@/content/treatments';

/** Detailed treatment card used on the Treatments page. */
export function TreatmentCard({ t }: { t: Treatment }) {
  return (
    <article
      className={`reveal group relative flex flex-col rounded-2xl border bg-cream-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(112,67,5,0.45)] sm:p-8 ${
        t.featured ? 'border-gold/50' : 'border-gold/15'
      }`}
    >
      {t.featured && (
        <span className="absolute right-6 top-6 rounded-full bg-green px-3 py-1 font-body text-[0.6rem] tracking-[0.2em] text-gold-bright uppercase">
          Signature
        </span>
      )}

      <header>
        <h3 className="max-w-[85%] font-heading text-2xl leading-tight text-green">
          {t.name}
        </h3>
        {t.subtitle && (
          <p className="mt-1.5 font-body text-sm italic text-gold-deep">
            {t.subtitle}
          </p>
        )}
        <div className="mt-3 flex items-center gap-3 font-body text-[0.72rem] tracking-[0.14em] text-ink-soft uppercase">
          <span>
            {t.therapists} Therapist{t.therapists > 1 ? 's' : ''}
          </span>
          <span className="h-1 w-1 rounded-full bg-gold/60" />
          <span>{t.duration}</span>
        </div>
      </header>

      <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-ink-soft">
        {t.description}
      </p>

      {t.suitableFor && (
        <div className="mt-5">
          <p className="eyebrow !text-[0.6rem]">Suitable for</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {t.suitableFor.map((s) => (
              <li
                key={s}
                className="rounded-full border border-gold/25 bg-cream px-3 py-1 font-body text-[0.72rem] text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {t.process && (
        <div className="mt-6 border-t border-gold/15 pt-5">
          <p className="eyebrow !text-[0.6rem]">The Ritual</p>
          <div className="mt-4">
            <ProcessFlow steps={t.process} />
          </div>
        </div>
      )}

      <footer className="mt-auto flex items-end justify-between pt-7">
        <div>
          <span className="font-heading text-4xl text-green">£{t.price}</span>
          <span className="ml-2 font-body text-[0.7rem] tracking-[0.14em] text-ink-soft uppercase">
            per person
          </span>
        </div>
      </footer>

      {t.upgrade && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-green/[0.06] px-4 py-3">
          <div>
            <p className="font-body text-[0.82rem] font-medium text-green">
              {t.upgrade.name}
            </p>
            <p className="font-body text-[0.7rem] tracking-wide text-ink-soft uppercase">
              {t.upgrade.duration}
            </p>
          </div>
          <span className="font-heading text-2xl text-gold-deep">
            £{t.upgrade.price}
          </span>
        </div>
      )}
    </article>
  );
}
