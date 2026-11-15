import type { FeaturedProject } from "../types"
import examHubImage from "../../../project-assets/swe/examhub-swe.jpg"
import mathVentureImage from "../../../project-assets/swe/mathventure-swe.png"
import meatLensImage from "../../../project-assets/swe/meatlens-swe.png"

export const engineeringFeaturedProjects: FeaturedProject[] = [
  {
    title: "ExamHub",
    image: examHubImage,
    eyebrow: "Software engineering · Education",
    description:
      "An automated Exam Management System designed for modern classrooms. Includes real-time monitoring, anti-cheat countermeasures, and a centralized dashboard for student performance analytics. Created as the final requirement for Frontend and Backend Electives.",
    tags: ["TypeScript", "Playwright", "React", "Tanstack Start", "PHP Vanilla", "MySQL"],
    link: "https://github.com/adriaanamd/ExamHub",
    accent: "wine",
  },
  {
    title: "MeatLens",
    image: meatLensImage,
    eyebrow: "Software engineering · Thesis",
    description:
      "A freshness inspection platform designed to help users scan and assess meat, built for meat inspectors of DTI-Zambales, the National Meat Inspection Service, and the Olongapo City Veterinary Office. An active thesis project joining a practical interface with classification workflows.",
    tags: ["TypeScript", "Playwright", "React", "Tanstack Start", "Supabase", "Deno", "PostgreSQL", "SQLite", "Express.js", "TensorFlow", "MobileNetV3-Small"],
    link: "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    liveDemo: "https://meatlensv2.netlify.app",
    paperLink: "/meatlens-research-paper.pdf",
    accent: "sage",
  },
  {
    title: "MathVenture",
    image: mathVentureImage,
    eyebrow: "Software Engineering · Educational Technology",
    description:
      "An interactive mathematics learning platform for kindergarten pupils, combining gamified activities, classroom management, and offline-first functionality to support engaging and accessible learning.",
    tags: ["TypeScript", "Vitest", "React", "Tanstack Start", "Supabase", "Deno", "PostgreSQL", "IndexedDB", "SQLite"],
    link: "https://github.com/adriaanamd/mathventure",
    liveDemo: "https://mathventureprototype1.netlify.app/",
    extraLinks: [
      {
        label: "Collaborator repo",
        url: "https://github.com/dmjm99125/mathventure",
      },
    ],
    accent: "sand",
  },
]
