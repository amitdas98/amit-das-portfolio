import type { CV } from '@/types'

export default function Skills({ skills }: { skills: CV['skills'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-skills">
        <span className="chapterNum">Chapter 04</span>
        <h1 className="chapterTitle">Technical <em>skills.</em></h1>
        <p className="chapterDeck">The tools I reach for first — and the ones I&apos;ll pick up when the job demands it.</p>
      </section>

      {skills.map(cat => (
        <div key={cat.category} className="skillCategory">
          <span className="skillCatLabel">{cat.category}</span>
          <div className="skillTags">
            {cat.items.map(item => (
              <span
                key={item.name}
                className={`skillTag${item.primary ? ' skillTagPrimary' : ''}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="chapterEnd">⁂</div>
    </>
  )
}
