# App Decomposition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce `src/App.tsx` to route selection and home-page composition while preserving the existing portfolio behavior and visual output.

**Architecture:** Static content moves into the existing `src/data/` tree. Major page sections move into focused files under `src/pages/`, while reusable project and navigation pieces live under `src/components/`. The current stack content is moved unchanged into `src/data/stack/stack.ts` so it can later be replaced by the user's `stack.md` content without another page refactor.

**Tech Stack:** React 19, TanStack Router/Start, TypeScript, Vite, Tailwind CSS v4, pnpm, oxfmt.

## Global Constraints

- Preserve current content, CSS class names, links, archive query routes, and visual behavior.
- Do not add or edit `stack.md`; keep the current stack data isolated for later replacement.
- Keep `App.tsx` as the route-aware home-page composition layer.
- Repair incomplete in-progress files under `src/` as required by the decomposition.
- Rename `ProejctVisual.tsx` to `ProjectVisual.tsx`.
- Run formatting, `pnpm build`, and SSR route checks after implementation.

---

### Task 1: Extract typed portfolio data

**Files:**
- Create: `src/data/projects/types.ts`
- Modify: `src/data/projects/qa/qa-featured.ts`
- Modify: `src/data/projects/qa/qa-dump.ts`
- Modify: `src/data/projects/swe/se-featured.ts`
- Modify: `src/data/projects/swe/se-dump.ts`
- Modify: `src/data/stack/stack.ts`
- Modify: `src/data/experience/work-experience.ts`

**Interfaces:**
- `FeaturedProject` contains `title`, `eyebrow`, `description`, `tags`, `link`, and `accent`.
- `ArchiveProject` is a readonly `[title, detail, link]` tuple.
- Data modules export `qaFeaturedProjects`, `qaArchive`, `engineeringFeaturedProjects`, `engineeringArchive`, `stack`, and `experience`.

- [ ] **Step 1: Add shared project types**

Create `src/data/projects/types.ts` with the exact shared interfaces used by project cards and archive pages.

- [ ] **Step 2: Move the current project records into the QA and engineering data modules**

Copy the existing inline arrays from `src/App.tsx` without changing their strings, URLs, or accents.

- [ ] **Step 3: Move the current stack and experience records into their existing data modules**

Keep the current stack values unchanged and leave `stack.md` untouched.

- [ ] **Step 4: Run the formatter**

Run `corepack pnpm format` and confirm the data modules remain valid TypeScript.

### Task 2: Repair reusable components

**Files:**
- Create: `src/components/ProjectVisual.tsx`
- Create: `src/components/SiteHeader.tsx`
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/ArchivePage.tsx`
- Delete: `src/components/ProejctVisual.tsx`

**Interfaces:**
- `ProjectCard` consumes a `FeaturedProject` and its index.
- `ProjectVisual` consumes a `FeaturedProject` and its index.
- `SiteHeader` accepts an optional `archive` boolean to preserve the two existing header link sets.
- `ArchivePage` consumes an archive type and `ArchiveProject[]`.

- [ ] **Step 1: Replace the misspelled project visual file**

Create `ProjectVisual.tsx` with the existing project visual markup and typed `FeaturedProject` props, then update `ProjectCard.tsx` to import it.

- [ ] **Step 2: Repair `ProjectCard`**

Remove the invalid `@/React` import, import `ExternalIcon`, export the component, and keep the existing markup and class names.

- [ ] **Step 3: Extract the shared header**

Move the existing primary and archive header markup into `SiteHeader.tsx`; use the `archive` prop only to select the existing navigation labels and targets.

- [ ] **Step 4: Update `ArchivePage` imports and data types**

Keep its output stable while consuming the shared `ArchiveProject` type and `SiteHeader`.

### Task 3: Extract focused page sections

**Files:**
- Modify: `src/pages/hero.tsx`
- Modify: `src/pages/about.tsx`
- Modify: `src/pages/stack.tsx`
- Modify: `src/pages/work-experience.tsx`
- Modify: `src/pages/projects.tsx`
- Modify: `src/pages/contact.tsx`

**Interfaces:**
- Each page file exports one default React component.
- `WorkExperience` consumes the typed experience records.
- `Projects` consumes featured QA and engineering records and renders the existing archive CTAs.

- [ ] **Step 1: Extract hero and marquee markup**

Move the existing hero section and marquee into `hero.tsx` without changing classes or copy.

- [ ] **Step 2: Extract about markup**

Move the existing about section into `about.tsx`.

- [ ] **Step 3: Extract toolkit markup**

Move the stack section into `stack.tsx` and read its groups from `src/data/stack/stack.ts`.

- [ ] **Step 4: Extract experience markup**

Move the timeline into `work-experience.tsx` and read records from its data module.

- [ ] **Step 5: Extract selected projects markup**

Move both project grids and their archive CTAs into `projects.tsx`, using `ProjectCard` and the two project data modules.

- [ ] **Step 6: Extract contact and footer markup**

Move the contact section and footer into `contact.tsx`.

### Task 4: Reduce `App.tsx` to composition and route selection

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Remove inline records, icons, project components, and section markup**

Leave only the TanStack location lookup, archive route selection, and home-page composition.

- [ ] **Step 2: Compose the extracted page components**

Render the shared header and the six extracted sections in their current order inside `<main>`.

- [ ] **Step 3: Run the production build**

Run `corepack pnpm build`; expect both client and SSR builds to exit 0.

### Task 5: Verify behavior and cleanup

**Files:**
- No new files.

- [ ] **Step 1: Format all changed source files**

Run `corepack pnpm format`.

- [ ] **Step 2: Verify SSR routes**

Start `corepack pnpm dev --host 127.0.0.1 --port 4173` and request `/`, `/?page=qa-project-dump`, and `/?page=engineering-project-dump`. Confirm HTTP 200, expected route content, and no SSR fallback/error markers.

- [ ] **Step 3: Confirm stack isolation and file cleanup**

Confirm no `stack.md` was created or modified by this task, `ProejctVisual.tsx` is absent, `ProjectVisual.tsx` exists, and `App.tsx` contains no inline project, experience, stack, or icon definitions.
