import { site } from '../content/site'
import Reveal from './Reveal'
import { navigate } from '../lib/navigate'
import './AboutMe.css'

export default function AboutMe() {
  const { aboutMe } = site
  return (
    <section id="about" className="section about-me">
      <div className="container">
        <Reveal>
          <p className="section-label">{aboutMe.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{aboutMe.title}</h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-orb" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="about-orb-svg">
                <defs><path id="aboutOrb" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text className="about-orb-text">
                  <textPath href="#aboutOrb" startOffset="0">UI/UX · AI PRODUCT · SPATIAL · 3D ·</textPath>
                </text>
              </svg>
              <span className="about-orb-core">ZQW</span>
            </div>
            {aboutMe.bio.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="about-bio">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="about-right">
            <Reveal delay={80}>
              <div className="about-timeline">
                {aboutMe.timeline.map((t, i) => (
                  <div className="about-tl-item" key={i}>
                    <span className="about-tl-dot" aria-hidden="true" />
                    <span className="about-tl-period">{t.period}</span>
                    <div className="about-tl-body">
                      <h4 className="about-tl-title">{t.title}</h4>
                      <p className="about-tl-note">{t.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <a
            className="about-resume-cta"
            href="/resume"
            onClick={(e) => {
              e.preventDefault()
              navigate('/resume')
            }}
          >
            {aboutMe.resumeCta} <span>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
