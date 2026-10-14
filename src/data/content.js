// ──────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE. Edit this file, not the components.
// ──────────────────────────────────────────────────────────────

export const CHANNELS = {
  tech: {
    name: 'CallMeShazzam Tech',
    label: 'Tech',
    description:
      'Tech reviews, unboxings and humorous takes on gadgets, often in Malayalam.',
    url: 'https://www.youtube.com/@callmeshazzamtech',
  },
  life: {
    name: 'LifeofShazzam',
    label: 'Life',
    description:
      'Opinions on movies, a little travelling, and random stuff from everyday life.',
    url: 'https://www.youtube.com/channel/UCNhaliLwhGH9wX3pe9bFTbA',
  },
}

export const INSTAGRAM_URL = 'https://www.instagram.com/callmeshazzam/'

// Business email for the collab form. Leave '' until you have a confirmed one;
// the form then only offers "Copy brief". Add an email to enable "Open email".
export const BUSINESS_EMAIL = ''

export const subscribeUrl = (key) => `${CHANNELS[key].url}?sub_confirmation=1`

export const NAV = [
  { href: '#videos', label: 'The Reels' },
  { href: '#verdict', label: 'Pick a side' },
  { href: '#channels', label: 'Creator world' },
  { href: '#about', label: 'About' },
  { href: '#collab', label: 'Collab' },
]

export const MARQUEE = [
  'Gadgets', 'Mobile', 'Laptop', 'Reels', 'Tech life', 'Audio', 'Malayalam',
]

export const FILTERS = ['All', 'Mobile', 'Laptop', 'Unboxing', 'Audio', 'Wearables', 'Big moments', 'Off script', 'Lifestyle']

// Add verified YouTube IDs here only if you want playable YouTube videos.
export const VIDEOS = []

// Instagram-first visual topic cards. Use approved creator photos where possible.
export const TOPICS = [
  { category: 'Mobile', title: 'Worth the hype?', text: 'Phone tests, camera moments and honest first impressions.', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Mobile', title: 'Pocket camera test', text: 'Night shots, zoom and video — what matters in real life.', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Unboxing', title: 'Fresh out the box', text: 'First impressions, satisfying details and little surprises.', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Laptop', title: 'The setup check', text: 'Laptop power, desk inspiration and everyday essentials.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Laptop', title: 'Thin, light, fast?', text: 'Screen, battery and performance for work, study and play.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Audio', title: 'Sound on 🎧', text: 'Earbuds, big bass and the details that actually matter.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Wearables', title: 'On your wrist', text: 'Smart features, daily style and battery-life reality checks.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Big moments', title: 'Launch day energy', text: 'New drops, first looks and reactions while the hype is fresh.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85', channel: 'tech' },
  { category: 'Off script', title: 'Hot takes only', text: 'Movies, random thoughts and opinions worth debating.', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85', channel: 'life' },
  { category: 'Lifestyle', title: 'Out of office', text: 'Travel frames, everyday moments and life beyond the screen.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85', channel: 'life' },
].map((t) => ({
  ...t,
  href: INSTAGRAM_URL,
  channel: CHANNELS[t.channel].name,
}))

// ── VERDICT MACHINE (fun fan-made quiz; generic buying tips) ───
export const VERDICT = {
  categories: {
    Phone: 'Check the camera in low light, not just in the shop.',
    Laptop: 'Try the keyboard and screen first. Specs are only half the story.',
    Earbuds: 'Fit and battery life matter more than the spec sheet.',
    Watch: 'Make sure it works with your phone before falling for the features.',
  },
  priorities: {
    Camera: { label: 'Look closer', tip: 'Compare real sample photos from the exact model, not marketing shots.' },
    Battery: { label: 'Test it first', tip: 'Look for real-world screen-on time, not just the mAh number.' },
    Price: { label: 'Wait for the deal', tip: "Watch for sales and compare last year's model before you pay full price." },
    Performance: { label: 'Worth the upgrade?', tip: 'Check how it handles heat and long use, not only benchmark scores.' },
  },
}

// ── WORK WITH ME ───────────────────────────────────────────────
export const SERVICES = [
  { n: '01', title: 'Reels', tag: 'The first impression', text: 'A device, a hook, and a reaction that starts a conversation.' },
  { n: '02', title: 'YouTube integrations', tag: 'The deeper dive', text: 'Give the details room to breathe and make the useful stuff memorable.' },
  { n: '03', title: 'Launch coverage', tag: 'The front-row take', text: 'Bring the audience into the room, from the reveal to the first look.' },
]
export const BUDGETS = ['Not sure yet', 'Under ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000', '₹3,00,000+']

// ── ABOUT ──────────────────────────────────────────────────────
// Put a photo in /public (e.g. /public/shazzam.jpg) and set
// PROFILE_IMAGE = '/shazzam.jpg'. Use an image you have permission for.
export const PROFILE_IMAGE = ''

export const ABOUT = {
  heading: 'The person behind the videos',
  paragraphs: [
    'Shaz Mohamed, known online as CallMeShazzam, is a full-time YouTuber and tech creator based between India and the UAE.',
    'He is known for tech product reviews, unboxings and humorous takes on technology, often in Malayalam, and shares movies, travel and lifestyle moments on a second channel.',
  ],
  pills: [
    'Tech reviews',
    'Unboxings',
    'Movie takes',
    'Travel',
    'TEDx speaker',
    'Brand collaborations',
  ],
}
