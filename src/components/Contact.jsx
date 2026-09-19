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
          <div className="contact-card">
            <div className="contact-cta">
              <p className="section-label">{contact.label}</p>
              <h2 className="contact-title">
                {contact.headingA}
                <br />
                {renderAccent(contact.headingB, contact.headingAccent)}
              </h2>
              <p className="contact-para">{contact.paragraph}</p>
            </div>

            <div className="contact-panel">
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
            </div>
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
