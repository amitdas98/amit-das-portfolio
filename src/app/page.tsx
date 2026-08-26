import cvRaw from '@/data/cv.json'
import { getAllPostMeta } from '@/lib/posts'
import type { CV } from '@/types'
const cv = cvRaw as unknown as CV
import Sidebar from '@/components/Sidebar'
import ProgressBar from '@/components/ProgressBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  const posts = getAllPostMeta()

  return (
    <>
      <ProgressBar />
      <div className="layout">
        <Sidebar personal={cv.personal} />
        <main className="main">
          <div className="content">
            <Hero hero={cv.hero} terminal={cv.terminal} personal={cv.personal} />
            <About about={cv.about} />
            <Experience experience={cv.experience} />
            <Projects projects={cv.projects} />
            <Skills skills={cv.skills} />
            <Education education={cv.education} />
            <Blog blog={cv.blog} posts={posts} />
            <Contact personal={cv.personal} />
          </div>
        </main>
      </div>
    </>
  )
}
