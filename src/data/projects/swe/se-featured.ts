import type { FeaturedProject } from "../types"
import examHubImage from "../../../project-assets/swe/examhub-swe.jpg"
import meatLensImage from "../../../project-assets/swe/meatlens-swe.png"
import myLightDrugstoreImage from "../../../project-assets/swe/mylightdrugstore-swe.png"

export const engineeringFeaturedProjects: FeaturedProject[] = [
  {
    title: "ExamHub",
    image: examHubImage,
    eyebrow: "Software engineering · Education",
    description:
      "A modern exam management system with real-time monitoring, anti-cheat countermeasures, and centralized student performance analytics.",
    tags: ["TypeScript", "Full stack", "Real-time"],
    link: "https://github.com/Thalanas110/ExamHub",
    accent: "wine",
  },
  {
    title: "MeatLens",
    image: meatLensImage,
    eyebrow: "Software engineering · Thesis",
    description:
      "A freshness inspection platform designed to help users scan and assess meat. An active thesis project joining a practical interface with classification workflows.",
    tags: ["TypeScript", "React", "Computer vision"],
    link: "https://github.com/MeatLens-Freshness-Inspector/botchabuster",
    accent: "sage",
  },
  {
    title: "MyLightDrugstore",
    image: myLightDrugstoreImage,
    eyebrow: "Software engineering · Legacy system",
    description:
      "A pharmacy inventory and sales system covering medicine cataloging, stock movement, transaction history, and staff workflows.",
    tags: ["PHP", "Inventory", "Full stack"],
    link: "https://github.com/Thalanas110/MyLightDrugstore",
    accent: "sand",
  },
]
