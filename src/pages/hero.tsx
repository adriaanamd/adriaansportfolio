import ArrowIcon from "../components/ArrowIcon"
import ExternalIcon from "../components/ExternalIcon"
import ScrollFade from "../components/ScrollFade"

export default function Hero() {
  return (
    <ScrollFade as="section" className="hero" id="top">
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span aria-hidden="true" />
            Welcome to my journal
          </p>

          <h1>
            I’m Adriaan
            <br />
            <em>M. Dimate</em>
          </h1>

          <p className="hero-intro">
            A quality assurance engineer and SDET building thoughtful test
            suites and reliable systems that hold steady through turbulence
            using{" "}
            <strong>Playwright, Cypress, Vitest, Node.js, and React</strong>.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button primary hero-primary-cta">
              Explore my work <ArrowIcon />
            </a>
            <div className="hero-secondary-actions">
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
          </div>

          <dl className="hero-footnote" aria-label="Availability and location">
            <div className="hero-footnote-item">
              <dt>Availability</dt>
              <dd className="availability-status">
                <span className="status-dot" aria-hidden="true" />
                Open for Junior QA / SDET Roles, Full-Time & OJT
              </dd>
            </div>
            <div className="hero-footnote-item">
              <dt>Base</dt>
              <dd>Based in Olongapo City, Philippines</dd>
            </div>
          </dl>
        </div>

        <div className="hero-art" aria-label="Adriaan Dimate, software and QA">
          <div className="portrait-stage">
            <div className="portrait-backing" aria-hidden="true" />
            <div className="portrait-card">
              <div className="portrait-top">
                <span>Field note / 001</span>
                <span className="portrait-top-line" aria-hidden="true" />
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
                <div className="portrait-identity">
                  <strong>Adriaan M. Dimate</strong>
                  <span>QA Engineer & SDET · Aviation</span>
                </div>
                <em className="portrait-motto">code meets cockpit</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollFade>
  )
}
