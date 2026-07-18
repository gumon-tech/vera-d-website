'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site, whatsappLink } from '@/content/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Over a dark hero the header is transparent with light text; once scrolled
  // (or the drawer is open) it becomes a solid cream bar with dark text.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-cream shadow-[0_1px_20px_-8px_rgba(112,67,5,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* Brand lockup */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logos/vera-d-mark.webp"
            alt=""
            width={48}
            height={48}
            className="h-11 w-11 object-contain drop-shadow-sm"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg tracking-[0.16em] transition-colors sm:text-xl ${
                solid ? 'text-green' : 'text-cream'
              }`}
            >
              VERA&nbsp;D
            </span>
            <span
              className={`mt-1 font-body text-[0.55rem] tracking-[0.34em] transition-colors ${
                solid ? 'text-gold-deep' : 'text-gold-bright'
              }`}
            >
              ROYAL WELLNESS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative font-body text-[0.82rem] font-medium tracking-[0.14em] uppercase transition-colors ${
                solid
                  ? 'text-ink hover:text-gold-deep'
                  : 'text-cream/90 hover:text-gold-bright'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-6 !py-3 !text-[0.72rem]"
          >
            Book via WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-[1.5px] w-6 transition-all duration-300 ${solid ? 'bg-green' : 'bg-cream'} ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-6 -translate-y-1/2 bg-green transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-6 transition-all duration-300 ${solid ? 'bg-green' : 'bg-cream'} ${
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer — fills the screen below the header so nothing peeks through */}
      <div
        className={`overflow-y-auto border-t border-gold/15 bg-cream transition-[height,opacity] duration-500 lg:hidden ${
          open
            ? 'h-[calc(100dvh-4.75rem)] opacity-100'
            : 'h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3.5 font-heading text-2xl text-green transition-colors hover:text-gold-deep"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
            onClick={() => setOpen(false)}
          >
            Book via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
