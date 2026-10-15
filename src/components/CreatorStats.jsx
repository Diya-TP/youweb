import Reveal from './Reveal.jsx'

const highlights = [
  { value: '01', label: 'Tech & gadgets', note: 'Reviews, unboxings and first impressions' },
  { value: '02', label: 'Creator culture', note: 'Short-form content and audience conversation' },
  { value: '03', label: 'Beyond tech', note: 'Entertainment and everyday-life content' },
]

export default function CreatorStats() {
  return (
    <section className="creator-proof" aria-label="Creator content themes">
      <Reveal className="proof-intro">
        <span className="kicker">A CREATOR, MORE THAN ONE SIDE</span>
        <h2>Curiosity first.<br /><em>Honest takes.</em></h2>
        <p>This concept page highlights content themes rather than publishing unverified audience figures or credentials.</p>
      </Reveal>
      <div className="stats-grid">
        {highlights.map((item, i) => (
          <Reveal className={`stat-item stat-${i + 1}`} key={item.label} delay={i * 100}>
            <span className="stat-value">{item.value}</span>
            <strong>{item.label}</strong>
            <small>{item.note}</small>
          </Reveal>
        ))}
      </div>
      <div className="media-kit-strip">
        <div>
          <span className="kicker">CREATOR LINKS</span>
          <strong>Explore the official profiles for current content and contact details.</strong>
        </div>
        <a className="btn btn-dark" href="https://www.instagram.com/callmeshazzam/" target="_blank" rel="noreferrer">Open Instagram ↗</a>
      </div>
    </section>
  )
}
