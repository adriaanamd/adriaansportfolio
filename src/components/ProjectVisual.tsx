import type { ArchiveProject, FeaturedProject } from "../data/projects/types"

export default function ProjectVisual({
  project,
}: {
  project: Pick<FeaturedProject | ArchiveProject, "title" | "image" | "accent">
}) {
  return (
    <div className={`project-visual ${project.accent}`}>
      <img
        className="project-image"
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
      />
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
