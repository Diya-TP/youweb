import { MARQUEE } from '../data/content.js'

export default function Marquee() {
  const row = (hidden) => (
    <div className="marquee-row" aria-hidden={hidden || undefined}>
      {MARQUEE.map((t) => (
        <span key={t}>
          {t} <b>✳</b>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
