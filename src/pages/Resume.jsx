import { site } from '../content/site'
import Reveal from '../components/Reveal'
import { navigate } from '../lib/navigate'
import './Resume.css'

// Resume 页面结构骨架（真实内容后续由 site.resume 填充，当前仅占位）
const sections = [
  { id: 'profile', label: '01 / PROFILE', title: 'Profile' },
  { id: 'experience', label: '02 / EXPERIENCE', title: 'Experience' },
  { id: 'education', label: '03 / EDUCATION', title: 'Education' },
  { id: 'capabilities', label: '04 / CAPABILITIES', title: 'Capabilities' },
  { id: 'tools', label: '05 / TOOLS', title: 'Tools' },
  { id: 'projects', label: '06 / SELECTED PROJECTS', title: 'Selected Projects' },
  { id: 'contact', label: '07 / CONTACT', title: 'Contact' },
]

export default function Resume() {
  const { name, nameZh, role, footer } = site

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
          </div>
        </section>

        <div className="resume-container resume-sections">
          {sections.map((s) => (
            <Reveal key={s.id} className="resume-section" delay={0}>
              <div className="resume-section-head">
                <span className="resume-section-label">{s.label}</span>
                <h2 className="resume-section-title">{s.title}</h2>
              </div>
              <div className="resume-placeholder">[CONTENT PLACEHOLDER]</div>
            </Reveal>
          ))}
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
