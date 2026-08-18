import { site } from '../content/site'
import './Marquee.css'

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-text">{item}</span>
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}