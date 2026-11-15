import type { ArchiveProject } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import ExternalIcon from "./ExternalIcon"
import ScrollFade from "./ScrollFade"
import SiteHeader from "./SiteHeader"

export function ArchivePage({ projects }: { projects: ArchiveProject[] }) {
  return (
    <main className="dump-page">
      <SiteHeader archive />

      <ScrollFade as="section" className="dump-hero">
        <a href="./#work" className="back-link">
          ← Back to selected work
        </a>
        <p className="eyebrow">
          Selected archive · Additional significant work
        </p>
        <h1>More significant builds & QA work.</h1>
        <p>
          Beyond the six featured case studies, these projects represent
          additional production builds, cryptographic and real-time systems, and
          live multiplayer QA engagements.
        </p>
      </ScrollFade>

      <ScrollFade as="section" className="dump-list-section">
        <div className="dump-count">
          <span>Curated archive</span>
          <strong>
            {String(projects.length).padStart(2, "0")} significant projects
          </strong>
        </div>
        <div className="dump-grid">
          {projects.map((project, index) => (
            <article className="dump-card glass" key={project.slug}>
              <div className="dump-card-top">
                <span className="dump-card-index">
                  0{index + 1} · {project.role}
                </span>
                <span className={`case-track-pill ${project.accent}`}>
                  {project.title}
                </span>
              </div>

              <div className={`dump-monogram ${project.accent}`}>
                {project.title.slice(0, 2)}
              </div>

              <p className="dump-eyebrow">{project.eyebrow}</p>
              <h2>{project.title}</h2>
              <p className="dump-description">{project.description}</p>

              <ul className="dump-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="dump-card-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="dump-open live-demo"
                  >
                    <span className="live-demo-dot" aria-hidden="true" />
                    {project.repoUrl ? "Live demo" : "Visit live site"}{" "}
                    <ExternalIcon />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="dump-open"
                  >
                    View repository <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </ScrollFade>

      <ScrollFade as="section" className="dump-footer">
        <p>Looking for the six primary case studies?</p>
        <a href="./#work" className="button cream-button">
          Back to featured work <ArrowIcon />
        </a>
      </ScrollFade>
    </main>
  )
}

export default ArchivePage
