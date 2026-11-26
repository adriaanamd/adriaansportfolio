import { useEffect, useRef, useState } from "react"

import { createPortal } from "react-dom"

import type { CaseStudyProject } from "../data/projects/types"

import ArrowIcon from "./ArrowIcon"

import CodebaseLinks from "./CodebaseLinks"

import ExternalIcon from "./ExternalIcon"

export default function CaseStudyDrawer({
  project,

  allProjects,

  onSelectProject,

  onClose,
}: {
  project: CaseStudyProject | null

  allProjects: CaseStudyProject[]

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

  const isFeatured = "link" in project

  const liveDemoUrl = isFeatured ? project.liveDemo : project.liveUrl

  const projectUrl = isFeatured ? project.link : project.repoUrl

  const projectLinkLabel = isFeatured ? project.linkLabel : project.repoLabel

  const currentIndex = allProjects.findIndex(
    (item) => item.slug === project.slug,
  )

  const effectiveIndex = currentIndex >= 0 ? currentIndex : 0

  const prevProject =
    allProjects.length > 1
      ? effectiveIndex > 0
        ? allProjects[effectiveIndex - 1]
        : allProjects[allProjects.length - 1]
      : null

  const nextProject =
    allProjects.length > 1
      ? effectiveIndex < allProjects.length - 1
        ? allProjects[effectiveIndex + 1]
        : allProjects[0]
      : null

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
              {String(effectiveIndex + 1).padStart(2, "0")} /{" "}
              {String(Math.max(1, allProjects.length)).padStart(2, "0")}
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
              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button primary case-cta-link"
                >
                  <span className="live-demo-dot" aria-hidden="true" />
                  {projectUrl ? "Live demo" : "Visit live site"}{" "}
                  <ExternalIcon />
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
              <CodebaseLinks
                key={project.slug}
                primaryUrl={projectUrl}
                primaryLabel={projectLinkLabel}
                singleLabel="View repository"
                multiLabel="View repositories"
                extraLinks={project.extraLinks}
                variant="drawer"
              />
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
                {section.image && (
                  <figure className="case-section-figure">
                    <div className={`case-section-frame ${project.accent}`}>
                      <img
                        src={section.image}
                        alt={section.imageAlt ?? section.title}
                        className="case-section-image"
                        loading="lazy"
                      />
                    </div>
                    {section.imageCaption && (
                      <figcaption className="case-section-caption">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {section.gallery && section.gallery.length > 0 && (
                  <div className="case-section-gallery">
                    {section.gallery.map((item) => (
                      <figure className="case-section-figure" key={item.src}>
                        <div className={`case-section-frame ${project.accent}`}>
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="case-section-image case-section-proof-image"
                            loading="lazy"
                          />
                        </div>
                        {item.caption && (
                          <figcaption className="case-section-caption">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
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

          {(prevProject || nextProject) && (
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
          )}
        </div>
      </aside>
    </div>,

    document.body,
  )
}
