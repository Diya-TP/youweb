import { ABOUT, PROFILE_IMAGE } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <Reveal className="about-grid">
        <div className="portrait">
          {PROFILE_IMAGE ? (
            <img src={PROFILE_IMAGE} alt="CallMeShazzam" />
          ) : (
            <span aria-hidden="true">S</span>
          )}
        </div>
        <div>
          <div className="kicker">04 / About</div>
          <h2>{ABOUT.heading.toUpperCase()}</h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="about-text">{p}</p>
          ))}
          <ul className="pills">
            {ABOUT.pills.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
