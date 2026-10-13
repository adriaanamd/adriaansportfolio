import ArrowIcon from "../components/ArrowIcon"

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 · About me</p>
        <h2>
          Precision in every line,
          <br />
          test case, and flight chart.
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-story">
          <p className="lead">
            I’m an autistic developer with a dual passion: creating beautiful
            digital experiences and conquering the skies.
          </p>
          <p>
            I merge aviation’s precision with software engineering’s creativity.
            Whether I’m shipping a feature, filing a bug, or reading a flight
            chart, the same discipline applies: understand the system, respect
            the details, and prepare for edge cases.
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
            <span>Current focus</span>
            <strong>
              Building dependable digital products from spec to release.
            </strong>
          </div>
          <div className="note-card wine-note">
            <span>What I bring</span>
            <strong>
              Pattern recognition, careful execution, and a quick-learning
              mindset.
            </strong>
          </div>
          <div className="mini-facts">
            <div>
              <strong>2023—Now</strong>
              <span>BS Computer Science</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Live services supported</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
