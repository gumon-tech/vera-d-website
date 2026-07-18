/**
 * Treatment process as a gold icon-flow with arrows — the poster's signature.
 * Purely typographic/numeric (no icon fonts) to stay light and on-brand.
 */
export function ProcessFlow({
  steps,
  tone = 'light',
}: {
  steps: string[];
  tone?: 'light' | 'dark';
}) {
  return (
    <ol className="flex flex-wrap items-stretch gap-x-2 gap-y-4">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <div className="flex max-w-[8.5rem] flex-col items-center gap-2 text-center">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border font-body text-sm font-medium ${
                tone === 'dark'
                  ? 'border-gold-bright/50 text-gold-bright'
                  : 'border-gold/45 text-gold-deep'
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`font-body text-[0.72rem] leading-snug tracking-wide ${
                tone === 'dark' ? 'text-cream/75' : 'text-ink-soft'
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className={`mb-6 select-none text-lg ${
                tone === 'dark' ? 'text-gold-bright/50' : 'text-gold/50'
              }`}
            >
              ›
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
