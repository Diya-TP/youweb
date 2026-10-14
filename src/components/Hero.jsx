import { useRef } from 'react'

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const cardRef = useRef(null)

  const onMove = (e) => {
    if (reduceMotion() || !cardRef.current) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    cardRef.current.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`)
    cardRef.current.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`)
  }
  const onLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty('--rx', '0deg')
    cardRef.current.style.setProperty('--ry', '0deg')
  }

  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <span className="eyebrow"><span className="ig-dot">◎</span> TEA × TECH × SARCASM</span>
        <h1>
          <span className="line">SCROLL.</span>
          <span className="line outline">STOP.</span>
          <span className="line gold">SHAZ.</span>
          <span className="hero-tagline">ZERO SUGARCOATING. ALL REAL.</span>
        </h1>
        <p>
          No-filter tech takes, quick reactions and everyday chaos. Chai in one hand, the truth in the other. Step into CallMeShazzam’s Instagram-first creator world.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="https://www.instagram.com/callmeshazzam/" target="_blank" rel="noreferrer">Open Instagram ↗</a>
          <a className="btn" href="#videos">Explore the vibe ↓</a>
        </div>
      </div>

      <div className="hero-art instagram-art" onPointerMove={onMove} onPointerLeave={onLeave} aria-hidden="true">
        <div className="ring" />
        <div className="floating-label label-top">REELS / REAL LIFE <span>✳</span></div>
        <div className="art-card" ref={cardRef}>
          <div className="art-top"><span>CMS / 001</span><span className="live-dot">● LIVE ENERGY</span></div>
          <div className="insta-orbit"><span className="insta-glyph">◎</span><span className="orbit-spark">✳</span></div>
          <div className="art-type"><span>REAL.</span><span className="gold">REEL.</span><span>SHAZ.</span></div>
          <div className="art-bottom"><span>TECH · HUMOUR · CULTURE</span><span>↗</span></div>
        </div>
        <div className="floating-label label-bottom">MADE TO MAKE YOU PAUSE <span>↗</span></div>
        <span className="art-star star-one">✳</span><span className="art-star star-two">✦</span>
      </div>
    </section>
  )
}
