import { useState } from 'react'
import { VERDICT } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Verdict() {
  const [cat, setCat] = useState('')
  const [pri, setPri] = useState('')
  const ready = cat && pri
  const result = ready ? VERDICT.priorities[pri] : null

  const reset = () => { setCat(''); setPri('') }

  const group = (title, options, value, setValue, name) => (
    <fieldset className="v-group">
      <legend>{title}</legend>
      <div className="v-options">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className={`chip ${value === o ? 'active' : ''}`}
            aria-pressed={value === o}
            onClick={() => setValue(o)}
            name={name}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <section className="section" id="verdict">
      <Reveal className="verdict">
        <div className="verdict-copy">
          <div className="kicker">02 / The verdict machine</div>
          <h2>SHOPPING<br />FOR TECH?</h2>
          <p className="section-sub">
            Pick what you're buying and what matters most. Get a quick, honest nudge.
          </p>
          <p className="fineprint">A fun fan-made helper with general buying tips. Not his actual advice.</p>
        </div>

        <div className="verdict-card">
          {group("I'm shopping for", Object.keys(VERDICT.categories), cat, setCat, 'cat')}
          {group('What matters most', Object.keys(VERDICT.priorities), pri, setPri, 'pri')}

          <div className={`v-result ${ready ? 'on' : ''}`} aria-live="polite">
            {ready ? (
              <>
                <span className="v-label">{result.label}</span>
                <p>{VERDICT.categories[cat]} {result.tip}</p>
                <button type="button" className="btn" onClick={reset}>Try another ↺</button>
              </>
            ) : (
              <p className="v-hint">Choose one from each row to see your verdict.</p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
