export interface TerminalStat { key: string; val: string }

export interface SkillItem { name: string; primary: boolean }
export interface SkillCategory { category: string; items: SkillItem[] }

export interface Role {
  title: string
  startDate: string
  endDate: string
  bullets: string[]
}

export interface ExperienceEntry {
  company: string
  roles: Role[]
}

export interface Project {
  label: string
  title: string
  metric: string
  description: string
  tags: string[]
}

export interface Education {
  label: string
  institution: string
  metric: string
  description: string
  tags: string[]
}

export interface BlogPost {
  badge: 'soon' | 'live'
  readTime: string
  title: string
  excerpt: string
  href: string
}

export interface CV {
  personal: {
    name: string
    role: string
    currentTitle: string
    currentCompany: string
    location: string
    education: string
    email: string
    phone: string
    github: string
    githubHandle: string
    linkedin: string
    linkedinHandle: string
    cvFile: string
    cvFileName: string
  }
  hero: {
    statusBadge: string
    eyebrow: string
    tagline: string
  }
  terminal: {
    title: string
    whoami: string
    stats: TerminalStat[]
    currentlyBuilding: string[]
  }
  about: {
    lead: string
    paragraphs: string[]
    callout: { label: string; lines: string[] }
    pullQuote: { text: string; attribution: string }
  }
  experience: ExperienceEntry[]
  projects: Project[]
  skills: SkillCategory[]
  education: Education[]
  blog: BlogPost[]
}
