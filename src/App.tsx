import { useEffect, useRef } from "react"
import { useLocation } from "@tanstack/react-router"

import ArchivePage from "./components/ArchivePage"
import SiteHeader from "./components/SiteHeader"
import { significantArchiveProjects } from "./data/projects/archive"
import About from "./pages/about"
import Contact from "./pages/contact"
import Hero from "./pages/hero"
import Projects from "./pages/projects"
import Stack from "./pages/stack"
import WorkExperience from "./pages/work-experience"

export default function App() {
  const { searchStr, hash } = useLocation()
  const page = new URLSearchParams(searchStr).get("page")
  const prevPageRef = useRef(page)

  useEffect(() => {
    if (prevPageRef.current === page) {
      return
    }
    prevPageRef.current = page

    const targetId = hash.replace(/^#/, "")
    if (page !== "archive" && targetId) {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "instant" })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" })
  }, [page, hash])

  if (page === "archive") {
    return <ArchivePage projects={significantArchiveProjects} />
  }

  return (
    <main>
      <SiteHeader />
      <Hero />
      <Projects />
      <Stack />
      <WorkExperience />
      <About />
      <Contact />
    </main>
  )
}
