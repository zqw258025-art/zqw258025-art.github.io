import { site } from '../content/site'
import Reveal from './Reveal'
import './Projects.css'

/* 作品封面：渐变 + 几何图案（无真实图片时的占位视觉，可按项目替换） */
function Pattern({ type }) {
  const stroke = 'rgba(255,255,255,0.16)'
  if (type === 'constellation') {
    return (
      <svg className="project-pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {[
          [60, 70], [150, 40], [240, 90], [320, 60], [90, 180], [200, 160],
          [310, 200], [60, 260], [180, 250], [330, 250], [250, 220], [120, 120],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.4 : 1.8} fill="rgba(255,255,255,0.5)" />
        ))}
        <line x1="60" y1="70" x2="150" y2="40" stroke={stroke} strokeWidth="0.8" />
        <line x1="150" y1="40" x2="240" y2="90" stroke={stroke} strokeWidth="0.8" />
        <line x1="240" y1="90" x2="320" y2="60" stroke={stroke} strokeWidth="0.8" />
        <line x1="90" y1="180" x2="200" y2="160" stroke={stroke} strokeWidth="0.8" />
        <line x1="200" y1="160" x2="310" y2="200" stroke={stroke} strokeWidth="0.8" />
        <line x1="60" y1="260" x2="180" y2="250" stroke={stroke} strokeWidth="0.8" />
        <line x1="180" y1="250" x2="330" y2="250" stroke={stroke} strokeWidth="0.8" />
        <line x1="150" y1="40" x2="120" y2="120" stroke={stroke} strokeWidth="0.8" />
        <line x1="120" y1="120" x2="90" y2="180" stroke={stroke} strokeWidth="0.8" />
      </svg>
    )
  }
  if (type === 'waves') {
    return (
      <svg className="project-pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {[1, 2, 3, 4, 5].map((n) => (
          <path
            key={n}
            d={`M0 ${60 * n} C 70 ${60 * n - 34}, 130 ${60 * n + 34}, 200 ${60 * n} S 330 ${60 * n - 34}, 400 ${60 * n}`}
            fill="none"
            stroke={stroke}
            strokeWidth="1.1"
          />
        ))}
      </svg>
    )
  }
  if (type === 'rings') {
    return (
      <svg className="project-pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {[1, 2, 3, 4, 5].map((n) => (
          <circle
            key={n}
            cx="200"
            cy="150"
            r={30 + n * 34}
            fill="none"
            stroke={stroke}
            strokeWidth="1.1"
          />
        ))}
      </svg>
    )
  }
  /* grid */
  return (
    <svg className="project-pattern" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke={stroke} strokeWidth="0.7" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 43} x2="400" y2={i * 43} stroke={stroke} strokeWidth="0.7" />
      ))}
    </svg>
  )
}

function ProjectArt({ art }) {
  return (
    <div
      className="project-art"
      style={{
        background: `radial-gradient(130% 120% at 50% 0%, ${art.to} 0%, ${art.from} 42%, #0a0a11 125%)`,
      }}
    >
      <Pattern type={art.pattern} />
      <div className="project-art-shine" aria-hidden="true" />
      <div className="project-art-grid" aria-hidden="true" />
    </div>
  )
}

export default function Projects() {
  const { projects } = site
  return (
    <section id="works" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-label">{projects.label}</p>
        </Reveal>
        <div className="projects-head">
          <Reveal delay={80}>
            <h2 className="section-title">{projects.heading}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-sub">{projects.sub}</p>
          </Reveal>
        </div>

        <div className="projects-grid">
          {projects.items.map((item, i) => (
            <Reveal key={item.index} className="project-card-wrap" delay={(i % 2) * 90}>
              <article className="project-card">
                <a className="project-link" href={item.link}>
                  <div className="project-art-wrap">
                    <ProjectArt art={item.art} />
                    <div className="project-art-top">
                      <span className="project-index">{item.index}</span>
                      <span className="project-cat">{item.category}</span>
                    </div>
                    <span className="project-view">
                      VIEW PROJECT <span>↗</span>
                    </span>
                  </div>
                  <div className="project-meta">
                    <div className="project-title-row">
                      <h3 className="project-title">{item.title}</h3>
                      <span className="project-year">{item.year}</span>
                    </div>
                    <p className="project-desc">{item.description}</p>
                    <div className="project-tags">
                      {item.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}