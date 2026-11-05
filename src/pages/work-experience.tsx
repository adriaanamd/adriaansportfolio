import { experience } from "../data/experience/work-experience"

export default function WorkExperience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">04 · Experience</p>
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
            <div className="timeline-main">
              <div className="timeline-header">
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <span className="timeline-date-badge">{item.dates}</span>
              </div>
              {item.bullets ? (
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                item.text && <p>{item.text}</p>
              )}
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
