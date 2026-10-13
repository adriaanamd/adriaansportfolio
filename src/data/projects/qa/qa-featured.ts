import type { FeaturedProject } from "../types"

export const qaFeaturedProjects: FeaturedProject[] = [
  {
    title: "ExamHub integrity testing",
    eyebrow: "QA case study · Web application",
    description:
      "A risk-based test strategy for real-time monitoring, exam workflows, anti-cheat controls, and the edge cases that appear under classroom pressure.",
    tags: ["Playwright", "Test design", "Regression"],
    link: "https://github.com/Thalanas110/ExamHub",
    accent: "wine",
  },
  {
    title: "SnapBooth release QA",
    eyebrow: "QA case study · WebSocket application",
    description:
      "Cross-browser and exploratory testing for camera permissions, shared sessions, interrupted connections, and memory-making flows on mobile.",
    tags: ["Cypress", "Exploratory QA", "WebSocket"],
    link: "https://snapbooth-main.netlify.app/",
    accent: "sage",
  },
  {
    title: "MyLightDrugstore audit",
    eyebrow: "QA case study · Legacy system",
    description:
      "A structured pass through a legacy PHP application, focused on critical transaction paths, data integrity, reproducible defects, and safe regression coverage.",
    tags: ["Manual QA", "Postman", "Bug reports"],
    link: "https://github.com/Thalanas110/MyLightDrugstore",
    accent: "sand",
  },
]
