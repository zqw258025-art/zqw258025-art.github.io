import { site } from '../content/site'
import Reveal from './Reveal'
import './Strengths.css'

const icons = {
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 5.7L20 10.5l-5.1 1.9L13 18l-1.9-5.7L6 10.5l5.1-1.9L12 3z" />
      <path d="M19 16l.7 2.1L22 19l-2.3.9L19 22l-.7-2.1L16 19l2.3-.9L19 16z" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      <path d="M13.5 4l-3 16" />
    </svg>
  ),
}

export default function Strengths() {
  const { strengths } = site
  return (
    <section id="strengths" className="section strengths grain">
      <div className="container">
        <Reveal>
          <p className="section-label">{strengths.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{strengths.heading}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="section-sub">{strengths.sub}</p>
        </Reveal>

        <div className="strengths-grid">
          {strengths.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="strength-card">
                <span className="strength-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="strength-icon">{icons[item.icon] || icons.pen}</div>
                <span className="strength-en">{item.en}</span>
                <h3 className="strength-title">{item.title}</h3>
                <p className="strength-desc">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}