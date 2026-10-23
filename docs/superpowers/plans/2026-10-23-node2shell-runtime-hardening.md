# Node2Shell Runtime Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure the portfolio only builds and runs with patched Node.js 24.x releases beginning at 24.22.1.

**Architecture:** Keep the runtime policy in `package.json`, `.mise.toml`, and `.nvmrc`, and centralize executable enforcement in a small dependency-free module under `scripts/`. Package lifecycle hooks invoke the same assertion before development, build, Vercel build, preview, and start commands.

**Tech Stack:** Node.js 24.22.1, Node built-in `node:test`, pnpm via Corepack, Vite, TanStack Start, oxfmt.

## Global Constraints

- The minimum supported runtime is `24.22.1`.
- The allowed runtime range is `>=24.22.1 <25`.
- Do not alter application behavior or add runtime dependencies.
- Preserve the existing build and formatting checks.

---

### Task 1: Add the tested Node.js version policy

**Files:**
- Create: `scripts/node-version.test.mjs`
- Create: `scripts/node-version.mjs`
- Create: `scripts/check-node-version.mjs`
- Modify: `package.json`

**Interfaces:**
- `isSupportedNodeVersion(version)` returns a boolean for the exact runtime policy.
- `assertSupportedNodeVersion(version = process.versions.node)` throws a clear error for unsupported versions and returns `undefined` for supported versions.
- `node scripts/check-node-version.mjs` validates the current process runtime.

- [x] **Step 1: Write the failing tests**

Create `scripts/node-version.test.mjs`:

```js
import assert from "node:assert/strict"
import test from "node:test"

import {
  assertSupportedNodeVersion,
  isSupportedNodeVersion,
} from "./node-version.mjs"

test("accepts the patched Node 24.22.1 release", () => {
  assert.equal(isSupportedNodeVersion("24.22.1"), true)
  assert.doesNotThrow(() => assertSupportedNodeVersion("24.22.1"))
})

test("accepts later patched releases in the Node 24 line", () => {
  assert.equal(isSupportedNodeVersion("24.22.2"), true)
  assert.equal(isSupportedNodeVersion("24.30.0"), true)
})

test("rejects Node 24 releases before the patched floor", () => {
  assert.equal(isSupportedNodeVersion("24.22.0"), false)
  assert.equal(isSupportedNodeVersion("24.0.0"), false)
  assert.throws(
    () => assertSupportedNodeVersion("24.22.0"),
    /Node\.js 24\.22\.1 or a newer patched 24\.x release/,
  )
})

test("rejects unsupported major versions and malformed values", () => {
  assert.equal(isSupportedNodeVersion("22.23.4"), false)
  assert.equal(isSupportedNodeVersion("25.0.0"), false)
  assert.equal(isSupportedNodeVersion("not-a-version"), false)
})
```

- [x] **Step 2: Run the test to verify it fails for the missing implementation**

Run:

```powershell
node --test scripts/node-version.test.mjs
```

Expected: FAIL because `scripts/node-version.mjs` does not exist yet.

- [x] **Step 3: Implement the minimal version policy**

Create `scripts/node-version.mjs`:

```js
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
```

Create `scripts/check-node-version.mjs`:

```js
import { assertSupportedNodeVersion } from "./node-version.mjs"

assertSupportedNodeVersion()
```

Add these scripts to `package.json`:

```json
"scripts": {
  "dev": "vite dev",
  "predev": "node scripts/check-node-version.mjs",
  "build": "vite build",
  "prebuild": "node scripts/check-node-version.mjs",
  "build:vercel": "vite build",
  "prebuild:vercel": "node scripts/check-node-version.mjs",
  "preview": "vite preview",
  "prepreview": "node scripts/check-node-version.mjs",
  "start": "vite preview",
  "prestart": "node scripts/check-node-version.mjs",
  "test:node-version": "node --test scripts/node-version.test.mjs",
  "format": "oxfmt src scripts vite.config.ts package.json tsconfig.json AGENTS.md CLAUDE.md"
}
```

- [x] **Step 4: Run the tests to verify they pass**

Run:

```powershell
node --test scripts/node-version.test.mjs
corepack pnpm run test:node-version
```

Expected: all four tests pass with zero failures.

- [x] **Step 5: Commit the implementation**

```powershell
git add scripts package.json
git commit -m "fix: enforce patched Node.js runtime"
```

### Task 2: Align local and deployment runtime declarations

**Files:**
- Modify: `package.json`
- Modify: `.mise.toml`
- Create: `.nvmrc`

- [x] **Step 1: Set the package engine floor**

Change `package.json` to:

```json
"engines": {
  "node": ">=24.22.1 <25"
}
```

- [x] **Step 2: Pin the mise and nvm files**

Set `.mise.toml` to:

```toml
[tools]
node = "24.22.1"
"npm:pnpm" = "10.34.3"
```

Create `.nvmrc` with:

```text
24.22.1
```

- [x] **Step 3: Format the changed files**

Run:

```powershell
corepack pnpm exec oxfmt --check scripts package.json
```

Expected: exit code 0 and no formatting errors. `.mise.toml` and `.nvmrc` are plain version declaration files and are verified by the final diff review.

- [x] **Step 4: Commit the runtime declarations**

```powershell
git add package.json .mise.toml .nvmrc
git commit -m "chore: pin patched Node.js toolchain"
```

### Task 3: Run the complete local quality gate

**Files:**
- Inspect: `package.json`, `.mise.toml`, `.nvmrc`, `scripts/node-version.mjs`, `scripts/check-node-version.mjs`, `scripts/node-version.test.mjs`

- [x] **Step 1: Run the node policy tests**

```powershell
corepack pnpm run test:node-version
```

Expected: all tests pass.

- [x] **Step 2: Run the formatter check**

```powershell
corepack pnpm exec oxfmt --check scripts package.json
```

Expected: exit code 0.

- [x] **Step 3: Run the production build**

```powershell
corepack pnpm run build
```

Expected: the prebuild Node.js assertion passes and Vite/TanStack Start completes with exit code 0.

- [x] **Step 4: Review the final diff and runtime policy**

```powershell
git diff --check
git diff -- package.json .mise.toml .nvmrc scripts
git status --short
```

Confirm that every runtime declaration uses Node 24.22.1 or a semver range whose minimum is 24.22.1, and that no unrelated files changed.
