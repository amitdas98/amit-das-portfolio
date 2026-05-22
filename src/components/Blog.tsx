'use client'
import type { CV } from '@/types'

export default function Blog({ blog }: { blog: CV['blog'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-blog">
        <span className="chapterNum">Chapter 06</span>
        <h1 className="chapterTitle">Writing &amp; <em>thinking.</em></h1>
        <p className="chapterDeck">Engineering essays on distributed systems, Gen AI, and the hard lessons from production at scale.</p>
      </section>

      <div className="callout">
        <span className="calloutLabel">Coming soon</span>
        <p className="calloutText">
          I&apos;m working on a series of deep-dives on the systems I&apos;ve built — the decisions, the trade-offs, and what I&apos;d do differently with hindsight. First posts dropping soon.{' '}
          <a href="mailto:mailamitad98@gmail.com">Drop me a line</a> and I&apos;ll let you know when they&apos;re live.
        </p>
      </div>

      <div className="blogGrid">
        {blog.map(post => (
          <a
            key={post.title}
            className="blogCard"
            href={post.href}
            onClick={post.href === '#' ? e => e.preventDefault() : undefined}
            aria-label={post.badge === 'soon' ? 'Coming soon' : post.title}
          >
            <div className="blogCardMeta">
              <span className={`blogBadge ${post.badge === 'soon' ? 'blogBadgeSoon' : 'blogBadgeLive'}`}>
                {post.badge === 'soon' ? 'Coming soon' : 'Live'}
              </span>
              <span className="blogReadTime">{post.readTime}</span>
            </div>
            <h3 className="blogTitle">{post.title}</h3>
            <p className="blogExcerpt">{post.excerpt}</p>
            <span className="blogArrow">→</span>
          </a>
        ))}
      </div>

      <div className="chapterEnd">⁂</div>
    </>
  )
}
