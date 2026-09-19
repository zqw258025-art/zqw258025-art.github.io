import { site } from '../content/site'
import Reveal from '../components/Reveal'
import { navigate } from '../lib/navigate'
import './Resume.css'

function SectionHead({ label, title }) {
  return (
    <div className="resume-section-head">
      <span className="resume-section-label">{label}</span>
      <h2 className="resume-section-title">{title}</h2>
    </div>
  )
}

function BasicList({ items, wide = false }) {
  return (
    <ul className={`resume-basics${wide ? ' resume-basics-wide' : ''}`}>
      {items.map((item) => (
        <li className="resume-basic" key={item.label}>
          <span className="resume-basic-label">{item.label}</span>
          {item.href ? (
            <a
              className="resume-basic-value"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              {item.value}
            </a>
          ) : (
            <span className="resume-basic-value">{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Resume() {
  const { name, nameZh, role, footer, resume } = site
  const { profile, experience, education, capabilities, tools, projects, contact } = resume

  const back = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="resume">
      <header className="resume-nav">
        <div className="resume-container resume-nav-inner">
          <a className="resume-brand" href="/" onClick={back}>
            <span className="resume-brand-name">{name}<span className="resume-brand-dot">.</span></span>
            <span className="resume-brand-zh">{nameZh}</span>
          </a>
          <a className="resume-back" href="/" onClick={back}>
            ← BACK TO PORTFOLIO
          </a>
        </div>
      </header>

      <main>
        <section className="resume-hero">
          <div className="resume-container">
            <p className="resume-label">RESUME</p>
            <h1 className="resume-name">{name}</h1>
            <p className="resume-role">{role}</p>
            <p className="resume-objective">{profile.objective}</p>
          </div>
        </section>

        <div className="resume-container resume-sections">
          <Reveal className="resume-section">
            <SectionHead label="01 / PROFILE" title="Profile" />
            <div className="resume-profile">
              <div>
                <h3 className="resume-block-title">{profile.title}</h3>
                {profile.summary.map((text, i) => (
                  <p className="resume-text" key={i}>{text}</p>
                ))}
              </div>
              <BasicList items={profile.basics} />
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="02 / EXPERIENCE" title="Experience" />
            <div className="resume-entries">
              {experience.map((job) => (
                <article className="resume-entry" key={job.company}>
                  <span className="resume-entry-period">{job.period}</span>
                  <div>
                    <h3 className="resume-entry-title">{job.company}</h3>
                    <p className="resume-entry-role">{job.role}</p>
                    <ul className="resume-list">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="03 / EDUCATION" title="Education" />
            <div className="resume-entries">
              <article className="resume-entry">
                <span className="resume-entry-period">{education.period}</span>
                <div>
                  <h3 className="resume-entry-title">{education.school}</h3>
                  <p className="resume-entry-role">{education.major}</p>
                  <p className="resume-text">{education.note}</p>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="04 / CAPABILITIES" title="Capabilities" />
            <div className="resume-caps">
              {capabilities.map((item) => (
                <div className="resume-cap" key={item.en}>
                  <span className="resume-cap-en">{item.en}</span>
                  <p className="resume-cap-zh">{item.zh}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="05 / TOOLS" title="Tools" />
            <div className="resume-tools">
              {tools.map((tool) => (
                <div className="resume-tool" key={tool.name}>
                  <span className="resume-tool-name">{tool.name}</span>
                  <span className="resume-tool-note">{tool.note}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="06 / SELECTED PROJECTS" title="Selected Projects" />
            <div className="resume-entries">
              {projects.map((project) => (
                <article className="resume-entry" key={project.title}>
                  <span className="resume-entry-period">{project.meta}</span>
                  <div>
                    <h3 className="resume-entry-title">{project.title}</h3>
                    <ul className="resume-list">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {project.link && (
                      <a className="resume-project-link" href={project.link} target="_blank" rel="noreferrer">
                        {project.link.replace(/^https?:\/\//, '')} <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="resume-section">
            <SectionHead label="07 / CONTACT" title="Contact" />
            <p className="resume-text">{contact.note}</p>
            <BasicList items={contact.methods} wide />
          </Reveal>
        </div>
      </main>

      <footer className="resume-footer">
        <div className="resume-container resume-footer-inner">
          <span className="resume-footer-note">{footer.line}</span>
          <a className="resume-back" href="/" onClick={back}>
            ← BACK TO PORTFOLIO
          </a>
        </div>
      </footer>
    </div>
  )
}
