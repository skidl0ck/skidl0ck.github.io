# Portfolio — Next.js + Tailwind + Framer Motion

This replaces the old plain-HTML portfolio (`skidl0ck.github.io`) with a real Next.js app,
plus 5 standalone landing-page demos under `/demos/*` built specifically to show
Figma-to-code and animation range for client-facing frontend work.

## What's here

- `app/page.tsx` — the main portfolio (Sikaty case study, toolkit, about, contact)
- `app/demos/*` — 5 self-contained demo landing pages, each a different industry/style:
  - `/demos/ledgerly` — fintech/SaaS, light + violet, animated chart
  - `/demos/kinfolk` — boutique fitness, bold color-blocked, scrolling marquee
  - `/demos/ember-salt` — fine dining, dark + gold, scroll-triggered tasting menu
  - `/demos/northline` — real estate, swiss-minimal monochrome, animated route line
  - `/demos/fieldwork` — creative agency, maximalist bold, giant marquee headline
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages automatically on push

## Local setup

```bash
npm install
npm run dev        # http://localhost:3000
```

## Before you deploy — replace these placeholders

1. **Portrait photo** — drop a real image at `public/images/portrait.png`, then in
   `app/page.tsx` swap the placeholder `<div>` in the hero for an `<Image>` (or plain `<img>`)
   pointing at `/images/portrait.png`.
2. **Résumé PDF** — put `Marben_Taguinod_Resume.pdf` in `public/docs/` (the links in
   `app/page.tsx` already point at `/docs/Marben_Taguinod_Resume.pdf`).
3. Optional: adjust the Sikaty date range and any copy in `app/page.tsx` if things change.

## Deploying to GitHub Pages (skidl0ck.github.io)

This project is now a **build step**, not a static file you can just `git add && git push`.
The included GitHub Actions workflow handles the build for you automatically:

1. Push this whole project to your `skidl0ck.github.io` repo (replacing the old plain-HTML
   `index.html` — remove that file so it doesn't conflict).
2. In the repo on GitHub: **Settings → Pages → Source**, change it from
   "Deploy from a branch" to **"GitHub Actions"**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` will build the app
   (`next build`, static export) and deploy the `out/` folder automatically.
4. Any future change: edit, commit, `git push` — the site rebuilds and redeploys on its own.
   No more manual build-and-copy step.

## Why static export

`next.config.mjs` sets `output: 'export'` because GitHub Pages only serves static files —
there's no Node server behind it. This means no server components with dynamic data, no
API routes, no image optimization API — all fine for a portfolio, but worth knowing if you
ever add something that needs a real backend (in which case you'd deploy to Vercel/Netlify
instead of GitHub Pages).

## A note on dependencies

`npm audit` will flag some high-severity Next.js advisories tied to server-side features
(middleware, image optimization API, server actions). None of them apply here — this app
never runs a Node server in production, it only ships static HTML/CSS/JS — but keep
dependencies reasonably current if you build on this later.
