import ArrowIcon from "../components/ArrowIcon"

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="eyebrow">05 · Contact</p>
        <h2>
          Have a project in mind?
          <br />
          <em>Let’s make it fly.</em>
        </h2>
        <p>
          I’m open to software engineering, QA, and collaborative opportunities
          where thoughtful work and dependable execution matter.
        </p>
        <a href="mailto:aadimate55@gmail.com" className="button cream-button">
          aadimate55@gmail.com <ArrowIcon />
        </a>
        <div className="social-links">
          <a
            href="https://github.com/Thalanas110"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/adriaan-dimate-390039260"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://facebook.com/philippine8129heavy"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
        </div>
      </div>
      <footer>
        <a href="#top" className="brand">
          Adriaan’s Journal
        </a>
        <span>Olongapo City, Philippines</span>
        <span>© 2026 Adriaan M. Dimate</span>
      </footer>
    </section>
  )
}
