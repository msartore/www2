# AGENTS.md

Vue 3 SPA (Vite 8 + Element Plus + UnoCSS) for msartore.dev, deployed to GitHub Pages on push to `main`.

## Commands

- `npm run dev` — Vite dev server
- `npm run typecheck` — `vue-tsc --noEmit`; the only verification step (no unit tests or lint tooling is configured)
- `npm run build` — plain SPA build to `dist/`; this is what the deploy workflow publishes
- `npm run generate` — vite-ssg static-site build; exists but is **not** used by CI
- `npm run preview` — preview the built site

## Wiring

- Routes are hand-maintained in `src/router/index.js` (plain JS, not TS). To add a page: create the view under `src/views/`, register it in the router, and add it to the `pages` nav array in `src/App.vue`. The `/:catchAll(.*)*` route serves `NotFound.vue`.
- Element Plus components and `src/components/*.vue` (`BaseHeader`, `BaseSide`, `CommonProject`) are auto-imported by unplugin-vue-components — never import them manually. `src/components.d.ts` is generated automatically; don't edit it.
- Element Plus runs under a custom CSS namespace `ep`, so theme vars are `var(--ep-*)` (e.g. `--ep-bg-color`). Color overrides are in `src/styles/element/index.scss` + `dark.scss`; that stylesheet is `@use`-injected into *every* SCSS block via `css.preprocessorOptions.scss.additionalData` in `vite.config.mts`.
- UnoCSS is configured inline in `vite.config.mts` (there is no `unocss.config.ts`): presets uno/attributify/icons, with directives + variant-group transformers. Icons come from `@iconify-json/ep`.
- Project pages render through the shared `CommonProject.vue` (large; check it before adding new project pages).
- Dark mode (`src/composables/dark.ts`) uses `@vueuse/core`, which is only a transitive dependency (pulled in via element-plus) and is not declared in `package.json`.

## Gotchas

- Aliases: `~/` → `src/` works in both Vite and `tsconfig.json`; `@` → `src/` is Vite-only, so `@/...` imports in TS-typed files fail `vue-tsc`. Prefer `~/`.
- CI workflows (`.github/workflows/`) pin Node 14/16 and actions v2 while the repo requires Node ≥20.19 (`.node-version` = 22.14.0; Vite 8 needs `^20.19`). They predate the Vite 8 upgrade and can't pass — verify with local `npm run typecheck`, not CI.
- `vue-tsc` only covers `src/**/*.ts|.d.ts|.tsx|.vue`; the plain-JS router and `<script setup>` logic are not typechecked.
- Package manager is npm (`package-lock.json`); there is deliberately no `.npmrc`, because the pnpm-only keys that used to live there (`shamefully-hoist`, `strict-peer-dependencies`) make npm print an "Unknown project config" warning on every command.
