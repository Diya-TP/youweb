import { useEffect, useState } from 'react'

const KEY = 'cms-intro-seen'
const seen = () => {
  try { return sessionStorage.getItem(KEY) === '1' } catch { return false }
}
const reduce = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Intro() {
  const [show, setShow] = useState(() => !seen() && !reduce())
  const [leaving, setLeaving] = useState(false)

  const finish = () => {
    setLeaving(true)
    try { sessionStorage.setItem(KEY, '1') } catch { /* ignore */ }
    setTimeout(() => setShow(false), 600)
  }

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(finish, 2600)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  useEffect(() => {
    if (!show && !leaving) document.body.style.overflow = ''
  }, [show, leaving])

  if (!show) return null
  return (
    <div className={`intro ${leaving ? 'leaving' : ''}`} role="presentation">
      <div className="intro-inner">
        <span className="intro-mark" aria-hidden="true">S</span>
        <p className="intro-line">CALLMESHAZZAM</p>
        <p className="intro-sub">Press play on the good stuff</p>
        <div className="intro-bar" aria-hidden="true"><span /></div>
      </div>
      <button className="intro-skip" onClick={finish}>Skip intro →</button>
    </div>
  )
}
