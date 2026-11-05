export type ProjectAccent = "wine" | "sage" | "sand"

export type ProjectLink = {
  label: string
  url: string
}

export type FeaturedProject = {
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
}

export type ArchiveProject = readonly [title: string, detail: string, link: string, liveDemo?: string, image?: string, description?: string, tags?: readonly string[], paperLink?: string]
