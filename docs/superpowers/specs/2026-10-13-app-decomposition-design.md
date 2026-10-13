# App decomposition design

## Goal

Reduce `src/App.tsx` to route selection and home-page composition while preserving the current portfolio content, CSS classes, links, archive behavior, and TanStack Start integration.

## Boundaries

- `src/App.tsx` keeps the `page` query handling and composes the home page from focused sections.
- `src/pages/hero.tsx` owns the hero section.
- `src/pages/about.tsx` owns the about section.
- `src/pages/stack.tsx` owns the toolkit section.
- `src/pages/work-experience.tsx` owns the experience timeline.
- `src/pages/projects.tsx` owns featured QA and engineering work plus archive calls to action.
- `src/pages/contact.tsx` owns the contact section and footer.
- `src/data/projects/qa/` and `src/data/projects/swe/` own project records and archive records.
- `src/data/experience/work-experience.ts` owns experience records.
- `src/data/stack/stack.ts` owns toolkit groups.
- `src/components/` owns reusable project visuals/cards, icons, and archive presentation.

## Data flow

Static records are exported from `src/data/` and passed into focused page components through typed props where a component needs data. `App.tsx` selects the archive route using TanStack Router location state; archive pages receive the matching archive records instead of reaching into variables that are private to `App.tsx`.

## Cleanup

- Repair incomplete in-progress data modules without changing their visible content.
- Rename `ProejctVisual.tsx` to `ProjectVisual.tsx` and update imports.
- Remove duplicate inline data, icon definitions, and project/card implementations from `App.tsx`.
- Keep existing CSS class names and component output stable.
- Do not introduce new application behavior or redesign the page.

## Verification

- Run the formatter.
- Run the production client and SSR build.
- Start the development server and request `/`, `/?page=qa-project-dump`, and `/?page=engineering-project-dump`, checking HTTP 200 responses and route-specific content.
