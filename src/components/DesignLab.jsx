import { site } from '../content/site'
import Reveal from './Reveal'
import './DesignLab.css'

export default function DesignLab() {
  const { lab } = site
  return (
    <section id="lab" className="section lab">
      <div className="container">
        <Reveal>
          <p className="section-label">{lab.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{lab.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="section-sub">{lab.sub}</p>
        </Reveal>

        <div className="lab-list">
          {lab.items.map((item) => {
            const inner = (
              <>
                <div className="lab-item-top">
                  <span className="lab-tag">PROCESS / {item.index}</span>
                  {item.link ? <span className="lab-arrow">↗</span> : null}
                </div>
                <h3 className="lab-title">{item.title}</h3>
                <p className="lab-zh">{item.zh}</p>
              </>
            )
            return (
              <Reveal key={item.index} className="lab-item-wrap" delay={0}>
                {item.link ? (
                  <a className="lab-item" href={item.link} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div className="lab-item">{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
