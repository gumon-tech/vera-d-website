'use client';

import { useEffect } from 'react';

/**
 * Progressive scroll-reveal. Any element with class `reveal` fades/slides in
 * when it enters the viewport. Rendered once at the app root; re-scans on route
 * change via a MutationObserver so client-navigated pages animate too.
 */
export function Reveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document
        .querySelectorAll('.reveal')
        .forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    const observe = () =>
      document
        .querySelectorAll('.reveal:not(.is-visible)')
        .forEach((el) => io.observe(el));

    observe();

    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
