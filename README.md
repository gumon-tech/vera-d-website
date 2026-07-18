# Vera D Royal Wellness — Website

Marketing website for **Vera D Royal Wellness**, a private, appointment-only
Thai wellness sanctuary in Purley, Surrey.

🌐 **Live:** [vera-d.gumon.io](https://vera-d.gumon.io)

## Stack

- **Next.js 15** (App Router) with `output: 'export'` — a fully static site
- **TypeScript** + **Tailwind CSS v4** (CSS-first `@theme` tokens)
- Fonts via `next/font` (Cinzel · Cormorant Garamond · Jost · Great Vibes)
- No database, no CMS — content lives in typed data files under `src/content/`
- Bookings via WhatsApp deep-link (by appointment only)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static export → ./out
npm run serve      # preview the static build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the static site and publishes it
to GitHub Pages at the custom domain `vera-d.gumon.io`.

## Structure

```
src/
  app/            routes: / · /treatments · /story · /academy
  components/     Header, Footer, Hero, TreatmentCard, ProcessFlow, …
  content/        site.ts (config/contact) · treatments.ts (menu, prices)
public/           logos, photos, favicons, OG image, CNAME
```

Prices and menu content follow the studio's printed treatment posters and are
edited in `src/content/treatments.ts`.
