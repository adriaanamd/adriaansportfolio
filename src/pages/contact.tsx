import ArrowIcon from "../components/ArrowIcon"

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="eyebrow">06 · Contact</p>
        <h2>
          Have a QA opportunity in mind?
          <br />
          <em>Let’s make it fly.</em>
        </h2>
        <p>
          I’m actively seeking Junior QA and SDET opportunities—open to
          full-time junior roles, OJT placement, and testing challenges where
          precision, test automation, and product reliability matter.
        </p>
        <a href="mailto:aadimate55@gmail.com" className="button cream-button">
          aadimate55@gmail.com <ArrowIcon />
        </a>
        <div className="social-links">
          <a
            href="https://github.com/adriaanamd"
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
