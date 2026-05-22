import type { CV } from '@/types'

function renderBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="inlineCode">{part.slice(1, -1)}</code>
    return part
  })
}

export default function Experience({ experience }: { experience: CV['experience'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-experience">
        <span className="chapterNum">Chapter 02</span>
        <h1 className="chapterTitle">Where I&apos;ve <em>worked.</em></h1>
        <p className="chapterDeck">Four years at one company, three levels deep, and a long list of production incidents that didn&apos;t page anyone.</p>
      </section>

      {experience.map(entry => (
        <div key={entry.company}>
          <h2 className="h2">{entry.company}</h2>
          {entry.roles.map(role => (
            <div key={role.title} className="expEntry">
              <div className="expHeader">
                <span className="expRole">{role.title}</span>
                <span className="expDates">{role.startDate} — {role.endDate}</span>
              </div>
              <span className="expCompany">◆&nbsp;&nbsp;{entry.company}</span>
              <ul className="expBullets">
                {role.bullets.map((b, i) => (
                  <li key={i}>{renderBullet(b)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <div className="chapterEnd">⁂</div>
    </>
  )
}
