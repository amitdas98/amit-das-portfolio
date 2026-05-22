import type { CV } from '@/types'

export default function Contact({ personal }: { personal: CV['personal'] }) {
  return (
    <>
      <section className="chapterHead" id="sec-contact">
        <span className="chapterNum">Chapter 07</span>
        <h1 className="chapterTitle">Let&apos;s <em>talk.</em></h1>
        <p className="chapterDeck">Open to interesting conversations — product engineering, Gen AI, distributed systems, or what you&apos;re building.</p>
      </section>

      <p className="lead">
        I&apos;m currently at Yellow.ai and open to conversations about ambitious engineering challenges. If you&apos;re building something interesting, want a second opinion on a system design, or are looking for an engineer who&apos;s shipped at scale — reach out.
      </p>

      <p className="bodyText">
        I&apos;m particularly interested in opportunities at the intersection of AI and large-scale backend systems. Remote-friendly. Based in Dhaka, Bangladesh.
      </p>

      <div className="contactGrid">
        <a className="contactItem" href={`mailto:${personal.email}`}>
          <span className="contactIcon">✉</span>
          <div>
            <span className="contactItemLabel">Email</span>
            <span className="contactItemValue">{personal.email}</span>
          </div>
        </a>
        <a className="contactItem" href={personal.linkedin} target="_blank" rel="noopener">
          <span className="contactIcon">◈</span>
          <div>
            <span className="contactItemLabel">LinkedIn</span>
            <span className="contactItemValue">{personal.linkedinHandle}</span>
          </div>
        </a>
        <a className="contactItem" href={personal.github} target="_blank" rel="noopener">
          <span className="contactIcon">⌥</span>
          <div>
            <span className="contactItemLabel">GitHub</span>
            <span className="contactItemValue">github.com/{personal.githubHandle}</span>
          </div>
        </a>
        <a className="contactItem" href={`tel:${personal.phone}`}>
          <span className="contactIcon">◉</span>
          <div>
            <span className="contactItemLabel">Phone</span>
            <span className="contactItemValue">{personal.phone}</span>
          </div>
        </a>
      </div>

      <p className="bodyText" style={{ marginTop: '28px', color: 'var(--ink-faint)', fontSize: '15px', fontFamily: 'var(--font-sans)' }}>
        Based in Dhaka, Bangladesh · Available for remote roles worldwide.
      </p>

      <div className="chapterEnd" style={{ marginTop: '80px', fontSize: '18px', letterSpacing: '0.8em' }}>
        ⁂ &nbsp; ⁂ &nbsp; ⁂
      </div>
    </>
  )
}
