'use client'
import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0
      if (fillRef.current) fillRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="progressBar">
      <div className="progressFill" ref={fillRef} />
    </div>
  )
}
