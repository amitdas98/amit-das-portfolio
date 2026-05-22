import type { CV } from '@/types'

export default function Education({ education }: { education: CV['education'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-education">
        <span className="chapterNum">Chapter 05</span>
        <h1 className="chapterTitle">Where I <em>studied.</em></h1>
        <p className="chapterDeck">CS fundamentals from one of India&apos;s top engineering institutions.</p>
      </section>

      {education.map(edu => (
        <div key={edu.institution} className="projectCard">
          <span className="projectLabel">{edu.label}</span>
          <h3 className="projectTitle">{edu.institution}</h3>
          <span className="projectMetric">{edu.metric}</span>
          <p className="projectDesc">{edu.description}</p>
          <div className="projectTags">
            {edu.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="chapterEnd">⁂</div>
    </>
  )
}
