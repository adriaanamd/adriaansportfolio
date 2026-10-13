import { experience } from "../data/experience/work-experience"

export default function WorkExperience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">02 · Experience</p>
          <h2>
            Where I’ve
            <br />
            made an impact.
          </h2>
        </div>
        <p>
          A mix of engineering, live production, quality assurance, and
          data-sensitive operations—each sharpening a different kind of care.
        </p>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-row" key={item.role}>
            <div className="timeline-marker">
              <span>0{index + 1}</span>
            </div>
            <p className="timeline-date">{item.dates}</p>
            <div className="timeline-main">
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.text}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
