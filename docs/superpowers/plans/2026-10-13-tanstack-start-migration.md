# TanStack Start Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy Vite runtime with TanStack Start while preserving the existing portfolio UI and archive behavior.

**Architecture:** TanStack Start will own the document shell and file-based route tree. The current `src/App.tsx` remains the page component, with only its browser-only query-string read replaced by TanStack Router location state. Legacy platform files, plugins, environment variables, and metadata will be removed.

**Tech Stack:** React 19, TanStack Start React, TanStack Router, Vite, Tailwind CSS v4, TypeScript, pnpm, oxfmt.

## Global Constraints

- Preserve current portfolio content, visual design, links, and query-string archive pages.
- Do not refactor or decompose `src/App.tsx` in this pass.
- Do not keep `index.html`, `src/main.tsx`, or legacy platform configuration.
- Keep Tailwind CSS v4 and the existing formatting command.
- Run formatting, build validation, and a repository-wide legacy-reference search before completion.

---

### Task 1: Add the TanStack Start route shell

**Files:**
- Create: `src/router.tsx`
- Create: `src/routes/__root.tsx`
- Create: `src/routes/index.tsx`

**Interfaces:**
- `src/routes/__root.tsx` provides the document shell and renders child routes.
- `src/routes/index.tsx` renders the existing default export from `src/App.tsx`.
- `src/router.tsx` exports `getRouter()` using the generated `src/routeTree.gen` module.

- [ ] **Step 1: Create the router factory**

```tsx
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
  });
}
```

- [ ] **Step 2: Create the root document route**

```tsx
import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adriaan’s Journal" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create the index route**

```tsx
import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  component: App,
});
```

- [ ] **Step 4: Run the route generator check**

Run: `pnpm exec vite build`

Expected: the TanStack Start plugin generates `src/routeTree.gen.ts` and the build may still fail only because the old Vite config/package wiring has not yet been migrated.

### Task 2: Replace legacy Vite runtime configuration

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `vite.config.ts`
- Modify: `tsconfig.json`
- Modify: `.gitignore`
- Delete: `index.html`
- Delete: `src/main.tsx`
- Delete: the legacy platform directory

**Interfaces:**
- `package.json` exposes `dev`, `build`, `preview`, `start`, and `format` scripts.
- `vite.config.ts` uses `tanstackStart()` before the React plugin and preserves Tailwind, the `@` alias, and `$PORT`-based server/preview ports.

- [ ] **Step 1: Update package metadata and scripts**

Set the package name to `adriaans-portfolio`, add `@tanstack/react-start` and `@tanstack/react-router` dependencies, and use these scripts:

```json
{
  "dev": "vite dev",
  "build": "vite build && tsc --noEmit",
  "preview": "vite preview",
  "start": "node .output/server/index.mjs",
  "format": "oxfmt"
}
```

- [ ] **Step 2: Install and lock dependencies**

Run: `pnpm install`

Expected: `pnpm-lock.yaml` contains the TanStack Start packages and install exits with code 0.

- [ ] **Step 3: Replace the Vite configuration**

```ts
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), tanstackStart(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 8443),
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 8443),
  },
});
```

- [ ] **Step 4: Align TypeScript and ignore rules**

Keep the existing strict compiler settings, add `src/routeTree.gen.ts` to generated-file ignores if the generator requires it, and remove legacy platform ignore entries. Delete the obsolete HTML and client entrypoint files.

### Task 3: Make the existing App SSR-safe without refactoring it

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css` only if the current entry import needs to move; otherwise leave it unchanged.

**Interfaces:**
- The app continues to render `ArchivePage` for `?page=qa-project-dump` and `?page=engineering-project-dump`.

- [ ] **Step 1: Replace the direct browser global read**

Change the import and query-string lookup to use TanStack Router's location state:

```tsx
import { useLocation } from "@tanstack/react-router";
```

```tsx
const { searchStr } = useLocation();
const page = new URLSearchParams(searchStr).get("page");
```

Leave all other `App.tsx` content unchanged.

- [ ] **Step 2: Remove the visible platform toolkit label**

Delete only the platform toolkit item from the `Tools & delivery` list in `src/App.tsx`; do not otherwise rewrite the content or UI.

### Task 4: Remove remaining legacy project documentation and generated artifacts

**Files:**
- Modify: `AGENTS.md`
- Modify: `CLAUDE.md`
- Delete: generated `src/routeTree.gen.ts` only if it is recreated by the build and should remain ignored; otherwise keep the generated file required by the checked-in build.

- [ ] **Step 1: Rewrite project instructions for TanStack Start**

Document the TanStack Start route structure, Vite scripts, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/router.tsx`, and `src/App.tsx`. Remove legacy platform references and obsolete preview instructions.

- [ ] **Step 2: Search for residual references**

Run a repository-wide search for legacy platform markers.

Expected: no output from project source, configuration, instructions, or generated artifacts. Dependency metadata may contain unrelated transitive package text only if the search includes lockfile content.

### Task 5: Run the complete local quality gate

**Files:**
- No new files.

- [ ] **Step 1: Format the repository**

Run: `pnpm format`

Expected: exit code 0 with only intended formatting changes.

- [ ] **Step 2: Build and type-check**

Run: `pnpm build`

Expected: Vite/TanStack Start production build and TypeScript check both exit 0.

- [ ] **Step 3: Verify the important routes**

Run: `pnpm dev --host 127.0.0.1` in a bounded process and request `/`, `/?page=qa-project-dump`, and `/?page=engineering-project-dump` with an HTTP client.

Expected: each route returns HTTP 200 and contains the existing page-specific content.

- [ ] **Step 4: Re-run the legacy-reference search and inspect the final changes**

Run the repository-wide legacy-reference search and inspect the final changes.

Expected: the search is empty and the changes contain only the scoped migration/cleanup files.
