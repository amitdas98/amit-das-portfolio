'use client'
import { useEffect, useState } from 'react'

type State = 'idle' | 'copied' | 'failed'

export default function CopyMarkdown({ markdown }: { markdown: string }) {
  const [state, setState] = useState<State>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const timer = setTimeout(() => setState('idle'), 2000)
    return () => clearTimeout(timer)
  }, [state])

  // Older browsers, and any page without focus, reject the clipboard API.
  // A hidden textarea with execCommand still works there.
  function copyWithTextarea(): boolean {
    const area = document.createElement('textarea')
    area.value = markdown
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.top = '-1000px'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    let done = false
    try {
      done = document.execCommand('copy')
    } catch {
      done = false
    }
    document.body.removeChild(area)
    return done
  }

  // The clipboard API can also hang, not only reject. Give it one second,
  // then use the textarea instead, so the button never looks dead.
  async function copy() {
    try {
      await Promise.race([
        navigator.clipboard.writeText(markdown),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1000)),
      ])
      setState('copied')
    } catch {
      setState(copyWithTextarea() ? 'copied' : 'failed')
    }
  }

  const label = state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy as Markdown'

  return (
    <button
      type="button"
      className="copyMd"
      onClick={copy}
      data-state={state}
      title="Copy the full post as Markdown, for an AI agent"
      aria-label="Copy the full post as Markdown"
    >
      <span className="copyMdIcon" aria-hidden="true">
        {state === 'copied' ? '✓' : state === 'failed' ? '!' : '⧉'}
      </span>
      <span className="copyMdLabel">{label}</span>
    </button>
  )
}
