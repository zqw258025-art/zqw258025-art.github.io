export function renderAccent(line, accent) {
  if (!accent || !line.includes(accent)) return line
  const idx = line.indexOf(accent)
  return (
    <>
      {line.slice(0, idx)}
      <span className="text-accent">{accent}</span>
      {line.slice(idx + accent.length)}
    </>
  )
}
