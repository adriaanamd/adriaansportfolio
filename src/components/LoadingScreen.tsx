import { useEffect, useState } from "react"

export function LoadingScreen({ isExiting = false }: { isExiting?: boolean }) {
  return (
    <div
      className={`loading-screen${isExiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loading-content">
        <span className="loading-brand">Adriaan’s Journal</span>
        <div className="loading-bar-track" aria-hidden="true">
          <div
            className={`loading-bar-fill${isExiting ? " is-complete" : ""}`}
          />
        </div>
        <p className="loading-status">
          <span className="loading-dot" aria-hidden="true" />
          Loading
        </p>
      </div>
    </div>
  )
}

export function AppLoadingGate() {
  const [stage, setStage] = useState<"loading" | "exiting" | "hidden">(
    "loading",
  )

  useEffect(() => {
    let isCancelled = false
    const minDisplayMs = 420
    const fadeOutMs = 320
    const maxWaitMs = 1500
    const startTime = performance.now()

    const finishLoading = () => {
      if (isCancelled) return
      const elapsed = performance.now() - startTime
      const remaining = Math.max(0, minDisplayMs - elapsed)

      window.setTimeout(() => {
        if (isCancelled) return
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
      window.clearTimeout(fallbackTimer)
      window.removeEventListener("load", onWindowReady)
    }
  }, [])

  if (stage === "hidden") {
    return null
  }

  return <LoadingScreen isExiting={stage === "exiting"} />
}

export default LoadingScreen
