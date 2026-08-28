import { site } from '../content/site'
import Reveal from './Reveal'
import { renderAccent } from '../lib/text'
import './Contact.css'

export default function Contact() {
  const { contact, footer } = site
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="section-label">{contact.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="contact-title">
            {contact.headingA}
            <br />
            {renderAccent(contact.headingB, contact.headingAccent)}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="contact-para">{contact.paragraph}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="contact-methods">
            {contact.methods.map((m) => {
              const inner = (
                <>
                  <span className="contact-m-label">{m.label}</span>
                  <span className="contact-m-value">
                    {m.value}
                    {m.href && <span className="contact-m-arrow">↗</span>}
                  </span>
                </>
              )
              return m.href ? (
                <a
                  className="contact-method"
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-method" key={m.label}>{inner}</div>
              )
            })}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="contact-socials">
            {contact.socials.map((s) => (
              <a className="contact-social" key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="contact-footer">
        <div className="container contact-footer-inner">
          <span className="contact-footer-line">{footer.line}</span>
          <a className="contact-top" href="#home">
            {footer.backToTop} <span>↑</span>
          </a>
        </div>
      </footer>
    </section>
  )
}
