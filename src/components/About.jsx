import { site } from '../content/site'
import Reveal from './Reveal'
import './About.css'

export default function About() {
  const { about, nameEn } = site
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="section-label">{about.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{about.heading}</h2>
        </Reveal>

        <div className="about-grid">
          {/* 头像 / 人物图 */}
          <Reveal className="about-left" delay={60}>
            <div className="about-portrait">
              {about.avatar.src ? (
                <img src={about.avatar.src} alt={about.avatar.alt} />
              ) : (
                <>
                  <span className="portrait-ring" aria-hidden="true" />
                  <span className="portrait-mono">{site.name.charAt(0)}.</span>
                </>
              )}
              <span className="portrait-chip">{nameEn}</span>
            </div>
            <div className="about-socials">
              {about.socials.map((s) => (
                <a className="about-social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                  <span className="about-social-arrow">↗</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* 介绍 + 联系方式 */}
          <div className="about-right">
            <Reveal delay={40}>
              <div className="about-bio">
                {about.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-info">
                {about.info.map((item) => {
                  const inner = (
                    <>
                      <span className="about-info-label">{item.label}</span>
                      <span className="about-info-value">
                        {item.value}
                        {item.href && <span className="about-info-arrow">↗</span>}
                      </span>
                    </>
                  )
                  return item.href ? (
                    <a
                      className="about-info-item"
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="about-info-item" key={item.label}>
                      {inner}
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>

        {/* 项目数据 */}
        <Reveal className="about-stats" delay={40}>
          {about.stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        {/* 经历时间线 */}
        <Reveal className="about-timeline-block" delay={40}>
          <p className="about-timeline-heading">EXPERIENCE — 经历</p>
          <div className="about-timeline">
            {about.timeline.map((item, i) => (
              <div className="about-tl-item" key={i}>
                <span className="about-tl-dot" aria-hidden="true" />
                <span className="about-tl-period">{item.period}</span>
                <div className="about-tl-body">
                  <h4 className="about-tl-title">{item.title}</h4>
                  <p className="about-tl-note">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}