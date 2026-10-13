import type { FeaturedProject } from "../data/projects/types"

export default function ProjectVisual({
  project,
}: {
  project: FeaturedProject
}) {
  return (
    <div className={`project-visual ${project.accent}`}>
      <img
        className="project-image"
        src={project.image}
        alt={`${project.title} project preview`}
      />
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
