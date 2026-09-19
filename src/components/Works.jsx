import { site } from '../content/site'
import Reveal from './Reveal'
import Media from './Media'
import { navigate } from '../lib/navigate'
import './Works.css'

export default function Works() {
  const { works } = site

  const linkProps = (item) =>
    item.internal
      ? {
          href: item.link,
          onClick: (e) => {
            e.preventDefault()
            navigate(item.link)
          },
        }
      : { href: item.link, target: '_blank', rel: 'noreferrer' }

  return (
    <section id="works" className="section works">
      <div className="container">
        <Reveal>
          <p className="section-label">{works.label}</p>
        </Reveal>
        <div className="works-head">
          <div className="works-head-main">
            <Reveal delay={80}>
              <h2 className="section-title">{works.title}</h2>
            </Reveal>
            <Reveal delay={150}>
              <span className="sticker">{works.sticker}</span>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="section-sub">{works.sub}</p>
          </Reveal>
        </div>

        <div className="works-grid">
          {works.items.map((item, i) => (
            <Reveal key={item.index} className="work-card-wrap" delay={i * 100}>
              <article className="work-card">
                <Media className="work-card-media" image={item.image} />
                <div className="work-card-body">
                  <div className="work-card-meta">
                    <span className="chip">{item.category}</span>
                    <span className="work-card-year">{item.year}</span>
                  </div>
                  <h3 className="work-card-title">
                    {item.title}
                    <span className="work-card-en"> / {item.titleEn}</span>
                  </h3>
                  {item.credit && <p className="work-card-credit">{item.credit}</p>}
                  <p className="work-card-desc">{item.description}</p>
                  <div className="work-card-actions">
                    {item.link ? (
                      <>
                        <a className="work-card-link" {...linkProps(item)}>
                          VIEW PROJECT
                        </a>
                        <a className="arrow-btn" {...linkProps(item)} aria-label={`查看 ${item.title}`}>
                          <span>↗</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="work-card-link is-pending">VIEW PROJECT</span>
                        <span className="arrow-btn is-pending" aria-hidden="true">
                          <span>↗</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}