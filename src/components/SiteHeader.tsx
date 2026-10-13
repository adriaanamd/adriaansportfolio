import ArrowIcon from "./ArrowIcon"

export default function SiteHeader({ archive = false }: { archive?: boolean }) {
  return (
    <header className="site-header glass">
      <a href={archive ? "./" : "#top"} className="brand">
        Adriaan’s Journal
      </a>
      {archive ? (
        <nav aria-label="Project archive navigation">
          <a href="./">Portfolio</a>
          <a href="?page=qa-project-dump">QA dump</a>
          <a href="?page=engineering-project-dump">SE dump</a>
        </nav>
      ) : (
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
      <a href={archive ? "./#contact" : "#contact"} className="nav-cta">
        Let’s talk <ArrowIcon />
      </a>
    </header>
  )
}
