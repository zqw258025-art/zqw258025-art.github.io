import { site } from '../content/site'
import './Nav.css'

export default function Nav() {
  const { nav, name, nameZh } = site
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#home">
          <span className="nav-brand-name">{name}<span className="nav-brand-dot">.</span></span>
          <span className="nav-brand-zh">{nameZh}</span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {nav.links.map((link, i) => (
            <a key={link.id} className="nav-link" href={`#${link.id}`}>
              <span className="nav-link-index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          {nav.cta} <span>↗</span>
        </a>
      </div>
    </header>
  )
}
