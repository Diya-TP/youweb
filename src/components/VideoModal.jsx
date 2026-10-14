import { useEffect, useRef } from 'react'

export default function VideoModal({ video, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // keep focus inside the dialog (only the close button is focusable
        // outside the iframe, so just hold it there)
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close video">
          ×
        </button>
        <div className="modal-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
        <p className="modal-title">{video.title}</p>
      </div>
    </div>
  )
}
