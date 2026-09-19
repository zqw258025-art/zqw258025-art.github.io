import React from 'react'
import { site } from '../content/site'
import Reveal from '../components/Reveal'
import { navigate } from '../lib/navigate'
import './WorkSpatial.css'

export default function WorkSpatial() {
  const { spatial, name, nameZh, footer } = site

  const flat = React.useMemo(
    () => spatial.groups.flatMap((g) => g.images.map((img) => ({ ...img, group: g.label }))),
    [spatial]
  )
  const starts = React.useMemo(() => {
    let acc = 0
    return spatial.groups.map((g) => {
      const start = acc
      acc += g.images.length
      return start
    })
  }, [spatial])

  const [active, setActive] = React.useState(null)

  const close = React.useCallback(() => setActive(null), [])
  const step = React.useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + flat.length) % flat.length)),
    [flat.length]
  )

  React.useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  const back = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="wp">
      <header className="wp-nav">
        <div className="wp-container wp-nav-inner">
          <a className="wp-brand" href="/" onClick={back}>
            <span className="wp-brand-name">{name}<span className="wp-brand-dot">.</span></span>
            <span className="wp-brand-zh">{nameZh}</span>
          </a>
          <a className="wp-back" href="/" onClick={back}>← BACK TO PORTFOLIO</a>
        </div>
      </header>

      <main>
        <section className="wp-hero">
          <div className="wp-container">
            <p className="wp-label">PROJECT</p>
            <h1 className="wp-title">
              {spatial.title}
              <span className="wp-title-en"> / {spatial.titleEn}</span>
            </h1>
            <div className="wp-meta">
              <span className="wp-chip">{spatial.year}</span>
              <span className="wp-chip">{spatial.credit}</span>
              <span className="wp-chip">{flat.length} 张效果图</span>
            </div>
            <p className="wp-intro">{spatial.intro}</p>
          </div>
        </section>

        <div className="wp-container wp-gallery">
          {spatial.groups.map((g, gi) => (
            <Reveal key={g.label} className="wp-group">
              <div className="wp-group-head">
                <h2 className="wp-group-label">{g.label}</h2>
                <span className="wp-group-count">{g.images.length}</span>
              </div>
              <div className="wp-grid">
                {g.images.map((img, ii) => (
                  <button
                    className="wp-tile"
                    key={img.src}
                    type="button"
                    onClick={() => setActive(starts[gi] + ii)}
                    aria-label={`放大查看：${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </main>

      <footer className="wp-footer">
        <div className="wp-container wp-footer-inner">
          <span className="wp-footer-note">{footer.line}</span>
          <a className="wp-back" href="/" onClick={back}>← BACK TO PORTFOLIO</a>
        </div>
      </footer>

      {active !== null && (
        <div className="wp-lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="wp-lb-close" type="button" onClick={close} aria-label="关闭">✕</button>
          <button
            className="wp-lb-nav wp-lb-prev"
            type="button"
            aria-label="上一张"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
          >
            ‹
          </button>
          <img
            className="wp-lb-img"
            src={flat[active].src}
            alt={flat[active].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="wp-lb-nav wp-lb-next"
            type="button"
            aria-label="下一张"
            onClick={(e) => { e.stopPropagation(); step(1) }}
          >
            ›
          </button>
          <span className="wp-lb-count" onClick={(e) => e.stopPropagation()}>
            {active + 1} / {flat.length} · {flat[active].group}
          </span>
        </div>
      )}
    </div>
  )
}