import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from "react"

type ScrollState = "visible" | "exited-top" | "exited-bottom"

type ScrollFadeProps<T extends ElementType = "div",> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

type ObserverCallback = (entry: IntersectionObserverEntry) => void

const callbacks = new WeakMap<Element, ObserverCallback>()
let sharedObserver: IntersectionObserver | null = null

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = callbacks.get(entry.target)
          if (cb) {
            cb(entry)
          }
        }
      },
      {
        root: null,
        rootMargin: "-12% 0px -10% 0px",
        threshold: [0, 0.05],
      },
    )
  }

  return sharedObserver
}

export function ScrollFade<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: ScrollFadeProps<T>) {
  const Component = (as ?? "div") as ElementType
  const elementRef = useRef<HTMLElement | null>(null)
  const stateRef = useRef<ScrollState>("visible")

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const setScrollState = (next: ScrollState) => {
      stateRef.current = next
      el.dataset.scrollState = next
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setScrollState("visible")
      return
    }

    const observer = getSharedObserver()
    if (!observer) {
      setScrollState("visible")
      return
    }

    const updateVisibility = (
      isIntersecting: boolean,
      top: number,
      rootTop: number,
    ) => {
      if (isIntersecting) {
        setScrollState("visible")
      } else if (top <= rootTop) {
        setScrollState("exited-top")
      } else {
        setScrollState("exited-bottom")
      }
    }

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    const topBoundary = vh * 0.12
    const bottomBoundary = vh * 0.9
    const initiallyVisible =
      rect.bottom > topBoundary && rect.top < bottomBoundary

    updateVisibility(initiallyVisible, rect.top, topBoundary)

    callbacks.set(el, (entry) => {
      const rootTop =
        entry.rootBounds?.top ??
        (window.innerHeight || document.documentElement.clientHeight) * 0.12
      updateVisibility(
        entry.isIntersecting,
        entry.boundingClientRect.top,
        rootTop,
      )
    })

    observer.observe(el)

    return () => {
      callbacks.delete(el)
      observer.unobserve(el)
    }
  }, [])

  const combinedClassName = `scroll-fade${className ? ` ${className}` : ""}`

  return (
    <Component
      ref={elementRef}
      className={combinedClassName}
      data-scroll-state={stateRef.current}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default ScrollFade
