import type { FeaturedProject } from "../data/projects/types"
import ExternalIcon from "./ExternalIcon"
import ProjectVisual from "./ProjectVisual"

export default function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject
  index: number
}) {
  return (
    <article className="project-card glass">
      <ProjectVisual project={project} />
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          View project <ExternalIcon />
        </a>
      </div>
    </article>
  )
}
