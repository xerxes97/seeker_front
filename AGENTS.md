<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# match_front

**Stack:** Next.js 16.2.6 (App Router) · React 19.2.4 · TypeScript 5 (strict) · Tailwind CSS v4 · ESLint 9 (flat config)

## Commands

| Action | Command |
|--------|---------|
| dev server | `npm run dev` |
| build | `npm run build` |
| production start | `npm run start` |
| lint | `npm run lint` (ESLint 9 flat config — `eslint.config.mjs`) |

No test framework is installed (do not attempt to run tests). No typecheck script exists — `next build` catches type errors via the Next.js TS plugin.

## Tailwind CSS v4

**No `tailwind.config.*` file.** Tailwind v4 uses CSS-first configuration: `@import "tailwindcss"` in `globals.css`, custom theme tokens via `@theme inline {}` directives inside CSS. Do not create a JS config file.

## Project conventions

- **Path alias:** `@/*` maps to project root (e.g. `import Foo from "@/components/Foo"`)
- **Package manager:** npm only (`package-lock.json`)
- **No `.env` files tracked** (`.env*` in `.gitignore`)
- **No CI/CD, no pre-commit hooks, no Prettier** configured
- **Entrypoint:** `app/` directory — root layout at `app/layout.tsx`, homepage at `app/page.tsx`
- **Fonts:** Geist Sans + Geist Mono via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`

## Available agent skills

This repo ships skill packages in `.agents/skills/`. Load with the `skill` tool when relevant:
`frontend-design`, `next-best-practices`, `next-cache-components`, `vercel-composition-patterns`, `vercel-react-best-practices`, `tailwind-css-patterns`, `typescript-advanced-types`, `accessibility`
