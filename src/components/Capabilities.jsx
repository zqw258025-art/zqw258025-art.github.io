import { site } from '../content/site'
import Reveal from './Reveal'
import './Capabilities.css'

const ICONS = ['◻', '✦', '●', '◇']

export default function Capabilities() {
  const { capabilities } = site
  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <Reveal>
          <p className="section-label">{capabilities.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{capabilities.title}</h2>
        </Reveal>

        <div className="caps-grid">
          {capabilities.items.map((item, i) => (
            <Reveal key={item.index} className="cap-wrap" delay={i * 80}>
              <div className="cap-card">
                <span className={`cap-icon cap-icon-${i}`} aria-hidden="true">{ICONS[i % ICONS.length]}</span>
                <span className="cap-num">{item.index}</span>
                <h3 className="cap-en">{item.en}</h3>
                <p className="cap-zh">{item.zh}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}