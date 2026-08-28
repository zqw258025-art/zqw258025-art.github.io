import { site } from '../content/site'
import Reveal from './Reveal'
import './Manifesto.css'

export default function Manifesto() {
  const { manifesto } = site
  return (
    <section id="manifesto" className="section manifesto">
      <div className="container">
        <Reveal>
          <p className="section-label">{manifesto.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title manifesto-title">{manifesto.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="manifesto-sub">{manifesto.sub}</p>
        </Reveal>

        <div className="manifesto-steps">
          {manifesto.steps.map((s, i) => (
            <Reveal key={s.en} className="manifesto-step" delay={i * 90}>
              <span className="manifesto-step-num">0{i + 1}</span>
              <h3 className="manifesto-step-en">{s.en}</h3>
              <p className="manifesto-step-zh">{s.zh}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
