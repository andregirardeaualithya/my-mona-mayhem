# Project Instructions

## Overview

Mona Mayhem's web app is built with Astro and the Node standalone adapter. Pages and API routes live under `src/pages/`; the home page is `src/pages/index.astro`, and the contributions endpoint is `src/pages/api/contributions/[username].ts`. Runtime and adapter settings are in `astro.config.mjs`.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- No test or lint scripts are currently defined in `package.json`.

## Astro Practices

- Follow Astro's file-based routing: add pages and endpoints under `src/pages/`.
- Keep server-side data work in Astro frontmatter or typed API routes; use `APIRoute` for endpoint handlers.
- Astro renders HTML by default. Add browser-side JavaScript only for interactions that need it.
- For routes that must run at request time, disable prerendering and keep the output mode and adapter consistent with `astro.config.mjs`.
- Prefer the installed package versions and current project configuration over version claims in other documentation.