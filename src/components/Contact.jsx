import { site } from '../content/site'
import Reveal from './Reveal'
import './Contact.css'

export default function Contact() {
  const { contact, email, footer } = site
  const accentIdx = contact.headingB.indexOf(contact.headingAccent)
  return (
    <section id="contact" className="contact grain">
      <div className="contact-aurora" aria-hidden="true">
        <span className="contact-blob contact-blob-1" />
        <span className="contact-blob contact-blob-2" />
      </div>

      <div className="container contact-inner">
        <Reveal>
          <p className="section-label">{contact.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="contact-title">
            {contact.headingA}
            <br />
            <span className="gradient-text">
              {contact.headingB.slice(0, accentIdx)}
              {contact.headingAccent}
              {contact.headingB.slice(accentIdx + contact.headingAccent.length)}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="contact-para">{contact.paragraph}</p>
        </Reveal>
        <Reveal delay={240}>
          <a className="contact-mail" href={`mailto:${email}`}>
            {email}
            <span className="contact-mail-arrow">↗</span>
          </a>
        </Reveal>
        <Reveal delay={320}>
          <div className="contact-socials">
            {contact.socials.map((s) => (
              <a
                className="contact-social"
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="contact-footer container">
        <span className="contact-footer-line">{footer.line}</span>
        <a className="contact-top" href="#home">
          {footer.backToTop}
          <span>↑</span>
        </a>
      </footer>
    </section>
  )
}