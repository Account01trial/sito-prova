import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Use undefined fallback only if needed to avoid hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mql.addEventListener("change", onChange)
    
    // We queue the state update to avoid the React hook warning
    queueMicrotask(() => {
      setIsMobile(mql.matches)
    })
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
