# Global Engineering and CI/CD Rules

These rules apply to every repository and project unless explicitly overridden for the current task.

## CI/CD is the completion gate

- Treat the repository's documented CI workflow and local quality checks as blocking gates.
- Before changing code, inspect package/build/test scripts, workflow files, and applicable project instructions.
- After every code, test, configuration, dependency, database, or workflow edit, run the smallest complete local checks that match the affected CI jobs.
- Do not claim work is fixed, complete, or passing without fresh verification output.
- Preserve required checks and quality gates. Never weaken or skip a failing lane to obtain a green result.

## Test integrity and speed

- Keep existing test coverage unless a test change is explicitly authorized and documented.
- Never use focused or skipped tests, weakened assertions, swallowed failures, or disabled lint/typecheck/build steps to obtain a green result.
- Diagnose failures from their first failing command and fix the root cause.
- Keep tests deterministic across machines, time zones, locales, calendars, random seeds, and clean checkouts.

## Change discipline

- Respect project-local instructions and the user's requested scope.
- Preserve unrelated user changes in dirty worktrees.
- Prefer reversible, minimal changes. Do not rewrite history, force-push, delete user data, or alter production behavior merely to accommodate CI.

--- project-doc ---

# Adriaan's Portfolio

React portfolio running on TanStack Start with Vite and Tailwind CSS v4.

## Development server

Use `pnpm dev` to start the Vite/TanStack Start development server. The port defaults to `$PORT` or `8443`.

## Project structure

- `src/routes/__root.tsx` - TanStack Start document shell and global head metadata
- `src/routes/index.tsx` - home route that renders the portfolio page
- `src/router.tsx` - TanStack Router factory
- `src/routeTree.gen.ts` - generated file-based route tree
- `src/App.tsx` - current portfolio page implementation
- `src/index.css` - Tailwind CSS v4 import and global styles
- `vite.config.ts` - TanStack Start, React, Tailwind, and path-alias configuration
- `package.json` - dependencies and development scripts
- `.mise.toml` - Node.js and pnpm toolchain versions

## Dependencies

- Runtime: React 19, React DOM 19, TanStack Start, and TanStack Router
- Styling: Tailwind CSS v4 through the Vite plugin
- Build tooling: Vite 7 and TypeScript
- Formatting: oxfmt

## Styling

Tailwind CSS v4 is imported from `src/index.css` with `@import "tailwindcss";`. Keep CSS imports first, then add global font wiring and styles.

## Code quality

- Use double quotes for strings containing apostrophes, or escape apostrophes in single-quoted strings.
- Ensure JSX tags are closed and braces are balanced.
- Keep route files small and leave broader page decomposition for a dedicated refactor.
