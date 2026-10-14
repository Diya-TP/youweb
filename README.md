# CallMeShazzam: Fan-made YouTube Creator Hub

An unofficial, fan-made concept site for the YouTube channels of CallMeShazzam.
Built with **React 18 + Vite + plain CSS + JavaScript**. Light ivory background, black and gold.

## Run it
```bash
npm install
npm run dev        # local dev server
npm run build      # production build into /dist
```

## Deploy (Netlify)
Open `dist/index.html` by double-click to preview, or drag the **`dist`** folder onto https://app.netlify.com/drop, then click "Claim this site".
Or connect the GitHub repo: build command `npm run build`, publish directory `dist`.

## Edit the content
Everything is in `src/data/content.js`:
- `CHANNELS`: channel names, descriptions, URLs
- `VIDEOS`: paste real YouTube video IDs to show real thumbnails and an in-page player
- `PROFILE_IMAGE`: add a photo to `/public` and set the path (only use one you have permission for)
- `ABOUT`, `MARQUEE`, `TOPICS`: copy

## Before you submit
1. Fill `VIDEOS` with 6 real video IDs (the part after `v=` in a YouTube link).
2. Open each channel link and confirm it is the right channel.
3. After deploying, set `og:image` in `index.html` to the full URL (e.g. `https://your-site.netlify.app/og-image.png`).
4. Run Lighthouse in Chrome DevTools.

## Structure
```
src/
  components/   Navbar, Hero, Marquee, VideoGallery, VideoModal, Channels, About, CTA, Footer, BackToTop, Reveal
  hooks/        useReveal (scroll reveal)
  data/         content.js
  styles.css    design tokens + all styles
```

## What's new in v2
Intro screen with skip button, filters for Phones / Laptops / Audio / Watches / Events / Movies / Travel,
"Verdict machine" quiz, "Work with me" section with a collab form that prepares a copy-ready brief,
Instagram link in the footer. Set `BUSINESS_EMAIL` in `content.js` once you have a confirmed address.

## Features
Animated hero with pointer tilt, marquee, scroll reveals, filterable gallery, accessible video modal
(Esc to close, focus restore), responsive layout, mobile menu, skip link, reduced-motion support.

Unofficial fan-made concept. Not affiliated with or endorsed by CallMeShazzam.
