# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

TechZephyr 2025 — Round 1: Replicate & Innovate landing page built with React, TypeScript, Tailwind CSS, Framer Motion, and Vite. The repository currently contains README.md with the intended tech stack, features, and a suggested project structure.

## Commands

From README.md, development uses standard Vite + npm scripts:

- Install dependencies:
  - npm install
- Start development server:
  - npm run dev
- Build for production:
  - npm run build
- Preview local production build:
  - npm run preview

Notes:
- No test or lint tooling is detected in the repository at this time (no package.json or config files found here). If/when tests or linters are added, prefer exposing them via npm scripts and update this file accordingly. As of now, there is no single-test command available.

## High-level architecture

Intended big-picture structure (from README):
- App shell and routing
  - App.tsx composes the page from section components.
  - pages/Home.tsx (single-page landing) renders the full layout.
- Theming and state
  - ThemeProvider.tsx manages dark/light mode, with system preference detection and localStorage persistence.
  - ThemeToggle.tsx provides the UI for switching themes; smooth theme transitions are emphasized.
- Navigation and scroll UX
  - Navbar.tsx provides responsive navigation with smooth scrolling and a mobile hamburger menu.
  - ScrollProgress.tsx renders a top progress indicator based on scroll position.
  - BackToTop.tsx shows/hides based on scroll position and smooth-scrolls to top.
- Content sections (composed within Home/App)
  - Hero.tsx uses parallax and scroll-triggered motion.
  - FeaturesSection.tsx renders FeatureCard.tsx items with hover/ripple interactions.
  - StatsSection.tsx animates counters when in view.
  - ShowcaseSection.tsx lazy-loads images and opens modal previews.
  - TestimonialCarousel.tsx auto-plays with pause-on-hover and smooth transitions.
  - ContactSection.tsx contains validated form inputs with real-time feedback.
  - Footer.tsx concludes the page.
- Animation and performance
  - Framer Motion for fade/slide/scroll-triggered effects and reduced-motion support.
  - Intersection Observer patterns for triggering animations/lazy loading.
  - Debounced scroll handlers; Tailwind for utility-first styling and purged production CSS.

This is a component-driven SPA layout where the root App composes section components, and cross-cutting concerns (theme, scroll progress, preloader) are mounted high in the tree. Animations are declarative (Framer Motion), while visibility and counting behaviors rely on viewport observers.

## Deployment

From README.md (Vercel):
- Push to GitHub.
- In Vercel, import the repository; Vercel auto-detects Vite config.
- Deploy with defaults; the site is served at a generated *.vercel.app domain.

## References

- README.md — contains feature list, tech stack, example project structure, and Vercel deployment steps. Update this WARP.md if additional tooling (tests, linting, CI) is added to the repository.
