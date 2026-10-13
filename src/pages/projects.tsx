import ArrowIcon from "../components/ArrowIcon"
import ProjectCard from "../components/ProjectCard"
import { qaFeaturedProjects } from "../data/projects/qa/qa-featured"
import { engineeringFeaturedProjects } from "../data/projects/swe/se-featured"

export default function Projects() {
  return (
    <section className="section work-section" id="work">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">03 · Selected work</p>
          <h2>
            Quality assurance,
            <br />
            as a practice.
          </h2>
        </div>
        <p>
          Not just finding bugs—understanding risk, protecting the user journey,
          and giving a team the confidence to release.
        </p>
      </div>
      <div className="projects-grid">
        {qaFeaturedProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
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

      <div className="section-heading split-heading engineering-heading">
        <div>
          <p className="eyebrow">04 · Selected work</p>
          <h2>
            Software engineering,
            <br />
            built to be useful.
          </h2>
        </div>
        <p>
          Product-minded applications shaped around clear problems, maintainable
          systems, and interfaces people can understand.
        </p>
      </div>
      <div className="projects-grid">
        {engineeringFeaturedProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
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
    </section>
  )
}
