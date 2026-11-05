export type ExperienceItem = {
  dates: string
  role: string
  company: string
  text?: string
  bullets?: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    dates: "Jan 2024 — Present",
    role: "Volunteer Software Development Engineer in Test (SDET) and Production Staff",
    company: "I Care Center · Olongapo City, Philippines",
    bullets: [
      "Authored and maintained 205 automated tests (158 Deno and 47 Cypress E2E) for the church website, strengthening regression coverage and production reliability.",
      "Designed and executed 20 Playwright test plans covering UI, API, and WebSocket integrations for the OBS–ProPresenter Remote Control system.",
      "Rebuilt the church website from legacy Weebly into a custom full-stack platform serving 7 ministries, with end-to-end SDLC ownership.",
      "Operated and supported 140+ live productions using OBS, ProPresenter, and multistreaming infrastructure—catching 90+ pre-broadcast errors and developing an automated camera-monitoring agent that reduced livestream misclicks by 20%.",
    ],
    tags: [
      "Deno",
      "Cypress",
      "Playwright",
      "WebSockets",
      "SDET",
      "Live Production",
      "OBS & ProPresenter",
    ],
  },
  {
    dates: "May 2023 — Present",
    role: "Software Development Engineer in Test and Bookkeeper",
    company: "TDA Car Rental · Olongapo City, Philippines",
    bullets: [
      "Engineered a custom offline desktop application for internal financial management, cutting document preparation time by up to 15 minutes per transaction.",
      "Designed and authored 20 Vitest test suites (E2E, regression, unit) validating billing workflows, PDF signatures, and data accuracy.",
      "Managed billing records for 180+ clients and processed government tax compliance filings via the BIR eBIRForms system.",
    ],
    tags: [
      "Vitest",
      "Test automation",
      "Desktop application",
      "Financial systems",
      "Bookkeeping",
    ],
  },
]
