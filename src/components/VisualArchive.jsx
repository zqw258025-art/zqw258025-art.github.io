import { site } from '../content/site'
import Reveal from './Reveal'
import Media from './Media'
import './VisualArchive.css'

export default function VisualArchive() {
  const { archive } = site
  return (
    <section id="archive" className="section archive">
      <div className="container">
        <Reveal>
          <p className="section-label">{archive.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">{archive.title}</h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="archive-cats">
            {archive.categories.map((c) => (
              <span className="archive-cat" key={c}>{c}</span>
            ))}
          </div>
        </Reveal>

        <div className="archive-grid">
          {archive.items.map((item, i) => (
            <Reveal key={i} className="archive-item-wrap" delay={(i % 3) * 60}>
              <Media className="archive-item" image={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
