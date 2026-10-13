import type { ArchiveProject } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import ExternalIcon from "./ExternalIcon"
import SiteHeader from "./SiteHeader"

export function ArchivePage({
  type,
  projects,
}: {
  type: "qa" | "engineering"
  projects: ArchiveProject[]
}) {
  const isQa = type === "qa"

  return (
    <main className="dump-page">
      <SiteHeader archive />

      <section className="dump-hero">
        <a href="./#work" className="back-link">
          ← Back to selected work
        </a>
        <p className="eyebrow">
          {isQa ? "Quality assurance" : "Software engineering"} · Complete
          archive
        </p>
        <h1>
          {isQa ? "The QA project dump." : "The engineering project dump."}
        </h1>
        <p>
          {isQa
            ? "Every testing engagement, exploratory pass, automation effort, and quality-focused case study—featured or otherwise."
            : "Every application, experiment, academic build, and shipped product—featured or otherwise."}
        </p>
        <div className="dump-switcher">
          <a className={isQa ? "active" : ""} href="?page=qa-project-dump">
            QA project dump
          </a>
          <a
            className={!isQa ? "active" : ""}
            href="?page=engineering-project-dump"
          >
            SE project dump
          </a>
        </div>
      </section>

      <section className="dump-list-section">
        <div className="dump-count">
          <span>Archive index</span>
          <strong>{String(projects.length).padStart(2, "0")} entries</strong>
        </div>
        <div className="dump-grid">
          {projects.map(([title, detail, link], index) => (
            <a
              className="dump-card glass"
              href={link}
              target="_blank"
              rel="noreferrer"
              key={title}
            >
              <div className="dump-card-top">
                <span>0{index + 1}</span>
                <ExternalIcon />
              </div>
              <div
                className={`dump-monogram ${
                  index % 3 === 0 ? "wine" : index % 3 === 1 ? "sage" : "sand"
                }`}
              >
                {title.slice(0, 2).toUpperCase()}
              </div>
              <p>{detail}</p>
              <h2>{title}</h2>
              <span className="dump-open">
                Open project <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="dump-footer">
        <p>Looking for the highlights?</p>
        <a href="./#work" className="button cream-button">
          View selected work <ArrowIcon />
        </a>
      </section>
    </main>
  )
}

export default ArchivePage
