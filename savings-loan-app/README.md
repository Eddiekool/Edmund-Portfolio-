# Vaultly — Savings & Loan App (starter)

A React + TypeScript + Vite starter for a fintech-style app with **savings**
and **loan application** features. Tonight's build covers the project
structure and a working landing page. Everything below is written for
someone learning React for the first time — keep it as a reference as you
build the rest of the app.

> "Vaultly" is a placeholder brand name — rename it in `Navbar.tsx`,
> `Footer.tsx`, and `index.html` whenever you land on a real one.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Edit any file in
`src/` and the browser updates instantly (this is "hot module reload").

Other commands:

```bash
npm run build     # type-checks and builds a production bundle into dist/
npm run preview   # serves the production build locally, to sanity-check it
npm run lint      # runs the linter (catches common mistakes)
```

## Why this stack

- **Vite** — the dev server and build tool. Fast, minimal config, no framework
  opinions in the way while you're learning core React.
- **React + TypeScript** — components in `.tsx` files. TypeScript catches
  typos and wrong types before you even run the app.
- **React Router** (`react-router-dom`) — turns a single-page app into
  something with multiple URLs (`/`, `/login`, `/signup`, ...) without a full
  page reload between them.
- **Tailwind CSS v4** — utility classes (`className="rounded-lg px-4 py-2"`)
  instead of writing separate `.css` files per component. Configured in
  `vite.config.ts` and `src/index.css` — no extra config file needed.
- **lucide-react** — the icon set used throughout (`<PiggyBank />`,
  `<ShieldCheck />`, etc.).

## Project structure

```
savings-loan-app/
├─ index.html              # the single HTML page the whole app mounts into
├─ vite.config.ts          # build tool config (React + Tailwind plugins)
├─ src/
│  ├─ main.tsx             # entry point — mounts <App /> into index.html
│  ├─ App.tsx              # defines every route/URL in the app
│  ├─ index.css            # Tailwind import + design tokens (colors, fonts)
│  │
│  ├─ components/          # reusable pieces, grouped by where they're used
│  │  ├─ layout/           # things that appear on every page
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Footer.tsx
│  │  └─ landing/          # sections used only on the landing page
│  │     ├─ Hero.tsx
│  │     ├─ Features.tsx
│  │     ├─ HowItWorks.tsx
│  │     └─ Cta.tsx
│  │
│  └─ pages/                # one file per route/URL — composes components
│     ├─ LandingPage.tsx           →  /
│     ├─ LoginPage.tsx             →  /login
│     ├─ SignupPage.tsx            →  /signup
│     ├─ SavingsDashboardPage.tsx  →  /dashboard/savings   (placeholder)
│     ├─ LoanApplicationPage.tsx   →  /dashboard/loans     (placeholder)
│     └─ NotFoundPage.tsx          →  anything unmatched
```

### The mental model

1. **`main.tsx`** boots React and renders `<App />` into the `<div id="root">`
   in `index.html`. You'll basically never touch this file again.
2. **`App.tsx`** is the router. It says "when the URL is `/login`, render
   `LoginPage`." Every new screen you build gets one line here.
3. **`pages/`** — one file per screen. A page's job is to *assemble*
   components, not contain all the markup itself.
4. **`components/`** — the actual building blocks (a button, a card, a form
   section). Small, focused, reusable. `layout/` = shared chrome
   (nav/footer). Feature folders (`landing/`, and later `savings/`,
   `loans/`, `auth/`) = things specific to one part of the app.

This split (pages assemble, components render) is the pattern most React
codebases converge on — it's worth internalizing now before the app grows.

## What's already built

- **Landing page** (`/`) — hero, feature grid, a tabbed "how it works"
  section (Savings vs. Loans), and a call-to-action banner.
- **Navbar / Footer** — shared across every page, with a working mobile menu
  (try resizing the browser or opening on your phone).
- **Login / Signup pages** — real forms, laid out and styled, but not wired
  to a backend yet (submitting does nothing right now).
- **Routing** — `/`, `/login`, `/signup`, `/dashboard/savings`,
  `/dashboard/loans`, and a 404 page for anything else.

## Suggested next steps

1. **State & forms** — wire up `useState` on the Login/Signup forms so typing
   actually updates values, then add basic validation.
2. **Auth** — decide on a backend (Firebase Auth, Supabase, or your own API)
   and connect real login/signup.
3. **Savings dashboard** — build out `SavingsDashboardPage.tsx`: goals list,
   balance, a form to create a new savings goal.
4. **Loan application flow** — turn `LoanApplicationPage.tsx` into a
   multi-step form (personal info → income → documents → review).
5. **Data layer** — once you have a backend, add a `src/lib/api.ts` (or
   React Query) to fetch/save real data instead of hardcoded numbers.
6. **Protected routes** — redirect to `/login` if someone hits
   `/dashboard/*` without being signed in.

Take these one at a time — the structure above is built so each of these
slots into an existing folder without needing to reorganize anything.
