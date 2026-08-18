import { useEffect, useState } from 'react'
import { site } from '../content/site'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#home">
          <span className="nav-brand-mark">L.</span>
          <span className="nav-brand-text">
            <span className="nav-brand-name">{site.name}</span>
            <span className="nav-brand-en">{site.nameEn} — DESIGN</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {site.nav.links.map((link) => (
            <a key={link.id} className="nav-link" href={`#${link.id}`}>
              <span className="nav-link-index">
                {String(site.nav.links.indexOf(link) + 1).padStart(2, '0')}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          {site.nav.cta}
          <span className="nav-cta-arrow">↗</span>
        </a>
      </div>
    </header>
  )
}