import { CHANNELS, INSTAGRAM_URL, NAV } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label="Back to top">
        <span className="brandmark" aria-hidden="true">S</span>
        <span className="brand-text">CALLME<small>SHAZZAM</small></span>
      </a>
      <p>Unofficial portfolio concept website. Not affiliated with or endorsed by CallMeShazzam. © 2026</p>
      <div className="footer-links">
        {NAV.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
        <a href={CHANNELS.tech.url} target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a>
      </div>
    </footer>
  )
}
