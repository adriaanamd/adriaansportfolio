export type ProjectAccent = "wine" | "sage" | "sand"

export type ProjectLink = {
  label: string
  url: string
}

export type CaseStudyMetric = {
  value: string
  label: string
}

export type CaseStudyMedia = {
  src: string
  alt: string
  caption?: string
}

export type CaseStudySection = {
  eyebrow: string
  title: string
  body: string
  bullets?: string[]
  image?: string
  imageAlt?: string
  imageCaption?: string
  gallery?: CaseStudyMedia[]
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
  paperLink?: string
  extraLinks?: ProjectLink[]
  caseStudy?: CaseStudy
}

export type CaseStudyProject = FeaturedProject | ArchiveProject & {
  caseStudy: CaseStudy
}
