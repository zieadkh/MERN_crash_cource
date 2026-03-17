# MERN Notes App

## Problem & solution

Capture ideas before they disappear — a fast, focused notes app that removes friction from quick note capture and simple knowledge management. Many users and small teams struggle with slow or bloated note tools, inconsistent syncing, or complex setups; this project provides a minimal, self‑hostable solution that is fast to use, easy to extend, and inexpensive to operate.

## Architecture & design

The project follows a clear three‑layer MERN architecture for separation of concerns and straightforward scaling:

- Frontend (React + Vite): a single‑page application responsible for presentation, user interactions, and optimistic UI updates. Built with component-driven design (`Navbar`, `NoteCard`, pages) for reusability and fast iteration.
- API layer (Node.js + Express): a RESTful service exposing endpoints for note CRUD operations, handling validation, and applying middleware (CORS, JSON parsing, rate limiting).
- Data layer (MongoDB via Mongoose): a document store for flexible note schemas and rapid prototyping; Mongoose provides schema models, validation, and simple query APIs.

This split allows hosting the frontend as a static site (Vercel/Netlify) while scaling the API independently (Cloud Run/Render), and makes it easy to add features like authentication, sharing, or analytics without major refactors.

## Why this tech stack

- `React + Vite`: ultra-fast development feedback, modern bundling, and a component model that maps directly to UI patterns used in the product.
- `Node.js + Express`: lightweight, widely adopted runtime for building REST APIs in JavaScript — keeps the entire stack in one language for developer speed.
- `MongoDB + Mongoose`: flexible schema design for notes (no heavy migrations), rapid iteration, and well-supported tooling for Node.
- `Tailwind CSS`: utility-first styling that speeds up responsive UI development without large CSS overhead.
- `Upstash Redis` & `@upstash/ratelimit`: serverless-friendly rate limiting to protect the API from abuse and reduce operational risk with minimal infrastructure.
- `dotenv`, `nodemon`: standard developer conveniences for environment configuration and fast local iteration.

## Core features

- Create, read, update, and delete notes (CRUD)
- Responsive, component-driven React UI with reusable components (e.g., `Navbar`, `NoteCard`)
- RESTful API with routes, controllers, and Mongoose models
- Rate limiting using Upstash Redis to reduce abuse and improve availability
- Environment-based configuration for DB and secrets

## Tech stack

- Frontend: React, Vite, Tailwind CSS, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB (self-hosted or managed service)
- Rate limiting: Upstash Redis (`@upstash/ratelimit`, `@upstash/redis`)
- Dev tooling: nodemon, dotenv

## Project structure (high level)

- `Back_end/` — Express API, controllers, models, middleware
- `Front_end/` — React app, components, pages, utility wrappers

## Environment variables

Create a `.env` file in `Back_end/` with values similar to:

- `MONGO_URI` — MongoDB connection string
- `UPSTASH_REDIS_REST_URL` — Upstash Redis REST URL (if used)
- `UPSTASH_REDIS_REST_TOKEN` — Upstash Redis token (if used)

Adjust names if your code uses different keys; check `Back_end/src/config` for exact variable names.

## Local setup & run

1. Install dependencies and run backend:

```bash
cd Back_end
npm install
npm run dev
```

2. Install dependencies and run frontend (in a separate terminal):

```bash
cd Front_end
npm install
npm run dev
```

Open the frontend URL reported by Vite (usually `http://localhost:5173`) to use the app.

## Deployment suggestions

- Host frontend on Vercel/Netlify or static hosting from the Vite build.
- Host backend on Cloud Run, Heroku, Render, or a VPS; use a managed MongoDB (MongoDB Atlas) and Upstash for Redis to keep infrastructure simple.
- Ensure environment variables are set in the hosting provider and enable HTTPS.

## Business / product next steps

- Add authentication and user accounts to support private notes and user-specific data.
- Add search, tagging, and note versioning for better organization.
- Add collaboration and sharing features for team use cases.
- Add analytics and basic usage metrics to measure engagement and guide product decisions.

## Contributing

Contributions are welcome. Open an issue or a PR and follow standard git workflow. Keep changes modular and add brief tests or manual run steps for new features.

---

Created as part of a MERN crash-course project to demonstrate end‑to‑end full‑stack development and production‑aware patterns (rate limiting, env configs, modular architecture).
