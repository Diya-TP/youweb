import { CHANNELS, subscribeUrl } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Channels() {
  return (
    <section className="section" id="channels">
      <Reveal className="section-head">
        <div>
          <div className="kicker">03 / Two channels</div>
          <h2>ONE CREATOR.<br />TWO CHANNELS.</h2>
          <p className="section-sub">Explore the linked YouTube channels alongside Instagram.</p>
        </div>
      </Reveal>

      <div className="channel-grid">
        <Reveal className="channel dark">
          <span className="channel-tag">{CHANNELS.tech.label}</span>
          <h3>{CHANNELS.tech.name}</h3>
          <p>{CHANNELS.tech.description}</p>
          <div className="channel-actions">
            <a className="btn btn-gold" href={subscribeUrl('tech')} target="_blank" rel="noreferrer">
              Subscribe ↗
            </a>
            <a className="btn btn-ghost" href={`${CHANNELS.tech.url}/videos`} target="_blank" rel="noreferrer">
              Watch videos
            </a>
          </div>
        </Reveal>

        <Reveal className="channel gold" delay={100}>
          <span className="channel-tag">{CHANNELS.life.label}</span>
          <h3>{CHANNELS.life.name}</h3>
          <p>{CHANNELS.life.description}</p>
          <div className="channel-actions">
            <a className="btn btn-dark" href={subscribeUrl('life')} target="_blank" rel="noreferrer">
              Subscribe ↗
            </a>
            <a className="btn" href={`${CHANNELS.life.url}/videos`} target="_blank" rel="noreferrer">
              Watch videos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
