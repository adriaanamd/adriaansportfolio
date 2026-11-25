import { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "@tanstack/react-router"

import ArrowIcon from "../components/ArrowIcon"
import CaseStudyDrawer from "../components/CaseStudyDrawer"
import ProjectCard from "../components/ProjectCard"
import ScrollFade from "../components/ScrollFade"
import { significantArchiveProjects } from "../data/projects/archive"
import { qaFeaturedProjects } from "../data/projects/qa/qa-featured"
import { engineeringFeaturedProjects } from "../data/projects/swe/se-featured"
import type {
  ArchiveProject,
  CaseStudy,
  CaseStudyProject,
} from "../data/projects/types"

export default function Projects() {
  const allFeaturedProjects = useMemo(
    () => [...qaFeaturedProjects, ...engineeringFeaturedProjects],
    [],
  )

  const allCaseStudyProjects = useMemo<CaseStudyProject[]>(
    () => [
      ...allFeaturedProjects,
      ...significantArchiveProjects.filter(
        (project): project is ArchiveProject & { caseStudy: CaseStudy } =>
          Boolean(project.caseStudy),
      ),
    ],
    [allFeaturedProjects],
  )

  const [activeCaseSlug, setActiveCaseSlug] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const caseParam = params.get("case")
    if (
      caseParam &&
      allCaseStudyProjects.some((project) => project.slug === caseParam)
    ) {
      setActiveCaseSlug(caseParam)
    }
  }, [allCaseStudyProjects])

  const handleOpenCaseStudy = useCallback((slug: string) => {
    setActiveCaseSlug(slug)
  }, [])

  const handleCloseCaseStudy = useCallback(() => {
    setActiveCaseSlug(null)
  }, [])

  const activeProject = useMemo(
    () =>
      allCaseStudyProjects.find((project) => project.slug === activeCaseSlug) ??
      null,
    [allCaseStudyProjects, activeCaseSlug],
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
            Explore additional significant builds and live QA engagements—from
            cryptographic PDF signing to multiplayer beta testing.
          </p>
          <Link to="/" search={{ page: "archive" }} className="button primary">
            View project archive <ArrowIcon />
          </Link>
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
