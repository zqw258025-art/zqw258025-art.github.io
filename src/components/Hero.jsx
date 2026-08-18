import { site } from '../content/site'
import ParticleField from './ParticleField'
import './Hero.css'

function renderTitleLine(line, accent) {
  if (!accent || !line.includes(accent)) return line
  const idx = line.indexOf(accent)
  return (
    <>
      {line.slice(0, idx)}
      <span className="gradient-text">{accent}</span>
      {line.slice(idx + accent.length)}
    </>
  )
}

export default function Hero() {
  const { hero } = site
  return (
    <section id="home" className="hero grain">
      <ParticleField />
      {hero.video.enabled && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.video.poster || undefined}
        >
          <source src={hero.video.src} type="video/mp4" />
        </video>
      )}
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <span className="hero-side" aria-hidden="true">
        SCROLL TO EXPLORE — 向下探索
      </span>

      <div className="hero-inner container">
        <p className="hero-kicker load d1">{hero.kicker}</p>
        <h1 className="hero-title">
          <span className="hero-line load d2">{hero.titleA}</span>
          <span className="hero-line hero-line-accent load d3">
            {renderTitleLine(hero.titleB, hero.titleAccent)}
          </span>
        </h1>
        <p className="hero-para load d4">{hero.paragraph}</p>
        <div className="hero-actions load d5">
          <a className="btn btn-primary" href="#works">
            {hero.ctaPrimary}
            <span className="btn-arrow">↓</span>
          </a>
          <a className="btn btn-ghost" href="#contact">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-text">SCROLL</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}