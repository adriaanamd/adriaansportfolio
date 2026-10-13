import type { FeaturedProject } from "../data/projects/types"

export default function ProjectVisual({
  project,
  index,
}: {
  project: FeaturedProject
  index: number
}) {
  return (
    <div className={`project-visual ${project.accent}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-content">
        <div className="visual-number">0{index + 1}</div>
        <div className="visual-mark">
          {project.title.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <span className="visual-line wide" />
          <span className="visual-line" />
        </div>
      </div>
    </div>
  )
}
