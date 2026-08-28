import { site } from '../content/site'
import { renderAccent } from '../lib/text'
import './Hero.css'

export default function Hero() {
  const { hero } = site
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner container">
        <p className="hero-kicker">{hero.kicker}</p>
        <h1 className="hero-title">
          <span className="hero-line">{hero.titleA}</span>
          <span className="hero-line">{renderAccent(hero.titleB, hero.titleAccent)}</span>
        </h1>
        <p className="hero-para">{hero.paragraph}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#works">
            {hero.ctaPrimary} <span>↓</span>
          </a>
          <a className="btn btn-ghost" href="#about">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
      <p className="hero-scroll">{hero.scrollHint}</p>
    </section>
  )
}
