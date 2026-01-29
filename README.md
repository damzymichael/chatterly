# Chatterly

A minimal fullstack chat-style app with a React + Vite client and a TypeScript server.

## Project structure

- `client/` — Frontend app (Vite + React + TypeScript)
- `server/` — Backend (TypeScript)

## Quick start

Prerequisites:

- Node.js 18+ and a package manager (npm, pnpm, or yarn)

1. Install dependencies for the client:

```bash
cd client
npm install
```

2. Start the client in development mode:

```bash
npm run dev
```

3. Backend (server) setup:

```bash
cd server
# Install dependencies (if package.json exists)
npm install
# Start the server (depends on server scripts)
npm run dev
```

If the `server/` package.json is not present, follow the server-specific README or setup steps.

## Client scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production assets
- `npm run preview` — Preview built assets locally
- `npm run lint` — Run ESLint

These match the scripts in `client/package.json`.

## Environment

Create a `.env` (or `.env.local`) files in `client/` and `server/` as needed. Typical variables:

- `VITE_API_BASE_URL` — Backend API base URL for the client
- `PORT` — Server port

## Contributing

- Feel free to open issues and PRs. Keep changes focused and include brief descriptions.

## License

Specify a license for the project (e.g., MIT). Add a `LICENSE` file if desired.
