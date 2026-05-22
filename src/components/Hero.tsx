import type { CV } from '@/types'
import HeroTerminal from './HeroTerminal'

interface Props {
  hero: CV['hero']
  terminal: CV['terminal']
  personal: CV['personal']
}

export default function Hero({ hero, terminal, personal }: Props) {
  return (
    <section className="titlePage">

      {/* LEFT */}
      <div className="heroLeft">
        <div className="statusBadge">
          <span className="statusDot" />
          {hero.statusBadge}
        </div>

        <div className="titleEyebrow">{hero.eyebrow}</div>

        <h1 className="titleMain">
          {personal.name.split(' ')[0]}<br />
          <em>{personal.name.split(' ')[1]}.</em>
        </h1>

        <p className="titleSub">{hero.tagline}</p>

        <div className="heroActions">
          <a className="btnPrimary" href={personal.cvFile} download={personal.cvFileName}>
            ↓ Download CV
          </a>
          <a className="btnSecondary" href="#sec-contact">Get in touch →</a>
          <a className="btnSecondary" href="#sec-projects">See my work →</a>
        </div>

        {/* Identity line — replaces the old tacky metric grid */}
        <p className="heroIdentity">
          <span className="heroIdentityAccent">◆</span>
          &nbsp;&nbsp;{personal.currentTitle} at {personal.currentCompany}
          &nbsp;&nbsp;·&nbsp;&nbsp;{personal.education}
          &nbsp;&nbsp;·&nbsp;&nbsp;{personal.location}
        </p>
      </div>

      {/* RIGHT — terminal card */}
      <div className="heroRight">
        <HeroTerminal terminal={terminal} />
      </div>

    </section>
  )
}
