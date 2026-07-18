/**
 * Refined gold line-icons for the Four Elements — replaces OS-dependent emoji
 * so the mark reads consistently and luxuriously everywhere.
 * Stroke uses currentColor; set the colour on the parent (e.g. text-gold-bright).
 */
type ElementName = 'Earth' | 'Water' | 'Wind' | 'Fire';

const paths: Record<ElementName, React.ReactNode> = {
  // Sprout — two leaves rising from a stem
  Earth: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 15c-1.2-3.4-4-4.6-7-4.4.2 3.2 2.6 5.6 7 5.2" />
      <path d="M12 13c1-3 3.6-4.2 6.4-4-.2 2.8-2.4 5-6.4 4.6" />
    </>
  ),
  // Droplet
  Water: (
    <path d="M12 3.5c2.8 3.4 6 7 6 10.4a6 6 0 0 1-12 0c0-3.4 3.2-7 6-10.4Z" />
  ),
  // Wind — flowing gusts
  Wind: (
    <>
      <path d="M3 8.5h9.5a2.2 2.2 0 1 0-2.2-2.2" />
      <path d="M3 12h13a2.4 2.4 0 1 1-2.4 2.4" />
      <path d="M3 15.5h7.5a2 2 0 1 1-2 2" />
    </>
  ),
  // Flame
  Fire: (
    <path d="M12 3c.6 3 3.4 4.4 3.4 7.2 0 1-.5 1.9-1.2 2.5 1.6-.2 2.6-1.6 2.6-3.4 2 1.8 2.8 3.9 2.8 5.8A7.6 7.6 0 0 1 12 22a7 7 0 0 1-7-7c0-2.8 1.8-4.6 3-6 .3 1.4 1.2 2 2 2.2C11.4 8.8 10.6 5.9 12 3Z" />
  ),
};

export function ElementIcon({
  name,
  className = 'h-8 w-8',
}: {
  name: ElementName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
