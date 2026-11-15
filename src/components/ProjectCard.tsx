import type { FeaturedProject } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import ExternalIcon from "./ExternalIcon"
import ProjectVisual from "./ProjectVisual"

export default function ProjectCard({
  project,
  onOpenCaseStudy,
}: {
  project: FeaturedProject
  index: number
  onOpenCaseStudy: (slug: string) => void
}) {
  return (
    <article className="project-card glass">
      <div
        className="project-visual-trigger"
        role="button"
        tabIndex={0}
        aria-label={`Read mini case study for ${project.title}`}
        onClick={() => onOpenCaseStudy(project.slug)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            onOpenCaseStudy(project.slug)
          }
        }}
      >
        <ProjectVisual project={project} />
        <span className="project-case-badge">
          Read case study <ArrowIcon />
        </span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>
          <button
            type="button"
            className="project-title-button"
            onClick={() => onOpenCaseStudy(project.slug)}
          >
            {project.title}
          </button>
        </h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card-footer">
          <button
            type="button"
            className="case-study-trigger"
            onClick={() => onOpenCaseStudy(project.slug)}
          >
            Read mini case study <ArrowIcon />
          </button>
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
      </div>
    </article>
  )
}
