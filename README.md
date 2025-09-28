# react-pwa-setup

A modern, production-ready starter template for building React Progressive Web Apps (PWAs) fast — without repeating the same setup for every new project.

Use this repository to kick-start new apps with sensible defaults, PWA capabilities, and a clean project structure.

## Why this template?

- Save time on repetitive setup
- Start with PWA best practices from day one
- Keep a consistent structure across projects
- Easily extend, customize, and scale

## Key features

- React application scaffold with a clean, modular structure
- PWA-ready: web app manifest, service worker registration, caching strategies, and installability
- Offline-first experience with an app shell approach
- Sensible production build configuration
- Common project scripts for development, testing, building, and linting
- Opinionated quality gates (linting, formatting, and testing hooks)
- Ready for deployment to static hosts (Vercel, Netlify, GitHub Pages, Nginx)

## Tech stack (default assumptions)

- React (with hooks)
- PWA tooling (service worker + manifest)
- JavaScript or TypeScript (your choice)
- Optional: React Router, ESLint, Prettier, Testing framework (Jest/Vitest)
  
Note: You can adapt or swap tools to match your preferences. The structure and guidance remain valid.

## Quick start

1. Use this template
   - Click “Use this template” on GitHub (or clone the repo).
2. Install dependencies
   - npm: `npm install`
   - yarn: `yarn`
   - pnpm: `pnpm install`
3. Run the dev server
   - `npm run dev`
4. Build for production
   - `npm run build`
5. Preview the production build (optional)
   - `npm run preview`

Typical Node requirement: Node 18+ (LTS recommended).

## Available scripts

- `dev` — Start the local development server with hot reload
- `build` — Create an optimized production build
- `preview` — Serve the production build locally
- `test` — Run unit tests
- `lint` — Run linter checks
- `format` — Format codebase (Prettier)
- `typecheck` — TypeScript checks (when TS is enabled)

Check `package.json` for the exact scripts and tweak as needed.

## Project structure

A typical layout (may vary slightly based on your configuration):


```
.
├── public/
│   ├── manifest.webmanifest   # PWA manifest
│   ├── icons/                 # App icons, maskable icons
│   └── index.html             # App entry HTML
├── src/
│   ├── assets/                # Static assets
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Page-level components (if using routing)
│   ├── routes/                # Route definitions (optional)
│   ├── app/                   # App bootstrap, providers
│   ├── sw/ or service-worker.*# Service worker (if customized)
│   ├── styles/                # Global styles, variables
│   ├── utils/                 # Utilities and helpers
│   ├── main.(tsx|jsx)         # React entry
│   └── App.(tsx|jsx)          # Root component
├── .env.example               # Example environment variables
├── package.json
└── README.md
```


## PWA specifics

- Web App Manifest
  - Configure `public/manifest.webmanifest` with name, short_name, theme_color, background_color, icons (including maskable).
- Service Worker
  - Service worker registration included by default.
  - Choose between an auto-generated SW (e.g., via Workbox) or a custom one to fine-tune caching.
- Caching strategy
  - App shell caching for instant navigation.
  - Static assets cached with revisioning.
  - Network-first or stale-while-revalidate for API calls (adjust as needed).
- Offline behavior
  - Provide an offline fallback page if your app needs it.
- Install prompts
  - The app is installable on supported devices; you can expose a custom “Install” button by listening to the `beforeinstallprompt` event.
- Updates
  - Implement a simple update flow: when a new service worker is ready, prompt the user to refresh. This balances freshness and control.

## Configuration

- Environment variables
  - Duplicate `.env.example` to `.env.local` and set your values.
  - Keep secrets out of version control.
- Build-time flags
  - Use environment variables to toggle features (analytics, debug tools, API endpoints).
- Theming and styling
  - Add your preferred styling solution (CSS Modules, Tailwind, styled-components, etc.).

## Routing and state management (optional)

- Routing
  - If using React Router, place route configs in `src/routes/` and page components in `src/pages/`.
- State management
  - For local state, use React hooks.
  - For global state, you can add Redux Toolkit, Zustand, Jotai, or React Query depending on your needs.

## Testing and quality

- Unit tests
  - Keep tests close to components (e.g., `Component.test.tsx`).
- Linting and formatting
  - ESLint and Prettier ensure consistent code style.
  - Consider adding pre-commit hooks via Husky/lint-staged.

## Deployment

This setup builds to static assets suitable for most hosting providers:

- Vercel / Netlify: Connect the repo, set build command to `npm run build`, output directory to `dist` or `build`.
- GitHub Pages: Build and publish the output directory to `gh-pages`.
- Nginx / Apache: Serve the built directory; configure fallback to `index.html` for SPA routing.

Remember to:
- Serve over HTTPS for full PWA capabilities.
- Set correct caching headers for static assets and HTML.

## Troubleshooting

- App doesn’t update after deployment
  - SW cache might still serve old assets. Implement an update prompt and/or clear SW caches.
- App not installable
  - Check valid manifest, icons, and HTTPS.
- Offline not working
  - Verify SW is registered, caching routes/assets as expected, and inspect the Application tab in devtools.

## Roadmap ideas

- Optional generators (plop) for components/pages
- Built-in analytics opt-in
- More cache strategies by route
- Example CI workflow (GitHub Actions)
- Example e2e tests (Playwright/Cypress)

## Contributing

Issues and PRs are welcome. Please open an issue to discuss major changes before submitting a PR.

## License

Specify your license (e.g., MIT) in `LICENSE`.

---

Start building: clone, install, and run `npm run dev`. Happy shipping!