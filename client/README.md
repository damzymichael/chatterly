  # Chatterly — Client

  Frontend for the Chatterly fullstack app. Built with React, TypeScript and Vite for fast local development.

  ## Table of contents

  - Quick start
  - Scripts
  - Environment
  - Project structure
  - Features
  - Contributing
  - License

  ## Quick start

  Prerequisites

  - Node.js 18+ and a package manager (npm, pnpm or yarn)

  Install dependencies and start the dev server:

  ```bash
  cd client
  npm install
  npm run dev
  ```

  Build for production:

  ```bash
  npm run build
  npm run preview
  ```

  ## Scripts

  Key scripts available in `client/package.json`:

  - `npm run dev` — Start Vite dev server (local HMR)
  - `npm run build` — Build production assets (runs `tsc -b` then `vite build`)
  - `npm run preview` — Preview built assets locally
  - `npm run lint` — Run ESLint across the client source

  These are the canonical developer commands for the frontend.

  ## Environment

  Create a `.env` or `.env.local` in the `client/` folder for local overrides. Common variables:

  - `VITE_API_BASE_URL` — Backend API base URL used by the client (e.g. `http://localhost:3000`)

  Note: Vite exposes env variables with the `VITE_` prefix to the client code.

  ## Project structure

  - `src/` — Application source
    - `components/` — Reusable UI components and primitives
    - `pages/` — Route-level pages (Home, auth flows)
    - `lib/` — Utilities
  - `public/` — Static assets
  - `index.html`, `vite.config.ts`, `tsconfig.json` — build and tooling config

  ## Features

  - React + TypeScript with Vite for fast HMR
  - Accessible UI primitives using Radix and Tailwind
  - Form handling with `react-hook-form` and validation with `zod`

  ## Contributing

  - Create feature branches from `main` (or current default branch)
  - Open PRs with a clear description and focused scope
  - Run linting and ensure typechecks before submitting

  ## License

  Add a `LICENSE` file to the repository (for example, MIT). If you want, I can add a suggested `LICENSE` file.

