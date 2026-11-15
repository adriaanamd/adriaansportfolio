import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

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
  const wasOpenRef = useRef(false)
  const [copied, setCopied] = useState(false)
  const isOpen = Boolean(project)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const html = document.documentElement
    const body = document.body
    const scrollY = window.scrollY
    const prevHtmlOverflowY = html.style.overflowY
    const prevBodyPaddingRight = body.style.paddingRight

    const scrollbarWidth = window.innerWidth - html.clientWidth
    html.style.overflowY = "hidden"
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    closeButtonRef.current?.focus({ preventScroll: true })

    return () => {
      html.style.overflowY = prevHtmlOverflowY
      body.style.paddingRight = prevBodyPaddingRight
      if (window.scrollY !== scrollY) {
        window.scrollTo({ top: scrollY, behavior: "instant" })
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!project) {
      wasOpenRef.current = false
      return
    }

    if (scrollContainerRef.current) {
      if (wasOpenRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollTop = 0
      }
    }

    wasOpenRef.current = true
    setCopied(false)
  }, [project])

  if (!project || typeof document === "undefined") {
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
      const shareUrl = new URL(window.location.href)
      shareUrl.searchParams.set("case", project.slug)
      await navigator.clipboard.writeText(shareUrl.toString())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return createPortal(
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
      <aside className={`case-modal-drawer glass accent-${project.accent}`}>
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

        <div className="case-modal-body" ref={scrollContainerRef}>
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
    </div>,
    document.body,
  )
}
