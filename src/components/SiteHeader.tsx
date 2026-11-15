import { useEffect, useState } from "react"
import { Link } from "@tanstack/react-router"

import ArrowIcon from "./ArrowIcon"

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const archiveLinks: Array<{
  key: string
  label: string
  hash?: string
  search?: { page: string }
}> = [
  { key: "portfolio", label: "Portfolio" },
  { key: "featured-work", label: "Featured work", hash: "work" },
  { key: "archive", label: "Archive", search: { page: "archive" } },
]

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

  const navLabel = archive ? "Project archive navigation" : "Primary navigation"

  return (
    <header className={`site-header glass${menuOpen ? " is-open" : ""}`}>
      <div className="site-header-bar">
        {archive ? (
          <Link to="/" className="brand" onClick={closeMenu}>
            Adriaan’s Journal
          </Link>
        ) : (
          <a href="#top" className="brand" onClick={closeMenu}>
            Adriaan’s Journal
          </a>
        )}
        <nav aria-label={navLabel} className="desktop-nav">
          {archive
            ? archiveLinks.map((link) => (
                <Link
                  key={link.key}
                  to="/"
                  hash={link.hash}
                  search={link.search}
                >
                  {link.label}
                </Link>
              ))
            : links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
        </nav>
        <div className="site-header-actions">
          {archive ? (
            <Link to="/" hash="contact" className="nav-cta" onClick={closeMenu}>
              Let’s talk <ArrowIcon />
            </Link>
          ) : (
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Let’s talk <ArrowIcon />
            </a>
          )}
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
          {archive
            ? archiveLinks.map((link) => (
                <Link
                  key={link.key}
                  to="/"
                  hash={link.hash}
                  search={link.search}
                  onClick={closeMenu}
                >
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))
            : links.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                  <ArrowIcon />
                </a>
              ))}
        </div>
        {archive ? (
          <Link
            to="/"
            hash="contact"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Let’s talk <ArrowIcon />
          </Link>
        ) : (
          <a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>
            Let’s talk <ArrowIcon />
          </a>
        )}
      </nav>
    </header>
  )
}
