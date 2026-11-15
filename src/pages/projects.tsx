import { useCallback, useEffect, useMemo, useState } from "react"

import ArrowIcon from "../components/ArrowIcon"
import CaseStudyDrawer from "../components/CaseStudyDrawer"
import ProjectCard from "../components/ProjectCard"
import ScrollFade from "../components/ScrollFade"
import { qaFeaturedProjects } from "../data/projects/qa/qa-featured"
import { engineeringFeaturedProjects } from "../data/projects/swe/se-featured"

export default function Projects() {
  const allFeaturedProjects = useMemo(
    () => [...qaFeaturedProjects, ...engineeringFeaturedProjects],
    [],
  )

  const [activeCaseSlug, setActiveCaseSlug] = useState<string | null>(null)

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search)
      const caseParam = params.get("case")
      if (
        caseParam &&
        allFeaturedProjects.some((project) => project.slug === caseParam)
      ) {
        setActiveCaseSlug(caseParam)
      } else {
        setActiveCaseSlug(null)
      }
    }

    syncFromUrl()
    window.addEventListener("popstate", syncFromUrl)
    return () => window.removeEventListener("popstate", syncFromUrl)
  }, [allFeaturedProjects])

  const handleOpenCaseStudy = useCallback((slug: string) => {
    setActiveCaseSlug(slug)
    const url = new URL(window.location.href)
    url.searchParams.set("case", slug)
    window.history.pushState({}, "", url.toString())
  }, [])

  const handleCloseCaseStudy = useCallback(() => {
    setActiveCaseSlug(null)
    const url = new URL(window.location.href)
    url.searchParams.delete("case")
    window.history.pushState({}, "", url.toString())
  }, [])

  const activeProject = useMemo(
    () =>
      allFeaturedProjects.find((project) => project.slug === activeCaseSlug) ??
      null,
    [allFeaturedProjects, activeCaseSlug],
  )

  return (
    <section className="section work-section" id="work">
      <ScrollFade>
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">01 · Selected work</p>
            <h2>
              Quality assurance,
              <br />
              as a practice.
            </h2>
          </div>
          <p>
            Not just finding bugs—understanding risk, protecting the user
            journey, and giving a team the confidence to release.
          </p>
        </div>
        <div className="projects-grid">
          {qaFeaturedProjects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.slug}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>
        <div className="dump-cta">
          <p>
            Looking for every QA engagement, including these featured case
            studies?
          </p>
          <a href="?page=qa-project-dump" className="button primary">
            Open the QA project dump <ArrowIcon />
          </a>
        </div>
      </ScrollFade>

      <ScrollFade>
        <div className="section-heading split-heading engineering-heading">
          <div>
            <p className="eyebrow">02 · Selected work</p>
            <h2>
              Software engineering,
              <br />
              built to be useful.
            </h2>
          </div>
          <p>
            Product-minded applications shaped around clear problems,
            maintainable systems, and interfaces people can understand.
          </p>
        </div>
        <div className="projects-grid">
          {engineeringFeaturedProjects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.slug}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>
        <div className="dump-cta">
          <p>
            Browse every software build, including all three projects featured
            above.
          </p>
          <a href="?page=engineering-project-dump" className="button primary">
            Open the SE project dump <ArrowIcon />
          </a>
        </div>
      </ScrollFade>

      <CaseStudyDrawer
        project={activeProject}
        allProjects={allFeaturedProjects}
        onSelectProject={handleOpenCaseStudy}
        onClose={handleCloseCaseStudy}
      />
    </section>
  )
}
