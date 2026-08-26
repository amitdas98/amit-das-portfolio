import { ImageResponse } from 'next/og'
import { getAllPostMeta, getPost } from '@/lib/posts'

export const alt = 'Blog post on amit-das.com'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllPostMeta().map(post => ({ slug: post.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  const title = post?.title ?? 'Writing'
  const deck = post?.deck ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f4efe6',
          padding: '64px 80px',
          borderTop: '14px solid #00838a',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 4,
              color: '#005a60',
              background: '#d8ebec',
              padding: '8px 18px',
              borderRadius: 4,
            }}
          >
            WRITING
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#6b6658' }}>
            {post?.readTime ?? ''}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 55 ? 60 : 72,
              fontWeight: 700,
              color: '#1a1814',
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          {deck && (
            <div style={{ display: 'flex', fontSize: 30, color: '#3d3a32', marginTop: 22 }}>
              {deck.length > 110 ? `${deck.slice(0, 110)}…` : deck}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 5, color: '#00838a' }}>
          AMIT-DAS.COM
        </div>
      </div>
    ),
    size,
  )
}
