'use client'
import { useEffect, useState } from 'react'
import type { CV } from '@/types'

const NAV = [
  { id: 'sec-about',      label: 'About'      },
  { id: 'sec-experience', label: 'Experience' },
  { id: 'sec-projects',   label: 'Projects'   },
  { id: 'sec-skills',     label: 'Skills'     },
  { id: 'sec-education',  label: 'Education'  },
  { id: 'sec-blog',       label: 'Blog'       },
  { id: 'sec-contact',    label: 'Contact'    },
]

export default function Sidebar({ personal }: { personal: CV['personal'] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const els = NAV.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { rootMargin: '-10% 0px -78% 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="brandMark">◆&nbsp;&nbsp;Portfolio · 2026</div>
      <div className="brandName">{personal.name}</div>
      <div className="brandRole">{personal.role}</div>
      <div className="brandLocation">◎&nbsp;&nbsp;{personal.location}</div>

      {/* CV Download */}
      <a className="cvBtn" href={personal.cvFile} download={personal.cvFileName}>
        ↓ Download CV
      </a>

      {/* Navigation */}
      <nav>
        <div className="navLabel">Navigation</div>
        <ol className="navList">
          {NAV.map(item => (
            <li key={item.id} className="navItem">
              <a
                href={`#${item.id}`}
                className={`navLink${activeId === item.id ? ' active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Social links */}
      <div className="socialLinks">
        <a className="socialLink" href={personal.github} target="_blank" rel="noopener">
          <span className="socialIcon">⌥</span>{personal.githubHandle}
        </a>
        <a className="socialLink" href={personal.linkedin} target="_blank" rel="noopener">
          <span className="socialIcon">◈</span>{personal.linkedinHandle}
        </a>
        <a className="socialLink" href={`mailto:${personal.email}`}>
          <span className="socialIcon">✉</span>{personal.email}
        </a>
      </div>
    </aside>
  )
}
