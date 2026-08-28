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
            {aboutMe.bio.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="about-bio">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <div className="about-socials">
                {aboutMe.socials.map((s) => (
                  <a className="about-social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </Reveal>
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
