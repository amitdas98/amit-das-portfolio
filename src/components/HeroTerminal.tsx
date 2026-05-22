import type { CV } from '@/types'

export default function HeroTerminal({ terminal }: { terminal: CV['terminal'] }) {
  return (
    <div className="heroTerminal">
      {/* Title bar */}
      <div className="htHeader">
        <span className="htDots">
          <span /><span /><span />
        </span>
        <span className="htTitle">{terminal.title}</span>
      </div>

      {/* Body */}
      <div className="htBody">
        {/* whoami */}
        <div className="htLine">
          <span className="htPrompt">$</span>
          <span className="htCmd">whoami</span>
        </div>
        <div className="htOutput">{terminal.whoami}</div>

        {/* metrics */}
        <div className="htLine htGap">
          <span className="htPrompt">$</span>
          <span className="htCmd">./metrics --live</span>
        </div>
        {terminal.stats.map(s => (
          <div key={s.key} className="htStat">
            <span className="htKey">{s.key}</span>
            <span className="htVal">{s.val}</span>
          </div>
        ))}

        {/* git status */}
        <div className="htLine htGap">
          <span className="htPrompt">$</span>
          <span className="htCmd">git status</span>
        </div>
        <div className="htOutput htAccent">● currently building</div>
        {terminal.currentlyBuilding.map((line, i) => (
          <div key={i} className="htOutput htMuted">↳ {line}</div>
        ))}

        {/* cursor */}
        <div className="htLine htGap">
          <span className="htCursor">▋</span>
        </div>
      </div>
    </div>
  )
}
