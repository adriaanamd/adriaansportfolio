export type ResumeVariant = "primary" | "secondary"

/**
 * Code-only switch between the primary (reduced) resume and the secondary (full) resume.
 * Change this value between "primary" and "secondary" to toggle the active resume PDF
 * and matching on-page work experience entries.
 */
export const ACTIVE_RESUME_VARIANT: ResumeVariant = "primary"

export const RESUME_PDF_PATHS: Record<ResumeVariant, string> = {
  primary: "/adriaan-resume-reduced.pdf",
  secondary: "/final%20adriaan%20resume.pdf",
}

export const activeResumeHref = RESUME_PDF_PATHS[ACTIVE_RESUME_VARIANT]
