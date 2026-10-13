import type { FeaturedProject } from "../types"
import examHubImage from "../../../project-assets/qa/examhub-qa.png"
import meatLensImage from "../../../project-assets/qa/meatlens-qa.png"
import myLightDrugstoreImage from "../../../project-assets/qa/mylightdrugstore-qa.png"

export const qaFeaturedProjects: FeaturedProject[] = [
  {
    title: "ExamHub integrity testing",
    image: examHubImage,
    eyebrow: "QA case study · Web application",
    description:
      "An automated Exam Management System designed for modern classrooms. Includes real-time monitoring, anti-cheat countermeasures, and a centralized dashboard for student performance analytics. Created as the final requirement for Frontend and Backend Electives.",
    tags: ["Playwright", "Test design", "Regression"],
    link: "https://github.com/Thalanas110/ExamHub",
    accent: "wine",
  },
  {
    title: "MeatLens model acceptance",
    image: meatLensImage,
    eyebrow: "QA case study · Classification workflow",
    description:
      "A structured acceptance pass for the inspection workflow, focused on input validation, classification confidence, and evidence around edge cases.",
    tags: ["Exploratory QA", "Data validation", "Acceptance"],
    link: "https://github.com/MeatLens-Freshness-Inspector/botchabuster",
    accent: "sage",
  },
  {
    title: "MyLightDrugstore audit",
    image: myLightDrugstoreImage,
    eyebrow: "QA case study · Legacy system",
    description:
      "A structured pass through a legacy PHP application that is refactored by me, focused on critical transaction paths, data integrity, reproducible defects, and safe regression coverage.",
    tags: ["Manual QA", "Postman", "Bug reports"],
    link: "https://github.com/Thalanas110/MyLightDrugstore",
    accent: "sand",
  },
]
