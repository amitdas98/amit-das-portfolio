import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostMeta, getPost } from '@/lib/posts'
import Mermaid from '@/components/Mermaid'

export function generateStaticParams() {
  return getAllPostMeta().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} — Amit Das`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date || undefined,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="postShell">
      <nav className="postBar">
        <Link className="postBack" href="/#sec-blog">← Writing</Link>
        <span className="postBarName">Amit Das</span>
      </nav>

      <article className="post">
        <header className="postHead">
          <div className="postMeta">
            <span className="blogBadge blogBadgeLive">Live</span>
            {post.dateLabel && <span className="postMetaItem">{post.dateLabel}</span>}
            <span className="postMetaItem">{post.readTime}</span>
          </div>
          <h1 className="postTitle">{post.title}</h1>
          {post.deck && <p className="postDeck">{post.deck}</p>}
          {post.tags.length > 0 && (
            <div className="postTags">
              {post.tags.map(tag => (
                <span key={tag} className="postTag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="chapterEnd">⁂</div>

        <footer className="postFoot">
          <Link className="postBack" href="/#sec-blog">← Back to writing</Link>
          <a className="postBack" href="mailto:mailamitad98@gmail.com">Reply by email →</a>
        </footer>
      </article>

      {post.hasDiagram && <Mermaid />}
    </div>
  )
}
