import { subscribeUrl } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <Reveal as="section" className="cta" aria-labelledby="cta-title">
      <div>
        <div className="kicker">You made it this far</div>
        <h2 id="cta-title">DON'T MISS<br />THE NEXT UPLOAD.</h2>
        <p>Subscribe on YouTube and hit the bell to catch new videos as they land.</p>
      </div>
      <a className="btn btn-dark" href={subscribeUrl('tech')} target="_blank" rel="noreferrer">
        Subscribe now ↗
      </a>
    </Reveal>
  )
}
