import { site } from '../content/site'
import { navigate } from '../lib/navigate'
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
          {nav.links.map((link, i) => {
            const isRoute = link.id === 'resume'
            return (
              <a
                key={link.id}
                className="nav-link"
                href={isRoute ? '/resume' : `#${link.id}`}
                onClick={
                  isRoute
                    ? (e) => {
                        e.preventDefault()
                        navigate('/resume')
                      }
                    : undefined
                }
              >
                <span className="nav-link-index">0{i + 1}</span>
                {link.label}
              </a>
            )
          })}
        </nav>

        <a className="nav-cta" href="#contact">
          {nav.cta} <span>↗</span>
        </a>
      </div>
    </header>
  )
}
