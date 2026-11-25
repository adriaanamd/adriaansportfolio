import { ACTIVE_RESUME_VARIANT, type ResumeVariant } from "../resume"

export type ExperienceItem = {
  dates: string
  role: string
  company: string
  text?: string
  bullets?: string[]
  tags: string[]
}

export const primaryExperience: ExperienceItem[] = [
  {
    dates: "Jun 2025 — Present",
    role: "Volunteer Software Development Engineer in Test (SDET)",
    company: "I Care Center · Olongapo City, Philippines",
    bullets: [
      "Authored and maintained 205 automated tests (158 Deno unit/integration and 47 Cypress E2E) for the church web platform.",
      "Designed and executed 30 Playwright test plans validating UI flows, REST APIs, and WebSocket integrations for the OBS–ProPresenter Remote Control system.",
      "Rebuilt the church website from legacy Weebly into a custom full-stack platform serving 7 ministries with end-to-end SDLC ownership.",
      "Diagnosed and resolved 25+ production defects across web and media workflows, documenting recurring defects and implementing preventive fixes.",
    ],
    tags: ["SDET", "Cypress", "Playwright", "Deno", "WebSockets", "Full stack"],
  },
  {
    dates: "Jan 2024 — Present",
    role: "Production Staff & Live Operations",
    company: "I Care Center · Olongapo City, Philippines",
    bullets: [
      "Operated and supported 140+ live productions using OBS, ProPresenter, and multistreaming infrastructure.",
      "Identified and corrected 90+ pre-broadcast errors to maintain high-reliability livestream delivery.",
      "Developed an internal automated camera-monitoring agent that reduced livestream operator misclicks by 20%.",
      "Collaborated with a 9–15-member production crew to maintain dependable weekly broadcast operations and continued website uptime.",
    ],
    tags: [
      "OBS & ProPresenter",
      "Live Production",
      "Automation",
      "Broadcast Operations",
    ],
  },
  {
    dates: "May 2023 — Present",
    role: "Bookkeeper",
    company: "TDA Car Rental · Olongapo City, Philippines",
    bullets: [
      "Prepared more than 250 client billings and recorded receipts, billing statements, and customer rates for financial monitoring.",
      "Processed 15 percentage and income tax returns via the BIR eBIRForms system.",
      "Performed basic bookkeeping and responded to 100+ customer inquiries via email.",
    ],
    tags: [
      "Bookkeeping",
      "Financial monitoring",
      "BIR eBIRForms",
      "Client billing",
    ],
  },
]

export const secondaryExperience: ExperienceItem[] = [
  {
    dates: "Jun 2025 — Present",
    role: "Volunteer Software Development Engineer in Test (SDET)",
    company: "I Care Center · Olongapo City, Philippines",
    bullets: [
      "Authored and maintained 205 automated tests (158 Deno unit/integration and 47 Cypress E2E) for the church web platform.",
      "Designed and executed 20 Playwright test plans validating UI flows, REST APIs, and WebSocket integrations for the OBS–ProPresenter Remote Control system.",
      "Rebuilt the church website from legacy Weebly into a custom full-stack platform serving 7 ministries with end-to-end SDLC ownership.",
      "Diagnosed and resolved 25+ production defects across web and media workflows, establishing structured defect triage.",
    ],
    tags: ["SDET", "Cypress", "Playwright", "Deno", "WebSockets", "Full stack"],
  },
  {
    dates: "Jan 2024 — Present",
    role: "Production Staff & Live Operations",
    company: "I Care Center · Olongapo City, Philippines",
    bullets: [
      "Operated and supported 140+ live productions using OBS, ProPresenter, and multistreaming infrastructure.",
      "Identified and corrected 90+ pre-broadcast errors to maintain high-reliability livestream delivery.",
      "Engineered an automated camera-monitoring agent that reduced livestream operator misclicks by 20%.",
      "Collaborated with a 7–13-member production crew to maintain dependable weekly broadcast operations.",
    ],
    tags: [
      "OBS & ProPresenter",
      "Live Production",
      "Automation",
      "Broadcast Operations",
    ],
  },
  {
    dates: "May 2023 — Present",
    role: "Software Development Engineer in Test and Bookkeeper",
    company: "TDA Car Rental · Olongapo City, Philippines",
    bullets: [
      "Engineered a custom offline desktop application for internal financial management, cutting document preparation time by up to 15 minutes per transaction.",
      "Designed and authored 20 Vitest test suites (E2E, regression, unit) validating billing workflows, PDF signatures, and data accuracy.",
      "Managed billing records and customer rate calculations for 180+ commercial vehicle clients.",
      "Filed 15 percentage and income tax returns via the BIR eBIRForms system and resolved 100+ customer inquiries.",
    ],
    tags: [
      "Test automation",
      "Vitest",
      "Desktop application",
      "Financial systems",
      "Bookkeeping",
    ],
  },
]

export const experienceByVariant: Record<ResumeVariant, ExperienceItem[]> = {
  primary: primaryExperience,
  secondary: secondaryExperience,
}

export const experience: ExperienceItem[] =
  experienceByVariant[ACTIVE_RESUME_VARIANT]
