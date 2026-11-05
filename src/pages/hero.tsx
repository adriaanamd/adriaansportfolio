import ArrowIcon from "../components/ArrowIcon"
import ExternalIcon from "../components/ExternalIcon"

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-copy">
          <p className="kicker">
            <span />
            Welcome to my journal
          </p>
          <h1>
            I'm Adriaan
            <em> M. Dimate</em>
          </h1>
          <p className="hero-intro">
            A quality assurance engineer and SDET dedicated to breaking down
            edge cases, automating robust test suites, and safeguarding
            production reliability using Playwright, Cypress, Vitest, Node.js,
            and React.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button primary">
              Explore my work <ArrowIcon />
            </a>
            <a
              href="/final%20adriaan%20resume.pdf"
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
          <div className="hero-footnote">
            <span>Based in Olongapo City, Philippines</span>
            <span className="availability-status">
              Open for Junior QA / SDET Roles · Full-Time & OJT
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Adriaan Dimate, software and QA">
          <div className="portrait-card">
            <div className="portrait-top">
              <span>Field note / 001</span>
              <span>2026</span>
            </div>
            <div className="portrait-window">
              <img
                className="portrait-image"
                src="/image.png"
                alt="Adriaan M. Dimate"
              />
            </div>
            <div className="portrait-caption">
              <strong>Adriaan M. Dimate</strong>
              <span>QA Engineer & SDET · Aviation</span>
              <em className="portrait-motto">code meets cockpit</em>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
