# TanStack Start migration design

## Scope

Migrate the portfolio from its legacy Vite runtime to TanStack Start while preserving the existing portfolio content, visual design, links, and archive-page behavior. This pass is infrastructure migration and cleanup only; the existing large `src/App.tsx` remains intentionally unrefactored.

## Architecture

- Use TanStack Start's React file-based routing with `src/routes/__root.tsx`, `src/routes/index.tsx`, and `src/router.tsx`.
- Keep `src/App.tsx` as the home route's page component so the visual implementation does not move or get refactored.
- Import the existing global stylesheet from the TanStack root route.
- Replace the direct `window.location` read in `App.tsx` with TanStack Router's SSR-safe location state so the existing `page` query parameter continues to select the QA and engineering archive views during server rendering and hydration.
- Let TanStack Start own the document shell and server/client entry behavior; remove the standalone `index.html` and `src/main.tsx` entrypoint.

## Legacy scaffold cleanup

- Remove the legacy platform directory.
- Remove platform-specific Vite imports, plugins, config, environment variables, comments, and ignored paths.
- Rename the package from the legacy scaffold name to the portfolio's neutral project name.
- Remove the visible platform toolkit entry from the portfolio content.
- Update `AGENTS.md` and `CLAUDE.md` so project instructions describe TanStack Start.

## Build and verification

- Update dependencies and the lockfile for the TanStack Start React integration.
- Preserve Tailwind CSS and the existing formatting command.
- Provide `dev`, `build`, `start`, and `format` scripts appropriate for TanStack Start.
- Run formatting, build validation, and a repository-wide search confirming no legacy platform references remain in project files.

## Non-goals

- No component decomposition or broader `App.tsx` refactor.
- No visual redesign or content rewrite beyond removing the platform toolkit label.
- No new application features or route redesign.
