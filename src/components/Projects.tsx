import type { CV } from '@/types'

export default function Projects({ projects }: { projects: CV['projects'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-projects">
        <span className="chapterNum">Chapter 03</span>
        <h1 className="chapterTitle">Featured <em>work.</em></h1>
        <p className="chapterDeck">The systems I&apos;m most proud of — each one a lesson in scale, cost, or reliability.</p>
      </section>

      <div className="projectsGrid">
        {projects.map(p => (
          <div key={p.title} className="projectCard">
            <span className="projectLabel">{p.label}</span>
            <h3 className="projectTitle">{p.title}</h3>
            <span className="projectMetric">{p.metric}</span>
            <p className="projectDesc">{p.description}</p>
            <div className="projectTags">
              {p.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="chapterEnd">⁂</div>
    </>
  )
}
