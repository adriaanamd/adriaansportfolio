import { useEffect, useState } from "react"

type StepIcon = "resume" | "photo" | "intro" | "stack" | "experience" | "polish"

interface ThinkingStep {
  id: string
  label: string
  detail: string
  durationLabel: string
  startMs: number
  endMs: number
  icon: StepIcon
}

export const THINKING_STEPS: ThinkingStep[] = [
  {
    id: "resume",
    label: "Reading the resume",
    detail: "Parsing QA & SDET credentials",
    durationLabel: "0.4s",
    startMs: 0,
    endMs: 420,
    icon: "resume",
  },
  {
    id: "photo",
    label: "Placing the field note portrait",
    detail: "Framing Field note / 001",
    durationLabel: "0.4s",
    startMs: 420,
    endMs: 850,
    icon: "photo",
  },
  {
    id: "intro",
    label: "Writing the journal intro",
    detail: "Drafting headline & cockpit motto",
    durationLabel: "0.4s",
    startMs: 850,
    endMs: 1280,
    icon: "intro",
  },
  {
    id: "stack",
    label: "Checking the test & dev stack",
    detail: "Playwright, Cypress, Vitest, React",
    durationLabel: "0.4s",
    startMs: 1280,
    endMs: 1700,
    icon: "stack",
  },
  {
    id: "experience",
    label: "Tuning projects & experience",
    detail: "Indexing QA & engineering archives",
    durationLabel: "0.4s",
    startMs: 1700,
    endMs: 2100,
    icon: "experience",
  },
  {
    id: "polish",
    label: "Polishing the pixels",
    detail: "Ready for takeoff",
    durationLabel: "0.3s",
    startMs: 2100,
    endMs: 2400,
    icon: "polish",
  },
]

const TOTAL_THINKING_MS = 2400

function StepGlyph({ icon }: { icon: StepIcon }) {
  switch (icon) {
    case "resume":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    case "photo":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )
    case "intro":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    case "stack":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    case "experience":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    case "polish":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}

export function LoadingScreen({
  isExiting = false,
  elapsedMs = 1350,
}: {
  isExiting?: boolean
  elapsedMs?: number
}) {
  const clampedMs = Math.min(TOTAL_THINKING_MS, Math.max(0, elapsedMs))
  const isCompleted = isExiting || clampedMs >= TOTAL_THINKING_MS
  const secondsDisplay = (clampedMs / 1000).toFixed(1)
  const progressPercent = Math.min(
    100,
    Math.round((clampedMs / TOTAL_THINKING_MS) * 100),
  )

  const activeStep =
    THINKING_STEPS.find(
      (step) => clampedMs >= step.startMs && clampedMs < step.endMs,
    ) ?? THINKING_STEPS[THINKING_STEPS.length - 1]

  return (
    <div
      className={`loading-screen${isExiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loading-chat-shell">
        <div className="loading-user-row">
          <span className="loading-user-meta">Visitor · Prompt</span>
          <div className="loading-user-bubble">
            Introduce Adriaan M. Dimate and assemble his QA &amp; SDET journal.
          </div>
        </div>

        <div className="loading-agent-card glass">
          <div className="loading-agent-top">
            <div className="loading-agent-identity">
              <span className="loading-agent-avatar" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
                  <path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
                </svg>
              </span>
              <div className="loading-agent-titles">
                <span className="loading-brand">Adriaan’s Journal</span>{" "}
                <span className="loading-agent-badge">Field Agent · v2.6</span>
              </div>
            </div>
            <span className="loading-status">
              <span
                className={`loading-dot${isCompleted ? " is-complete" : ""}`}
                aria-hidden="true"
              />
              {isCompleted ? "Ready" : "Reasoning"}
            </span>
          </div>

          <div className="loading-trace-box">
            <div className="loading-trace-header">
              <div className="loading-trace-title">
                <span
                  className={`loading-trace-sparkle${
                    isCompleted ? " is-complete" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
                  </svg>
                </span>
                <span className="loading-trace-label">
                  {isCompleted
                    ? "Thought for 2.4s"
                    : `Thinking ${secondsDisplay}s`}
                </span>
              </div>
              <span className="loading-trace-chevron" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>

            <ol className="loading-trace-steps" aria-label="AI reasoning steps">
              {THINKING_STEPS.map((step) => {
                const isDone = isCompleted || clampedMs >= step.endMs
                const isActive =
                  !isDone && clampedMs >= step.startMs && clampedMs < step.endMs
                const stateClass = isDone
                  ? "is-done"
                  : isActive
                    ? "is-active"
                    : "is-pending"

                return (
                  <li
                    key={step.id}
                    className={`loading-trace-step ${stateClass}`}
                  >
                    <span className="loading-step-indicator" aria-hidden="true">
                      {isDone ? (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          className="loading-step-check"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : isActive ? (
                        <span className="loading-step-spinner" />
                      ) : (
                        <span className="loading-step-bullet" />
                      )}
                    </span>
                    <span className="loading-step-icon" aria-hidden="true">
                      <StepGlyph icon={step.icon} />
                    </span>
                    <span className="loading-step-text">{step.label}</span>{" "}
                    <span className="loading-step-time">
                      {isDone
                        ? step.durationLabel
                        : isActive
                          ? `${Math.max(0.1, (clampedMs - step.startMs) / 1000).toFixed(1)}s`
                          : "—"}
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="loading-stream-preview" aria-hidden="true">
            <span className="loading-stream-prefix">&gt;</span>{" "}
            <span className="loading-stream-text">
              {isCompleted
                ? "Journal ready — opening Adriaan’s portfolio..."
                : activeStep.detail}
            </span>
            <span className="loading-stream-cursor" />
          </div>

          <div className="loading-bar-track" aria-hidden="true">
            <div
              className={`loading-bar-fill${isCompleted ? " is-complete" : ""}`}
              style={{ width: isCompleted ? "100%" : `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppLoadingGate() {
  const [stage, setStage] = useState<"loading" | "exiting" | "hidden">(
    "loading",
  )
  const [elapsedMs, setElapsedMs] = useState(0)

  useEffect(() => {
    let isCancelled = false
    const minDisplayMs = TOTAL_THINKING_MS
    const fadeOutMs = 360
    const maxWaitMs = 3200
    const startTime = performance.now()

    const tickInterval = window.setInterval(() => {
      if (isCancelled) return
      const now = performance.now()
      const nextElapsed = Math.min(TOTAL_THINKING_MS, now - startTime)
      setElapsedMs(nextElapsed)
      if (nextElapsed >= TOTAL_THINKING_MS) {
        window.clearInterval(tickInterval)
      }
    }, 60)

    const finishLoading = () => {
      if (isCancelled) return
      const elapsed = performance.now() - startTime
      const remaining = Math.max(0, minDisplayMs - elapsed)

      window.setTimeout(() => {
        if (isCancelled) return
        setElapsedMs(TOTAL_THINKING_MS)
        setStage("exiting")
        window.setTimeout(() => {
          if (isCancelled) return
          setStage("hidden")
        }, fadeOutMs)
      }, remaining)
    }

    const onWindowReady = () => {
      if (document.fonts?.ready) {
        Promise.race([
          document.fonts.ready,
          new Promise((resolve) => window.setTimeout(resolve, 400)),
        ]).then(finishLoading)
      } else {
        finishLoading()
      }
    }

    const fallbackTimer = window.setTimeout(finishLoading, maxWaitMs)

    if (document.readyState === "complete") {
      onWindowReady()
    } else {
      window.addEventListener("load", onWindowReady, { once: true })
    }

    return () => {
      isCancelled = true
      window.clearInterval(tickInterval)
      window.clearTimeout(fallbackTimer)
      window.removeEventListener("load", onWindowReady)
    }
  }, [])

  if (stage === "hidden") {
    return null
  }

  return <LoadingScreen isExiting={stage === "exiting"} elapsedMs={elapsedMs} />
}

export default LoadingScreen
