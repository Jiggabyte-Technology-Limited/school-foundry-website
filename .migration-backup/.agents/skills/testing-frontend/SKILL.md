---
name: testing-schoolfoundry-frontend
description: Test the SchoolFoundry Next.js frontend end-to-end. Use when verifying UI changes, page layouts, navigation, or visual consistency.
---

# Testing SchoolFoundry Frontend

## Dev Server Setup

```bash
cd /home/ubuntu/school-foundry
npm install
npm run dev
# Runs on http://localhost:3000 via Next.js 16 + Turbopack
# First page load may take 2-3 seconds to compile
```

- No environment variables needed for local dev (images load from `/`)
- For GitHub Pages deployment, `NEXT_PUBLIC_BASE_PATH` is set by the CI workflow
- Port 3000 may already be in use from a previous session — use `fuser -k 3000/tcp` to free it

## Key Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero with 3D database sphere, "What is SchoolFoundry", "Pick the Right Fit", Tools grid, Contact form |
| `/offline` | Offline Bundle page — hero, deployment bundle grid, features grid, why offline, CTA |
| `/online` | Online Cloud page |
| `/#contact` | Homepage contact form section (anchor link) |

## Design System

- **Flat bordered grid pattern**: `gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden`
- **Primary color**: `#F97316` (orange, Tailwind `primary`)
- **Dark backgrounds**: `#07090E` (main), `#0B0D13` (secondary)
- **Responsive breakpoints**: `grid-cols-1` (mobile) → `sm:grid-cols-2` (tablet) → `lg:grid-cols-3` (desktop)
- **Icons**: Lucide React
- **Animations**: Framer Motion (`useScroll`, `useTransform`, stagger reveals)

## Visual Testing Checklist

1. **Grid layouts**: Verify bordered grid cells have visible 1px borders between them
2. **Merged cells**: Some cards span 2+ columns (e.g., `sm:col-span-2`) — verify they're wider than single cells
3. **Images**: Check `offline-bundle.jpg`, `online-cloud.jpg`, payment logos load (not broken)
4. **Badges**: Orange/green badges on feature cards (e.g., "Limited — Cash Only", "Offline Version")
5. **Navigation links**: CTA buttons like "Get a Quote" → `/#contact`, "See What's Included" → `#whats-included`
6. **Logo**: `logo.svg` in nav and footer should render (uses `<img>` with `NEXT_PUBLIC_BASE_PATH` prefix)

## Common Issues

- **Stale cache**: If the page shows old content after code changes, hard-refresh (Ctrl+Shift+R) or restart the dev server
- **Port in use**: Kill existing processes with `fuser -k 3000/tcp` before starting dev server
- **Image basePath**: On GitHub Pages, images need the `/school-foundry/` prefix. Locally they load from `/`. The `NEXT_PUBLIC_BASE_PATH` env var handles this — don't hardcode paths
- **Three.js component**: The hero 3D database sphere (`DatabaseSphere.tsx`) requires `three` and `@types/three` packages
- **No CI configured**: This repo has no CI checks on PRs — verify builds manually with `npx next build`

## Build Verification

```bash
npx next build
# Should produce static export in out/ directory
# Verify all routes are generated (check out/ for index.html files)
```

## Devin Secrets Needed

None — this is a static frontend with no authentication or API keys required for local testing.
