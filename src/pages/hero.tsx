import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import ArrowIcon from "../components/ArrowIcon"
import ExternalIcon from "../components/ExternalIcon"
import ScrollFade from "../components/ScrollFade"
import { activeResumeHref } from "../data/resume"

export default function Hero() {
  const [portraitOpen, setPortraitOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!portraitOpen) {
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

    closeBtnRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPortraitOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      html.style.overflowY = prevHtmlOverflowY
      body.style.paddingRight = prevBodyPaddingRight
      window.removeEventListener("keydown", handleKeyDown)
      if (window.scrollY !== scrollY) {
        window.scrollTo({ top: scrollY, behavior: "instant" })
      }
    }
  }, [portraitOpen])

  return (
    <ScrollFade as="section" className="hero" id="top">
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span aria-hidden="true" />
            Welcome to my journal
          </p>

          <h1>
            I’m Adriaan
            <br />
            <em>M. Dimate</em>
          </h1>

          <p className="hero-intro">
            A quality assurance engineer and SDET building thoughtful test
            suites and reliable systems that hold steady through turbulence
            using{" "}
            <strong>
              Playwright, Cypress, Vitest, Node.js, React, Tanstack Start,
              ExpressJS, and PostgreSQL
            </strong>
            .
          </p>

          <div className="hero-actions">
            <a href="#work" className="button primary hero-primary-cta">
              Explore my work <ArrowIcon />
            </a>
            <div className="hero-secondary-actions">
              <a
                href={activeResumeHref}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                View resume <ExternalIcon />
              </a>
              <a href="#about" className="button secondary">
                More about me
              </a>
            </div>
          </div>

          <dl className="hero-footnote" aria-label="Availability and location">
            <div className="hero-footnote-item">
              <dt>Availability</dt>
              <dd className="availability-status">
                <span className="status-dot" aria-hidden="true" />
                Open for Junior QA / SWE / SDET Roles, Full-Time & OJT
              </dd>
            </div>
            <div className="hero-footnote-item">
              <dt>Base</dt>
              <dd>Based in Olongapo City, Philippines</dd>
            </div>
          </dl>
        </div>

        <div className="hero-art" aria-label="Adriaan Dimate, software and QA">
          <div className="portrait-stage">
            <div className="portrait-backing" aria-hidden="true" />
            <div className="portrait-card">
              <div className="portrait-top">
                <span>Field note / 001</span>
                <span className="portrait-top-line" aria-hidden="true" />
                <span>2026</span>
              </div>
              <button
                type="button"
                className="portrait-window portrait-trigger"
                onClick={() => setPortraitOpen(true)}
                aria-label="Open Adriaan M. Dimate portrait showcase"
              >
                <img
                  className="portrait-image"
                  src="/image.png"
                  alt="Adriaan M. Dimate"
                />
                <span className="portrait-zoom-pill" aria-hidden="true">
                  Inspect field note ✦
                </span>
              </button>
              <div className="portrait-caption">
                <div className="portrait-identity">
                  <strong>Adriaan M. Dimate</strong>
                  <span>QA Engineer & SDET · Aviation</span>
                </div>
                <em className="portrait-motto">code meets cockpit</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      {portraitOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="portrait-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portrait-modal-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setPortraitOpen(false)
              }
            }}
          >
            <div className="portrait-modal-frame glass">
              <span className="portrait-corner corner-tl" aria-hidden="true" />
              <span className="portrait-corner corner-tr" aria-hidden="true" />
              <span className="portrait-corner corner-bl" aria-hidden="true" />
              <span className="portrait-corner corner-br" aria-hidden="true" />

              <header className="portrait-modal-topbar">
                <div className="portrait-modal-stamps">
                  <span className="portrait-archive-pill">
                    Field Note / 001
                  </span>
                  <span className="portrait-archive-code">
                    PLATE · AMD-2026 · 14°49′N 120°17′E
                  </span>
                </div>
                <button
                  type="button"
                  className="case-close-btn"
                  onClick={() => setPortraitOpen(false)}
                  ref={closeBtnRef}
                  aria-label="Close portrait modal"
                >
                  Close <span aria-hidden="true">✕</span>
                </button>
              </header>

              <div className="portrait-modal-body">
                <div className="portrait-modal-showcase">
                  <div className="portrait-showcase-mat">
                    <span className="portrait-plate-tag">
                      ARCHIVAL PRINT · 01 / 01
                    </span>
                    <img
                      src="/image.png"
                      alt="Adriaan M. Dimate full portrait"
                      className="portrait-modal-image"
                    />
                  </div>
                </div>

                <div className="portrait-modal-dossier">
                  <p className="eyebrow">Personal Dossier · Flight & QA Log</p>
                  <h2 id="portrait-modal-title">Adriaan M. Dimate</h2>
                  <p className="portrait-dossier-quote">
                    “Whether designing an automated regression suite or reading
                    a flight chart, the same discipline applies: understand the
                    system, respect the details, and prepare for edge cases.”
                  </p>

                  <div className="portrait-dossier-badges">
                    <span className="dossier-badge wine">
                      QA Engineer & SDET
                    </span>
                    <span className="dossier-badge sage">
                      BS Computer Science
                    </span>
                    <span className="dossier-badge sand">
                      Future Commercial Pilot
                    </span>
                  </div>

                  <dl className="portrait-spec-list">
                    <div className="portrait-spec-row">
                      <dt>01 · Test & Automation Craft</dt>
                      <dd>
                        Playwright, Cypress, Vitest — deterministic E2E,
                        security, and regression gates.
                      </dd>
                    </div>
                    <div className="portrait-spec-row">
                      <dt>02 · Engineering Stack</dt>
                      <dd>
                        React, TypeScript, Node.js, PHP, and SQL — built to hold
                        steady through turbulence.
                      </dd>
                    </div>
                    <div className="portrait-spec-row">
                      <dt>03 · Flight Status</dt>
                      <dd className="spec-cleared">
                        <span className="status-dot" aria-hidden="true" />
                        Cleared for Junior QA / SDET Roles (Full-Time & OJT)
                      </dd>
                    </div>
                  </dl>

                  <footer className="portrait-dossier-footer">
                    <span>Olongapo City, Philippines</span>
                    <em>Adriaan’s Journal · 2026 Edition</em>
                  </footer>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </ScrollFade>
  )
}
