import './Media.css'

export default function Media({ image, className = '' }) {
  if (image.src) {
    return <img className={className} src={image.src} alt={image.alt || ''} loading="lazy" />
  }
  return (
    <div
      className={`media-ph ${className}`}
      data-ratio={image.ratio || ''}
      data-fixed={image.h ? 'h' : ''}
      style={image.h ? { minHeight: image.h } : undefined}
    >
      <span className="media-ph-label">{image.placeholder}</span>
      <span className="media-ph-grid" aria-hidden="true" />
    </div>
  )
}
