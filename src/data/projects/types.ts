export type ProjectAccent = "wine" | "sage" | "sand"

export type FeaturedProject = {
  title: string
  image: string
  eyebrow: string
  description: string
  tags: string[]
  link: string
  accent: ProjectAccent
}

export type ArchiveProject = readonly [title: string, detail: string, link: string]
