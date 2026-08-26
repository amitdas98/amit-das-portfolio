'use client'
import Link from 'next/link'
import type { CV } from '@/types'
import type { PostMeta } from '@/lib/posts'

export default function Blog({ blog, posts }: { blog: CV['blog']; posts: PostMeta[] }) {
  const soon = blog.filter(post => post.badge === 'soon')

  return (
    <>
      <section className="chapterHead" id="sec-blog">
        <span className="chapterNum">Chapter 06</span>
        <h1 className="chapterTitle">Writing &amp; <em>thinking.</em></h1>
        <p className="chapterDeck">Engineering essays on distributed systems, Gen AI, and the hard lessons from production at scale.</p>
      </section>

      {posts.length === 0 && (
        <div className="callout">
          <span className="calloutLabel">Coming soon</span>
          <p className="calloutText">
            I&apos;m working on a series of deep-dives on the systems I&apos;ve built — the decisions, the trade-offs, and what I&apos;d do differently with hindsight. First posts dropping soon.{' '}
            <a href="mailto:mailamitad98@gmail.com">Drop me a line</a> and I&apos;ll let you know when they&apos;re live.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="blogGrid">
          {posts.map(post => (
            <Link key={post.slug} className="blogCard" href={`/blog/${post.slug}/`}>
              <div className="blogCardMeta">
                <span className="blogBadge blogBadgeLive">Live</span>
                <span className="blogReadTime">{post.readTime}</span>
              </div>
              <h3 className="blogTitle">{post.title}</h3>
              <p className="blogExcerpt">{post.excerpt}</p>
              <span className="blogArrow">→</span>
            </Link>
          ))}
        </div>
      )}

      {soon.length > 0 && (
        <>
          <h2 className="blogQueueHead">In the queue</h2>
          <div className="blogGrid">
            {soon.map(post => (
              <div key={post.title} className="blogCard blogCardSoon" aria-label="Coming soon">
                <div className="blogCardMeta">
                  <span className="blogBadge blogBadgeSoon">Coming soon</span>
                  <span className="blogReadTime">{post.readTime}</span>
                </div>
                <h3 className="blogTitle">{post.title}</h3>
                <p className="blogExcerpt">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="chapterEnd">⁂</div>
    </>
  )
}
