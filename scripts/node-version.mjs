const SUPPORTED_MAJOR_FLOORS = Object.freeze({
  24: Object.freeze({ minor: 22, patch: 1 }),
  26: Object.freeze({ minor: 13, patch: 1 }),
})

function parseNodeVersion(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)/.exec(version)

  if (!match) {
    return null
  }

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  }
}

export function isSupportedNodeVersion(version) {
  const parsed = parseNodeVersion(version)
  const floor = parsed ? SUPPORTED_MAJOR_FLOORS[parsed.major] : undefined

  if (!parsed || !floor) {
    return false
  }

  if (parsed.minor !== floor.minor) {
    return parsed.minor > floor.minor
  }

  return parsed.patch >= floor.patch
}

export function assertSupportedNodeVersion(version = process.versions.node) {
  if (!isSupportedNodeVersion(version)) {
    throw new Error(
      `Unsupported Node.js version ${version}. Use Node.js 24.22.1+ (24.x) or 26.13.1+ (26.x).`,
    )
  }
}
