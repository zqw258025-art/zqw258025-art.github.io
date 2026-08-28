import { site } from '../content/site'
import Reveal from './Reveal'
import Media from './Media'
import './Works.css'

export default function Works() {
  const { works } = site
  return (
    <section id="works" className="section works">
      <div className="container">
        <Reveal>
          <p className="section-label">{works.label}</p>
        </Reveal>
        <div className="works-head">
          <Reveal delay={80}>
            <h2 className="section-title">{works.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-sub">{works.sub}</p>
          </Reveal>
        </div>

        <div className="works-list">
          {works.items.map((item, i) => (
            <Reveal key={item.index} className="work-row-wrap" delay={i % 2 ? 80 : 0}>
              <article className={`work-row ${i % 2 ? 'work-flip' : ''}`}>
                <Media className="work-media" image={item.image} />

                <div className="work-body">
                  <div className="work-meta">
                    <span className="work-index">{item.index}</span>
                    <span className="work-cat">{item.category}</span>
                    <span className="work-year">{item.year}</span>
                  </div>
                  <h3 className="work-title">
                    {item.title}
                    <span className="work-title-en"> / {item.titleEn}</span>
                  </h3>
                  <p className="work-desc">{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a className="work-link" href={item.link}>
                    VIEW PROJECT <span>↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
