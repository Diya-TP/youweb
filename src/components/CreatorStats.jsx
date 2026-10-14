import { useState } from 'react'
import Reveal from './Reveal.jsx'

const stats = [
  { value: '2.6M+', label: 'YouTube subscribers', note: 'Tech channel' },
  { value: '2M+', label: 'Instagram community', note: 'Across Reels & posts' },
  { value: 'TEDx', label: 'Speaker', note: 'Ideas beyond the screen' },
]

export default function CreatorStats() {
  const [meter, setMeter] = useState(false)
  return (
    <section className="creator-proof" aria-label="Creator highlights">
      <Reveal className="proof-intro">
        <span className="kicker">THE PERSON BEHIND THE REELS</span>
        <h2>Tea in hand.<br /><em>Truth on screen.</em></h2>
        <p>Zero sugarcoating. Tech, humour and a little bit of pucham.</p>
        <button className="meter-button" type="button" onClick={() => setMeter((v) => !v)} aria-pressed={meter}>
          {meter ? 'Sarcasm level: MAXIMUM ☕' : 'Check the pucham meter ↗'}
        </button>
        {meter && <p className="meter-result" role="status">☕☕☕☕☕ Five cups. No sugarcoating detected.</p>}
      </Reveal>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <Reveal className={`stat-item stat-${i + 1}`} key={stat.label} delay={i * 100}>
            <span className="stat-value">{stat.value}</span>
            <strong>{stat.label}</strong>
            <small>{stat.note}</small>
          </Reveal>
        ))}
      </div>
      <div className="media-kit-strip"><div><span className="kicker">BRAND COLLABS / MEDIA KIT</span><strong>Creative strategy · Tech unboxings · Reels · Keynote speaking</strong></div><a className="btn btn-dark" href="#collab">Let’s collaborate ↗</a></div>
      <p className="stats-note">Audience figures and speaker credentials are supplied as draft content; verify against official profiles before publishing.</p>
    </section>
  )
}
