import { site } from '../content/site'
import { renderAccent } from '../lib/text'
import './Hero.css'

const BLOB =
  'M 266 30 C 352 18 432 92 466 178 C 500 264 478 356 402 420 C 326 484 192 502 116 434 C 40 366 28 244 84 152 C 140 60 196 41 266 30 Z'

export default function Hero() {
  const { hero } = site
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title">
            <span className="hero-line">{hero.titleA}</span>
          </h1>
          <p className="hero-tagline">{renderAccent(hero.titleB, hero.titleAccent)}</p>
          <p className="hero-para">{hero.paragraph}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#works">{hero.ctaPrimary} <span>↓</span></a>
            <a className="btn btn-ghost" href="#about">{hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg className="hero-blob" viewBox="0 0 520 520" preserveAspectRatio="none">
            <path d={BLOB} fill="var(--accent-warm)" />
          </svg>
          <div className="hero-card">
            <div className="hero-card-head">
              <span className="hero-card-top">PORTFOLIO · 2026</span>
              <span className="hero-card-dot" />
            </div>
            <span className="hero-card-mono">ZQW</span>
            <span className="hero-card-role">UI/UX · AI · SPATIAL</span>
          </div>
          <div className="hero-bubble">DESIGN IS MY<strong>SUPERPOWER</strong></div>
          <div className="hero-badge">
            <svg viewBox="0 0 120 120" className="hero-badge-svg">
              <defs>
                <path id="heroB" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text className="hero-badge-text">
                <textPath href="#heroB" startOffset="0">
                  {hero.badgeText}
                </textPath>
              </text>
            </svg>
            <span className="hero-badge-core">✳ ZQW</span>
          </div>
          <span className="hero-doodle">↗</span>
        </div>
      </div>

      <p className="hero-scroll">{hero.scrollHint}</p>
    </section>
  )
}
