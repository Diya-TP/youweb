import { useMemo, useState } from 'react'
import { CHANNELS, FILTERS, TOPICS, VIDEOS } from '../data/content.js'
import Reveal from './Reveal.jsx'
import VideoModal from './VideoModal.jsx'

const hasVideos = VIDEOS.length > 0

function VideoCard({ item, index, onPlay }) {
  const [broken, setBroken] = useState(false)
  return (
    <button className="card" onClick={() => onPlay(item)} aria-label={`Play video: ${item.title}`}>
      <div className="thumb">
        {!broken && (
          <img
            src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            onError={() => setBroken(true)}
          />
        )}
        <span className="tag">{item.category}</span>
        <span className="play" aria-hidden="true">▶</span>
      </div>
      <div className="card-meta">
        <span className="category">{item.category}</span>
        <h3>{item.title}</h3>
      </div>
    </button>
  )
}

function TopicCard({ item }) {
  return (
    <article className="card topic-card">
      <a className="topic-visual" href={item.href} target="_blank" rel="noreferrer" aria-label={`Explore ${item.title} on Instagram`}>
        <div className="thumb topic" style={{ backgroundImage: `url(${item.image})` }}>
          <img className="topic-photo" src={item.image} alt={item.title} loading="lazy" />
          <span className="tag">{item.category}</span>
          <span className="play" aria-hidden="true">↗</span>
        </div>
      </a>
      <div className="card-meta">
        <span className="category">{item.channel.includes('Life') ? 'LIFE & VIBES' : 'TECH & REELS'}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a className="card-link" href={item.href} target="_blank" rel="noreferrer">Explore on Instagram ↗</a>
      </div>
    </article>
  )
}

export default function VideoGallery() {
  const [filter, setFilter] = useState('All')
  const [playing, setPlaying] = useState(null)

  const items = hasVideos ? VIDEOS : TOPICS
  const visible = useMemo(
    () => (filter === 'All' ? items : items.filter((i) => i.category === filter)),
    [filter, items]
  )
  const counts = useMemo(() => {
    const c = { All: items.length }
    items.forEach((i) => (c[i.category] = (c[i.category] || 0) + 1))
    return c
  }, [items])
  const filters = FILTERS.filter((f) => counts[f])

  return (
    <section className="section" id="videos">
      <Reveal className="section-head">
        <div>
          <div className="kicker">01 / {hasVideos ? 'Latest uploads' : 'Explore the vibe'}</div>
          <h2>
            {hasVideos ? (
              <>PICK A VIDEO.<br />PRESS PLAY.</>
            ) : (
              <>YOUR NEXT<br />FAVOURITE REEL.</>
            )}
          </h2>
          <p className="section-sub">
            {hasVideos
              ? 'Watch right here, or open the full channel on YouTube.'
              : 'From tech finds to everyday chaos — pick your vibe and explore.'}
          </p>
        </div>
        <a className="btn" href="https://www.instagram.com/callmeshazzam/" target="_blank" rel="noreferrer">
          Visit Instagram ↗
        </a>
      </Reveal>

      <Reveal className="filters" role="group" aria-label="Filter videos by category">
        {filters.map((f) => (
          <button
            key={f}
            className={`chip ${filter === f ? 'active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f} <span>{String(counts[f]).padStart(2, '0')}</span>
          </button>
        ))}
      </Reveal>

      <div className="cards" aria-live="polite">
        {visible.map((item, i) =>
          hasVideos ? (
            <VideoCard key={item.id} item={item} index={i} onPlay={setPlaying} />
          ) : (
            <TopicCard key={item.title} item={item} index={i} />
          )
        )}
      </div>

      {playing && <VideoModal video={playing} onClose={() => setPlaying(null)} />}
    </section>
  )
}
