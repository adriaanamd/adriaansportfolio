import { useLocation } from "@tanstack/react-router"

import ArchivePage from "./components/ArchivePage"
import SiteHeader from "./components/SiteHeader"
import { qaArchive } from "./data/projects/qa/qa-dump"
import { engineeringArchive } from "./data/projects/swe/se-dump"
import About from "./pages/about"
import Contact from "./pages/contact"
import Hero from "./pages/hero"
import Projects from "./pages/projects"
import Stack from "./pages/stack"
import WorkExperience from "./pages/work-experience"

export default function App() {
  const { searchStr } = useLocation()
  const page = new URLSearchParams(searchStr).get("page")

  if (page === "qa-project-dump") {
    return <ArchivePage type="qa" projects={qaArchive} />
  }

  if (page === "engineering-project-dump") {
    return <ArchivePage type="engineering" projects={engineeringArchive} />
  }

  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <Stack />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  )
}
