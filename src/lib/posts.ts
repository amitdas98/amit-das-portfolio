import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  dateLabel: string
}

export interface Post extends PostMeta {
  deck: string | null
  html: string
  hasDiagram: boolean
  raw: string
}

const md = new MarkdownIt({ html: true, linkify: true, typographer: false })

md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx]
  const lang = token.info.trim().split(/\s+/)[0]
  const body = md.utils.escapeHtml(token.content)
  if (lang === 'mermaid') return `<pre class="mermaid">${body}</pre>\n`
  const label = lang ? `<span class="codeLang">${md.utils.escapeHtml(lang)}</span>` : ''
  return `<div class="codeBlock">${label}<pre><code>${body}</code></pre></div>\n`
}

function readTimeOf(body: string): string {
  const words = body.split(/\s+/).filter(Boolean).length
  return `~ ${Math.max(1, Math.ceil(words / 200))} min read`
}

function dateLabelOf(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

// README.md and any name that starts with '_' are notes, not posts.
function listFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter(name => name.endsWith('.md'))
    .filter(name => name !== 'README.md' && !name.startsWith('_'))
}

function parse(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)

  const lines = content.split('\n')
  let cursor = 0
  let title = typeof data.title === 'string' ? data.title : slug

  // Drop the leading H1 so the page does not print the title twice.
  while (cursor < lines.length && lines[cursor].trim() === '') cursor += 1
  if (lines[cursor]?.startsWith('# ')) {
    if (!data.title) title = lines[cursor].slice(2).trim()
    cursor += 1
  }

  // Take a single italic line after the title as the deck.
  let deck: string | null = null
  let afterTitle = cursor
  while (afterTitle < lines.length && lines[afterTitle].trim() === '') afterTitle += 1
  const deckMatch = lines[afterTitle]?.trim().match(/^\*([^*].*)\*$/)
  if (deckMatch) {
    deck = deckMatch[1].trim()
    cursor = afterTitle + 1
  }

  const body = lines.slice(cursor).join('\n')
  const html = md.render(body)

  return {
    slug,
    title,
    date: typeof data.date === 'string' ? data.date : '',
    dateLabel: dateLabelOf(typeof data.date === 'string' ? data.date : ''),
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readTime: readTimeOf(content),
    deck,
    html,
    hasDiagram: html.includes('class="mermaid"'),
    raw: content.trim(),
  }
}

function isPublished(fileName: string): boolean {
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
  const { data } = matter(raw)
  return typeof data.title === 'string' && data.draft !== true
}

export function getAllPosts(): Post[] {
  return listFiles()
    .filter(isPublished)
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ slug, title, date, dateLabel, excerpt, tags, readTime }) => ({
    slug, title, date, dateLabel, excerpt, tags, readTime,
  }))
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find(post => post.slug === slug) ?? null
}
