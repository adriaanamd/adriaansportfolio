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
      "Authored 35+ Cypress E2E and manual test cases for the church website, achieving zero critical bugs at launch.",
      "Designed and executed 20 Playwright test plans covering UI, API, and WebSocket integrations for the OBS–ProPresenter Remote Control system.",
      "Diagnosed and resolved 25+ production bugs across web and livestream systems, documenting recurring defects.",
      "Rebuilt the church website from legacy Weebly into a custom full-stack platform serving 7 ministries, with end-to-end SDLC ownership.",
      "Engineered and deployed a real-time OBS–ProPresenter remote control system using WebSockets.",
      "Developed an automated camera-monitoring agent that reduced livestream misclicks by 20%.",
      "Supported 140+ live productions using OBS, ProPresenter, and multistreaming infrastructure, identifying and correcting 90+ pre-broadcast errors.",
      "Collaborated with a 7–13-member production team to maintain reliable weekly operations.",
    ],
    tags: [
      "Cypress",
      "Playwright",
      "WebSockets",
      "SDET",
      "Full stack",
      "OBS & ProPresenter",
    ],
  },
  {
    dates: "May 2023 — Present",
    role: "Software Development Engineer in Test and Bookkeeper",
    company: "TDA Car Rental · Olongapo City, Philippines",
    bullets: [
      "Engineered a custom offline desktop application for internal financial management, automating the creation of billings, quotations, and receipts to save up to 15 minutes of manual preparation time per document.",
      "Designed and authored 20 Vitest test cases (E2E, Regression, Unit) targeting the billing, internal pdf signatures, quotation, and acknowledgement receipt modules, ensuring reliable performance and accurate data rendering.",
      "Prepared more than 180 client billings and recorded receipts, billing statements, and customer rates for financial monitoring.",
      "Processed 15 percentage and income tax returns via the BIR eBIRForms system.",
      "Performed basic bookkeeping and responded to 100+ customer inquiries via email.",
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
