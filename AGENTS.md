# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Next.js App Router pages, layouts, and route segments (e.g., `app/page.tsx`, `app/about/`).
- `components/` holds reusable UI and layout components, grouped by feature (e.g., `components/landing/`).
- `lib/` is for shared utilities and helpers used across the app.
- `data/` stores static data sources used to power UI sections.
- `public/` hosts static assets served at the site root (images, icons).
- `app/globals.css` defines global styles; Tailwind CSS is used for utility styling.

## Build, Test, and Development Commands
- `npm run dev` starts the local development server at `http://localhost:3000`.
- `npm run build` generates an optimized production build.
- `npm run start` runs the production server from a build output.
- `npm run lint` runs ESLint to catch style and correctness issues.

## Coding Style & Naming Conventions
- Use TypeScript with React function components; keep files in `*.tsx` where JSX is used.
- Indentation is 2 spaces; use double quotes for strings, matching existing files.
- Use the path alias `@/` for root-relative imports (e.g., `@/components/layout/navbar`).
- Keep component names in PascalCase and file names in kebab-case or folder-based grouping (as in `components/landing/hero.tsx`).

## Testing Guidelines
- No automated test framework is configured in this repo yet.
- If you add tests, align with the chosen framework’s conventions and keep tests near the feature (e.g., `components/landing/hero.test.tsx`).

## Commit & Pull Request Guidelines
- Commit messages in this repo use short, imperative sentences with capitalization (e.g., “Redesign consultation page”).
- PRs should include a clear summary, link to any related issues, and screenshots or screen recordings for UI changes.
- Note any new dependencies or configuration changes in the PR description.

## Configuration Notes
- Environment-specific settings should live in `.env.local` (not committed).
- Check `next.config.ts`, `eslint.config.mjs`, and `tsconfig.json` when modifying build or tooling behavior.
