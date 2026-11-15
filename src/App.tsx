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
  const { searchStr } = useLocation()
  const page = new URLSearchParams(searchStr).get("page")

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
