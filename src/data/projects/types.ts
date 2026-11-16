export type ProjectAccent = "wine" | "sage" | "sand"

export type ProjectLink = {
  label: string
  url: string
}

export type CaseStudyMetric = {
  value: string
  label: string
}

export type CaseStudySection = {
  eyebrow: string
  title: string
  body: string
  bullets?: string[]
}

export type CaseStudy = {
  track: "qa" | "engineering"
  subtitle: string
  role: string
  context: string
  focus: string
  metrics: CaseStudyMetric[]
  sections: CaseStudySection[]
  takeaway: string
}

export type FeaturedProject = {
  slug: string
  title: string
  image: string
  eyebrow: string
  description: string
  tags: string[]
  link: string
  liveDemo?: string
  paperLink?: string
  extraLinks?: ProjectLink[]
  accent: ProjectAccent
  caseStudy: CaseStudy
}

export type ArchiveProject = {
  slug: string
  title: string
  image: string
  eyebrow: string
  role: string
  description: string
  highlights: string[]
  tags: string[]
  accent: ProjectAccent
  repoUrl?: string
  liveUrl?: string
}
