const MINIMUM_NODE_VERSION = Object.freeze({ major: 24, minor: 22, patch: 1 })

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

  if (!parsed || parsed.major !== MINIMUM_NODE_VERSION.major) {
    return false
  }

  if (parsed.minor !== MINIMUM_NODE_VERSION.minor) {
    return parsed.minor > MINIMUM_NODE_VERSION.minor
  }

  return parsed.patch >= MINIMUM_NODE_VERSION.patch
}

export function assertSupportedNodeVersion(version = process.versions.node) {
  if (!isSupportedNodeVersion(version)) {
    throw new Error(
      `Unsupported Node.js version ${version}. Use Node.js 24.22.1 or a newer patched 24.x release.`,
    )
  }
}
