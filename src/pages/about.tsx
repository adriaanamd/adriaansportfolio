import ArrowIcon from "../components/ArrowIcon"

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">05 · About me</p>
        <h2>
          Precision in every line,
          <br />
          test case, and flight chart.
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-story">
          <p className="lead">
            I’m an autistic QA engineer and developer with a dual passion:
            protecting product reliability and conquering the skies.
          </p>
          <p>
            I merge aviation’s checklist rigor with software quality
            engineering. Whether I’m designing an automated regression suite,
            logging a reproducible bug report, or reading a flight chart, the
            same discipline applies: understand the system, respect the details,
            and prepare for edge cases.
          </p>
          <p>
            I’m currently pursuing a BS in Computer Science at Gordon College
            while laying the groundwork for my commercial pilot license.
          </p>
          <a href="#contact" className="text-link">
            Get to know me <ArrowIcon />
          </a>
        </div>
        <aside className="profile-notes">
          <div className="note-card sage-note">
            <span>Primary objective</span>
            <strong>
              Securing a Junior QA / SDET position (Full-time or OJT) to build
              reliable automated tests.
            </strong>
          </div>
          <div className="note-card wine-note">
            <span>What I bring</span>
            <strong>
              Pattern recognition, methodical edge-case analysis, and a
              dependable test automation mindset.
            </strong>
          </div>
          <div className="mini-facts">
            <div>
              <strong>2023—Now</strong>
              <span>BS Computer Science</span>
            </div>
            <div>
              <strong>140+</strong>
              <span>Live productions supported</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
