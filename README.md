# LaunchNex

**AI built for production. Not presentations.**

LaunchNex is a modern, multi-page marketing website showcasing AI-powered product development services.

## Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool with HMR
- **React Router DOM** — Client-side routing with animated page transitions
- **Framer Motion** — Animations and page transitions
- **React Hook Form + Zod** — Form handling and validation
- **React Helmet Async** — SEO and document head management
- **CSS Modules** — Scoped component styling

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/process` | Process |
| `/work` | Work |
| `/about` | About |
| `/blog` | Blog |
| `/contact` | Contact |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Page section components
│   └── ui/          # Reusable UI components
├── pages/           # Route-level page components
├── assets/          # Static assets
├── styles/          # Global styles
├── App.jsx          # Root component with routing
└── main.jsx         # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```
