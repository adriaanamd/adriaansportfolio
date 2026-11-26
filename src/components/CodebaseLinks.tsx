import { useEffect, useId, useRef, useState } from "react"

import type { ProjectLink } from "../data/projects/types"
import ArrowIcon from "./ArrowIcon"
import ExternalIcon from "./ExternalIcon"

type CodebaseLinksProps = {
  primaryUrl?: string
  primaryLabel?: string
  singleLabel: string
  multiLabel?: string
  extraLinks?: ProjectLink[]
  variant: "card" | "archive" | "drawer"
  singleIcon?: "external" | "arrow"
  onOpenChange?: (open: boolean) => void
}

function buildCodebaseLinks(
  primaryUrl: string | undefined,
  primaryLabel: string | undefined,
  extraLinks: ProjectLink[] | undefined,
): ProjectLink[] {
  const links: ProjectLink[] = []
  if (primaryUrl) {
    links.push({
      label: primaryLabel ?? "Main repository",
      url: primaryUrl,
    })
  }
  if (extraLinks) {
    for (const extra of extraLinks) {
      links.push(extra)
    }
  }
  return links
}

function formatRepoSlug(url: string): string | null {
  try {
    const parsed = new URL(url)
    const parts = parsed.pathname.replace(/^\/+|\/+$/g, "").split("/")
    if (parsed.hostname === "github.com" && parts.length >= 2) {
      return `${parts[0]}/${parts[1]}`
    }
    return parsed.hostname + parsed.pathname
  } catch {
    return null
  }
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`codebase-chevron${open ? " is-open" : ""}`}
    >
      <path d="M5.5 7.75 10 12.25l4.5-4.5" />
    </svg>
  )
}

export default function CodebaseLinks({
  primaryUrl,
  primaryLabel,
  singleLabel,
  multiLabel = "View code",
  extraLinks,
  variant,
  singleIcon = "external",
  onOpenChange,
}: CodebaseLinksProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const onOpenChangeRef = useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange
  const menuId = useId()

  const items = buildCodebaseLinks(primaryUrl, primaryLabel, extraLinks)

  useEffect(() => {
    onOpenChangeRef.current?.(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopImmediatePropagation()
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("keydown", handleKeyDown, true)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [isOpen])

  if (items.length === 0) {
    return null
  }

  const singleClass =
    variant === "card"
      ? "text-link"
      : variant === "archive"
        ? "dump-open"
        : "button secondary case-cta-link"

  if (items.length === 1) {
    return (
      <a
        href={items[0].url}
        target="_blank"
        rel="noreferrer"
        className={singleClass}
      >
        {singleLabel}{" "}
        {singleIcon === "arrow" ? <ArrowIcon /> : <ExternalIcon />}
      </a>
    )
  }

  const placementClass = variant === "drawer" ? "is-down" : "is-up"
  const triggerClass = `${singleClass} codebase-dropdown-trigger${
    isOpen ? " is-open" : ""
  }`

  return (
    <div ref={containerRef} className={`codebase-dropdown variant-${variant}`}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{multiLabel}</span>
        <span className="codebase-count">{items.length}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={`${multiLabel} repositories`}
          className={`codebase-dropdown-menu ${placementClass}`}
        >
          <div className="codebase-menu-header">
            {items.length} repositories
          </div>
          {items.map((item) => {
            const slug = formatRepoSlug(item.url)
            return (
              <a
                key={item.url}
                role="menuitem"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="codebase-dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                <span className="codebase-item-text">
                  <span className="codebase-item-label">{item.label}</span>
                  {slug && <span className="codebase-item-slug">{slug}</span>}
                </span>
                <ExternalIcon />
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
