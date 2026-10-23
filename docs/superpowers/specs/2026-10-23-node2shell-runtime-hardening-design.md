# Node2Shell Runtime Hardening Design

## Goal

Ensure the portfolio is built and run only with a patched Node.js runtime that is not affected by the October 2026 Node.js Brotli decoder vulnerability commonly called Node2Shell (CVE-2026-111497).

## Context

The Node.js security release published on October 21, 2026 lists Node.js 24.22.1 as the patched release for the 24.x line. The repository currently declares a broad `22.x` engine and a generic `22` mise tool, which does not create a safe minimum patch guarantee for local development. The active workspace already runs Node.js 24.22.1.

## Design

- Standardize the repository on Node.js 24.x.
- Require Node.js `>=24.22.1 <25` in `package.json`, so Vercel selects a patched Node 24 runtime and package-manager engine checks reject older versions.
- Pin `.mise.toml` and add `.nvmrc` to Node.js `24.22.1` for reproducible local setup across the supported version managers.
- Add a small, dependency-free Node version module with a minimum-version predicate and assertion.
- Run the assertion through `predev`, `prebuild`, `prebuild:vercel`, `prepreview`, and `prestart` lifecycle hooks so local development, Vercel builds, and preview starts fail before the application runs under an unsupported Node version.

## Testing and verification

- Use Node's built-in `node:test` runner to cover the supported patch, later 24.x patches, older 24.x patches, other major versions, and malformed versions.
- Run the test-first red/green cycle for the version module.
- Run formatting and the full Vite/TanStack build with the active patched Node.js runtime.
- Inspect the final diff and verify all runtime declarations agree on Node 24.22.1.

## Scope

This change is limited to runtime version policy and its verification. It does not change application behavior, dependencies, or deployment routing.
