import { useEffect, useRef, useState } from "react"

import type { FeaturedProject } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import ExternalIcon from "./ExternalIcon"

export default function CaseStudyDrawer({
  project,
  allProjects,
  onSelectProject,
  onClose,
}: {
  project: FeaturedProject | null
  allProjects: FeaturedProject[]
  onSelectProject: (slug: string) => void
  onClose: () => void
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!project) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  useEffect(() => {
    if (project && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
    setCopied(false)
  }, [project])

  if (!project) {
    return null
  }

  const { caseStudy } = project
  const currentIndex = allProjects.findIndex(
    (item) => item.slug === project.slug,
  )
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1]
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0]

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="case-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <aside
        className={`case-modal-drawer glass accent-${project.accent}`}
        ref={scrollContainerRef}
      >
        <header className="case-modal-topbar">
          <div className="case-modal-badges">
            <span className={`case-track-pill ${project.accent}`}>
              {caseStudy.track === "qa"
                ? "QA Case Study"
                : "Engineering Case Study"}
            </span>
            <span className="case-index-counter">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(allProjects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="case-modal-actions">
            <button
              type="button"
              className="case-action-btn"
              onClick={handleCopyLink}
              aria-label="Copy direct link to this case study"
            >
              {copied ? "Link copied ✓" : "Share link"}
            </button>
            <button
              type="button"
              className="case-close-btn"
              onClick={onClose}
              ref={closeButtonRef}
              aria-label="Close case study"
            >
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>
        </header>

        <div className="case-modal-body">
          <div className="case-hero">
            <p className="eyebrow">{project.eyebrow}</p>
            <h2 id="case-study-title">{project.title}</h2>
            <p className="case-subtitle">{caseStudy.subtitle}</p>

            <div className="case-meta-grid">
              <div className="case-meta-item">
                <span>Role</span>
                <strong>{caseStudy.role}</strong>
              </div>
              <div className="case-meta-item">
                <span>Context</span>
                <strong>{caseStudy.context}</strong>
              </div>
              <div className="case-meta-item">
                <span>Focus area</span>
                <strong>{caseStudy.focus}</strong>
              </div>
            </div>

            <div className="case-hero-links">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="button primary case-cta-link"
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
                  className="button secondary case-cta-link"
                >
                  Research paper <ExternalIcon />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="button secondary case-cta-link"
              >
                {project.liveDemo ? "View repository" : "Open project"}{" "}
                <ExternalIcon />
              </a>
              {project.extraLinks?.map((extra) => (
                <a
                  key={extra.url}
                  href={extra.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button secondary case-cta-link"
                >
                  {extra.label} <ExternalIcon />
                </a>
              ))}
            </div>
          </div>

          <div className={`case-visual-frame ${project.accent}`}>
            <div className="browser-bar">
              <span />
              <span />
              <span />
            </div>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="case-visual-image"
            />
          </div>

          <div className="case-metrics-grid" aria-label="Case study highlights">
            {caseStudy.metrics.map((metric) => (
              <div className="case-metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="case-sections">
            {caseStudy.sections.map((section) => (
              <section className="case-section-block" key={section.eyebrow}>
                <p className="eyebrow">{section.eyebrow}</p>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="case-section-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="case-stack-block">
            <p className="eyebrow">Tools & technologies used</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className={`case-takeaway-card ${project.accent}`}>
            <span>Key takeaway</span>
            <strong>“{caseStudy.takeaway}”</strong>
          </aside>

          <nav className="case-footer-nav" aria-label="Other case studies">
            {prevProject && (
              <button
                type="button"
                className="case-nav-card prev"
                onClick={() => onSelectProject(prevProject.slug)}
              >
                <span className="case-nav-dir">← Previous case study</span>
                <strong>{prevProject.title}</strong>
                <small>{prevProject.eyebrow}</small>
              </button>
            )}
            {nextProject && (
              <button
                type="button"
                className="case-nav-card next"
                onClick={() => onSelectProject(nextProject.slug)}
              >
                <span className="case-nav-dir">
                  Next case study <ArrowIcon />
                </span>
                <strong>{nextProject.title}</strong>
                <small>{nextProject.eyebrow}</small>
              </button>
            )}
          </nav>
        </div>
      </aside>
    </div>
  )
}
