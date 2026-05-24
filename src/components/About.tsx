import type { CV } from '@/types'

function renderLine(text: string) {
  // Convert **bold** and inline `code` to JSX
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="inlineCode">{part.slice(1, -1)}</code>
    return part
  })
}

export default function About({ about }: { about: CV['about'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-about">
        <span className="chapterNum">Chapter 01</span>
        <h1 className="chapterTitle">About <em>me.</em></h1>
        <p className="chapterDeck">High-impact engineer who treats shipping as a craft and observability as a first-class citizen.</p>
      </section>

      <p className="lead">{about.lead}</p>

      {about.paragraphs.map((p, i) => (
        <p key={i} className="bodyText">{p}</p>
      ))}

      <div className="callout">
        <span className="calloutLabel">{about.callout.label}</span>
        {about.callout.lines.map((line, i) => (
          <p key={i} className="calloutText">{renderLine(line)}</p>
        ))}
      </div>

      <div className="chapterEnd">⁂</div>
    </>
  )
}
