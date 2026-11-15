import { useEffect, useState } from "react"

import ArrowIcon from "./ArrowIcon"

export default function SiteHeader({ archive = false }: { archive?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const links = archive
    ? [
        { href: "./", label: "Portfolio" },
        { href: "?page=qa-project-dump", label: "QA dump" },
        { href: "?page=engineering-project-dump", label: "SE dump" },
      ]
    : [
        { href: "#work", label: "Work" },
        { href: "#stack", label: "Stack" },
        { href: "#experience", label: "Experience" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
      ]

  const navLabel = archive ? "Project archive navigation" : "Primary navigation"
  const ctaHref = archive ? "./#contact" : "#contact"

  return (
    <header className={`site-header glass${menuOpen ? " is-open" : ""}`}>
      <div className="site-header-bar">
        <a href={archive ? "./" : "#top"} className="brand" onClick={closeMenu}>
          Adriaan’s Journal
        </a>
        <nav aria-label={navLabel} className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="site-header-actions">
          <a href={ctaHref} className="nav-cta" onClick={closeMenu}>
            Let’s talk <ArrowIcon />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={`${navLabel} mobile`}
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
      >
        <div className="mobile-nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
        <a href={ctaHref} className="mobile-nav-cta" onClick={closeMenu}>
          Let’s talk <ArrowIcon />
        </a>
      </nav>
    </header>
  )
}
