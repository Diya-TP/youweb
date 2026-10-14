import { useState } from 'react'
import { BUDGETS, BUSINESS_EMAIL, SERVICES } from '../data/content.js'
import Reveal from './Reveal.jsx'

const empty = { name: '', brand: '', email: '', budget: BUDGETS[0], message: '' }

export default function Collab() {
  const [form, setForm] = useState(empty)
  const [brief, setBrief] = useState('')
  const [copied, setCopied] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setCopied(false)
    setBrief(
      [
        'Collaboration enquiry for CallMeShazzam',
        '',
        `Name: ${form.name}`,
        `Brand / company: ${form.brand}`,
        `Email: ${form.email}`,
        `Budget: ${form.budget}`,
        '',
        'Idea:',
        form.message,
      ].join('\n')
    )
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const mailto = BUSINESS_EMAIL
    ? `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent('Collaboration enquiry')}&body=${encodeURIComponent(brief)}`
    : ''

  return (
    <section className="section" id="collab">
      <Reveal className="section-head">
        <div>
          <div className="kicker">05 / Work with me</div>
          <h2>GOT A<br />GOOD IDEA?</h2>
          <p className="section-sub">Tell me what you're building. Let's make the tech feel human.</p>
        </div>
      </Reveal>

      <div className="services">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} className="service" delay={i * 90}>
            <span className="service-n">{s.n}</span>
            <span className="category">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="collab-grid">
        <form className="form" onSubmit={submit}>
          <label>Your name *
            <input required value={form.name} onChange={set('name')} autoComplete="name" />
          </label>
          <label>Brand / company *
            <input required value={form.brand} onChange={set('brand')} autoComplete="organization" />
          </label>
          <label>Your email *
            <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
          </label>
          <label>Budget range
            <select value={form.budget} onChange={set('budget')}>
              {BUDGETS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </label>
          <label className="full">What are you thinking? *
            <textarea required rows="4" value={form.message} onChange={set('message')} />
          </label>
          <button className="btn btn-dark full" type="submit">Prepare my enquiry</button>
          <p className="fineprint full">
            This form prepares a brief on your device. Nothing is sent or stored on a server.
          </p>
        </form>

        <div className="brief" aria-live="polite">
          {brief ? (
            <>
              <h3>Your brief</h3>
              <pre>{brief}</pre>
              <div className="brief-actions">
                <button className="btn btn-gold" type="button" onClick={copy}>
                  {copied ? 'Copied ✓' : 'Copy brief'}
                </button>
                {mailto && <a className="btn" href={mailto}>Open email ↗</a>}
              </div>
              {!mailto && (
                <p className="fineprint">Copy it and send it to the creator's confirmed business contact.</p>
              )}
            </>
          ) : (
            <p className="v-hint">Fill in the form and your brief appears here, ready to copy.</p>
          )}
        </div>
      </Reveal>
    </section>
  )
}
