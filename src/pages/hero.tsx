import ArrowIcon from "../components/ArrowIcon"

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
            I build for the
            <em> real world.</em>
          </h1>
          <p className="hero-intro">
            I’m Adriaan—a software engineer and quality assurance practitioner
            pairing thoughtful interfaces with testing that holds up under
            turbulence.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button primary">
              Explore my work <ArrowIcon />
            </a>
            <a href="#about" className="button secondary">
              More about me
            </a>
          </div>
          <div className="hero-footnote">
            <span>Based in Olongapo City, Philippines</span>
            <span>Available for meaningful work</span>
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
                src="/picture%20modified%20with%20ai%20for%20bg%20and%20clarity.png"
                alt="Adriaan M. Dimate"
              />
              <div className="portrait-grid" />
            </div>
            <div className="portrait-caption">
              <strong>Adriaan M. Dimate</strong>
              <span>Software · QA · Aviation</span>
            </div>
          </div>
          <div className="floating-note note-one">
            <span className="note-icon">✓</span>
            Tested with care
          </div>
          <div className="floating-note note-two">
            <span className="note-icon">↗</span>
            Cleared for takeoff
          </div>
          <div className="scribble">code meets cockpit</div>
        </div>
      </section>

      <div className="marquee" aria-label="Areas of practice">
        <div>
          <span>Software engineering</span>
          <i>✦</i>
          <span>Quality assurance</span>
          <i>✦</i>
          <span>Test automation</span>
          <i>✦</i>
          <span>Thoughtful interfaces</span>
          <i>✦</i>
        </div>
      </div>
    </>
  )
}
