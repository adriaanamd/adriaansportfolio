import { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "@tanstack/react-router"

import type { ArchiveProject, CaseStudy } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import CaseStudyDrawer from "./CaseStudyDrawer"
import CodebaseLinks from "./CodebaseLinks"
import ExternalIcon from "./ExternalIcon"
import ProjectVisual from "./ProjectVisual"
import ScrollFade from "./ScrollFade"
import SiteHeader from "./SiteHeader"

export function ArchivePage({ projects }: { projects: ArchiveProject[] }) {
  const caseStudyProjects = useMemo(
    () =>
      projects.filter(
        (project): project is ArchiveProject & { caseStudy: CaseStudy } =>
          Boolean(project.caseStudy),
      ),
    [projects],
  )

  const [activeCaseSlug, setActiveCaseSlug] = useState<string | null>(null)
  const [openMenuSlug, setOpenMenuSlug] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const caseParam = params.get("case")
    if (
      caseParam &&
      caseStudyProjects.some((project) => project.slug === caseParam)
    ) {
      setActiveCaseSlug(caseParam)
    }
  }, [caseStudyProjects])

  const handleOpenCaseStudy = useCallback((slug: string) => {
    setActiveCaseSlug(slug)
  }, [])

  const handleCloseCaseStudy = useCallback(() => {
    setActiveCaseSlug(null)
  }, [])

  const activeProject = useMemo(
    () =>
      caseStudyProjects.find((project) => project.slug === activeCaseSlug) ??
      null,
    [caseStudyProjects, activeCaseSlug],
  )

  return (
    <main className="dump-page">
      <SiteHeader archive />

      <ScrollFade as="section" className="dump-hero">
        <Link to="/" hash="work" className="back-link">
          ← Back to selected work
        </Link>
        <p className="eyebrow">
          Selected archive · Additional significant work
        </p>
        <h1>More significant builds & QA work.</h1>
        <p>
          Beyond the six featured case studies, these projects represent
          additional production builds, model acceptance and real-time systems,
          and live multiplayer QA engagements.
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
          {projects.map((project, index) => {
            const hasCaseStudy = Boolean(project.caseStudy)

            return (
              <article
                className={`dump-card glass${
                  openMenuSlug === project.slug ? " is-menu-open" : ""
                }`}
                key={project.slug}
              >
                <div className="dump-card-top">
                  <span className="dump-card-index">
                    {String(index + 1).padStart(2, "0")} · {project.role}
                  </span>
                  <span className={`case-track-pill ${project.accent}`}>
                    {project.title}
                  </span>
                </div>

                {hasCaseStudy ? (
                  <div
                    className="project-visual-trigger"
                    role="button"
                    tabIndex={0}
                    aria-label={`Read mini case study for ${project.title}`}
                    onClick={() => handleOpenCaseStudy(project.slug)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        handleOpenCaseStudy(project.slug)
                      }
                    }}
                  >
                    <ProjectVisual project={project} />
                    <span className="project-case-badge">
                      Read case study <ArrowIcon />
                    </span>
                  </div>
                ) : (
                  <ProjectVisual project={project} />
                )}

                <p className="dump-eyebrow">{project.eyebrow}</p>
                <h2>
                  {hasCaseStudy ? (
                    <button
                      type="button"
                      className="project-title-button"
                      onClick={() => handleOpenCaseStudy(project.slug)}
                    >
                      {project.title}
                    </button>
                  ) : (
                    project.title
                  )}
                </h2>
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

                {hasCaseStudy && (
                  <button
                    type="button"
                    className="case-study-trigger dump-case-trigger"
                    onClick={() => handleOpenCaseStudy(project.slug)}
                  >
                    Read mini case study <ArrowIcon />
                  </button>
                )}

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
                  {project.paperLink && (
                    <a
                      href={project.paperLink}
                      target="_blank"
                      rel="noreferrer"
                      className="dump-open"
                    >
                      Research paper <ExternalIcon />
                    </a>
                  )}
                  <CodebaseLinks
                    primaryUrl={project.repoUrl}
                    primaryLabel={project.repoLabel}
                    singleLabel="View repository"
                    multiLabel="View repositories"
                    extraLinks={project.extraLinks}
                    variant="archive"
                    singleIcon="arrow"
                    onOpenChange={(open) =>
                      setOpenMenuSlug((prev) =>
                        open
                          ? project.slug
                          : prev === project.slug
                            ? null
                            : prev,
                      )
                    }
                  />
                </div>
              </article>
            )
          })}
        </div>
      </ScrollFade>

      <ScrollFade as="section" className="dump-footer">
        <p>Looking for the six primary case studies?</p>
        <Link to="/" hash="work" className="button cream-button">
          Back to featured work <ArrowIcon />
        </Link>
      </ScrollFade>

      <CaseStudyDrawer
        project={activeProject}
        allProjects={caseStudyProjects}
        onSelectProject={handleOpenCaseStudy}
        onClose={handleCloseCaseStudy}
      />
    </main>
  )
}

export default ArchivePage
