'use client'
import { useEffect } from 'react'

export default function Mermaid() {
  useEffect(() => {
    let cancelled = false

    async function render() {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>('pre.mermaid'))
      if (nodes.length === 0) return

      const mermaid = (await import('mermaid')).default
      if (cancelled) return

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        fontFamily: 'var(--font-mono), monospace',
        theme: 'base',
        themeVariables: {
          background: '#f4efe6',
          primaryColor: '#d8ebec',
          primaryTextColor: '#1a1814',
          primaryBorderColor: '#00838a',
          secondaryColor: '#ebe4d6',
          tertiaryColor: '#f4efe6',
          lineColor: '#3d3a32',
          textColor: '#1a1814',
          noteBkgColor: '#f3dccf',
          noteTextColor: '#1a1814',
          noteBorderColor: '#b54827',
          actorBkg: '#d8ebec',
          actorBorder: '#00838a',
          actorTextColor: '#1a1814',
          signalColor: '#3d3a32',
          signalTextColor: '#1a1814',
          labelBoxBkgColor: '#ebe4d6',
          labelBoxBorderColor: '#2a2620',
          labelTextColor: '#1a1814',
          sequenceNumberColor: '#f4efe6',
          fontSize: '13px',
        },
      })

      await mermaid.run({ nodes })
    }

    render().catch(error => console.error('[mermaid]', error))

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
