# CallMeShazzam Creator Hub — Unofficial Concept

A responsive, pastel-themed creator hub concept built with React and Vite. It connects visitors to the creator's Instagram presence and linked YouTube channels, and demonstrates UI patterns for a creator portfolio: animated hero, topic cards, a lightweight verdict quiz, channel links and a collaboration brief.

**This is an independent concept project. It is not affiliated with, endorsed by, or operated by CallMeShazzam.** Topic-card photography is illustrative stock imagery, not content published by the creator. Audience statistics and unverified credentials are intentionally not displayed.

## Live demo

Add your confirmed Vercel URL here after deployment:

- **Live site:** `PASTE_YOUR_VERCEL_URL_HERE`
- **Source repository:** https://github.com/Diya-TP/youweb

## Tech stack

- React 18
- Vite 5
- JavaScript (ES modules)
- CSS (custom design tokens, responsive layout and reduced-motion support)

## Run locally

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To create and preview a production build:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Features

- Responsive layout with mobile navigation
- Pastel color system with stronger text contrast
- Animated hero and scroll reveal effects
- Reduced-motion preference support
- Topic cards that are explicitly labeled as illustrative
- Links to Instagram and the two configured YouTube channels
- Product-verdict quiz with generic buying tips
- Collaboration brief form that does not invent a contact email
- SEO description, social sharing metadata and favicon

## Project structure

```text
public/             Static assets (favicon and social preview image)
scripts/            Post-build helper
src/
  components/       Reusable page sections and UI
  data/content.js   Creator links and editable page content
  hooks/            Scroll reveal hook
  App.jsx           Page composition
  main.jsx          React entry point
  styles.css        Design tokens, layout and component styles
index.html          HTML metadata and app mount point
```

## Content maintenance

- Update links in `src/data/content.js` only after confirming they point to the correct official profiles.
- `VIDEOS` is intentionally empty until verified video IDs are supplied.
- Use only creator images that are approved for this use. Current topic photos are illustrative stock images.
- Do not add subscriber counts, awards, speaker credentials or contact details without reliable verification.
- After deployment, replace the placeholder live-demo URL above and set `og:url` plus the absolute `og:image` URL in `index.html`.

## Before submitting

- [ ] Replace `PASTE_YOUR_VERCEL_URL_HERE` with the confirmed live URL.
- [ ] Confirm all official profile links.
- [ ] Add only verified video IDs or approved creator media.
- [ ] Run `npm install` and `npm run build` from a clean checkout.
- [ ] Test the layout at mobile, tablet and desktop widths.
- [ ] Keyboard-test the navigation, buttons, filters and quiz.
- [ ] Check color contrast and reduced-motion behavior.
- [ ] Run Lighthouse and attach a genuine screenshot/report if requested.
- [ ] Keep `node_modules/`, `.env` files and `dist/` out of Git.

## Deployment

The project is configured for Vercel's Vite workflow:

- Build command: `npm run build`
- Output directory: `dist`

If your Vercel project uses a custom Build Command override, make sure it matches the current package build script. Commit changes to the connected GitHub branch to trigger a new deployment.

## Attribution

This project is a portfolio exercise and uses third-party stock photos for illustration. Replace them with approved creator-owned content if permission is obtained. Respect the respective image providers' licensing terms.
