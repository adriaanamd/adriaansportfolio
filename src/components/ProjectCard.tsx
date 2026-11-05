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
        <div className="project-links">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="text-link live-demo"
            >
              <span className="live-demo-dot" aria-hidden="true" />
              Live demo <ExternalIcon />
            </a>
          )}
          {project.paperLink && (
            <a
              href={project.paperLink}
              target="_blank"
              rel="noreferrer"
              className="text-link paper-link"
            >
              Research paper <ExternalIcon />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            {project.liveDemo ? "View code" : "View project"} <ExternalIcon />
          </a>
          {project.extraLinks?.map((extra) => (
            <a
              key={extra.url}
              href={extra.url}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {extra.label} <ExternalIcon />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
