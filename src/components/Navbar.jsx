import { useEffect, useState } from 'react'
import { NAV, subscribeUrl } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="CallMeShazzam, back to top">
        <span className="brandmark" aria-hidden="true">S</span>
        <span className="brand-text">
          CALLME<small>SHAZZAM</small>
        </span>
      </a>

      <button
        className="menu-btn"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>

      <nav id="primary-nav" className={`navlinks ${open ? 'open' : ''}`} aria-label="Primary">
        {NAV.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn-dark"
          href={subscribeUrl('tech')}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          YouTube ↗
        </a>
      </nav>
    </header>
  )
}
