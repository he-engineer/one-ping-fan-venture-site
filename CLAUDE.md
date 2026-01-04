# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

One Ping Fan is an AI venture studio landing page built with Next.js 14, React 18, Material UI v5, and TypeScript. It's a static export site deployed to GitHub Pages. The site showcases the studio's services, programs, and recent wins with analytics tracking via Plausible.

## Development Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs the Next.js development server on `http://localhost:3000`. Hot-reloads on file changes.

### Build
```bash
npm run build
```
Creates a static export in the `/out` directory. Uses `next build` which respects the `output: 'export'` configuration.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js core web vitals configuration. Note: linting is skipped during builds by design (see `next.config.js`) to allow builds in constrained environments.

### Production Preview
```bash
npm start
```
Starts the production server (mainly useful for testing before deployment).

## Architecture & Key Patterns

### Next.js Setup
- **App Router**: Uses `/src/app` directory with App Router pattern
- **Static Export**: Configured with `output: 'export'` in `next.config.js`, meaning the entire site builds to static HTML
- **Trailing Slashes**: Enabled (`trailingSlash: true`)
- **Image Optimization**: Disabled for static export (`images: { unoptimized: true }`)

### Directory Structure
- `/src/app` - Next.js app directory containing `layout.tsx` and `page.tsx`
- `/src/theme` - Material UI theme configuration
- `/src/lib` - Utility functions (currently just analytics)
- `/public` - Static assets
- `/out` - Built static export output (generated during build)

### Material UI Theme & Styling
- **Theme**: Defined in `/src/theme/theme.ts` using `createTheme()`
- **ThemeRegistry**: Client component (`/src/theme/ThemeRegistry.tsx`) wraps the app with `ThemeProvider` and `CssBaseline`
- **Colors**: Primary (`#0B3D91`), Secondary (`#0FA3B1`), custom typography with Inter font
- **Emotion**: Used as the CSS-in-JS engine (required dependency for Material UI v5)
- **Custom Component Styling**: Theme overrides for button borders, link focus states, and focus-visible outlines for accessibility

### Page Structure
The home page (`/src/app/page.tsx`) is a single-page marketing site with sections organized by component:
1. **Hero Section** - Main value proposition with CTAs
2. **Venture Pillars** - Three core competencies (design, product, governance)
3. **Studio Programs** - Three engagement models (Sprints, Build-Operate-Transfer, Acceleration)
4. **Recent Wins** - Case studies of completed projects
5. **Contact Section** - Final CTA with expectations

All content is stored as JavaScript data structures within the component (no external CMS).

### Analytics
- **Plausible Analytics**: Conditional script injection in root layout based on `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` env var
- **Event Tracking**: Custom `trackEvent()` function in `/src/lib/analytics.ts` that:
  - Calls `window.plausible()` if the script has loaded
  - Falls back to `console.info()` in development mode
  - Does nothing if Plausible isn't configured
- **Tracked Events**: Hero CTA clicks, portfolio request, contact CTA clicks (defined as inline handlers in page.tsx)

### TypeScript Configuration
- **Base URL**: Set to `"."` with path alias `"@/*": ["src/*"]` for clean imports
- **Strict Mode**: Enabled for all files
- **Target**: ES2020

## Deployment

The project uses GitHub Actions for CI/CD:
1. Pushes to `main` trigger the workflow
2. Builds the site with `npm run build`
3. Uploads the `/out` directory as a GitHub Pages artifact
4. Deploys to GitHub Pages

The live site is at `https://onepingfan.com` (though this may be a custom domain configured in GitHub Pages settings).

## Common Development Tasks

### Adding a New Section to the Homepage
1. Add content data as a constant in `/src/app/page.tsx`
2. Create the JSX markup with Material UI components
3. Use the existing grid/container patterns for responsive layout
4. Add analytics tracking if the section includes CTAs

### Customizing Colors/Branding
Edit the palette in `/src/theme/theme.ts`. Changes automatically propagate to all Material UI components via the theme provider.

### Enabling Analytics
Set the `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` environment variable to your Plausible site domain. The script will conditionally load in production.

### Responsive Design Notes
- Use Material UI's `sx` prop with responsive values: `{ xs: value, md: value }`
- Common breakpoint values in the code: `xs` (mobile), `sm` (small tablet), `md` (desktop)
- Grid system uses `xs={12} md={6}` patterns for column distribution

## Code Style & Conventions

- **ESLint Config**: Extends `next/core-web-vitals` and `eslint:recommended`
- **One Exception**: `react/jsx-props-no-spreading` is disabled (allows `{...props}` patterns)
- **Typography Variants**: Use semantic Material UI variants (`h1`, `h2`, `body1`, `body2`, `overline`) rather than inline styling
- **Accessibility**: Components use `aria-hidden` for decorative icons, proper heading hierarchy, and focus-visible outlines
- **Button Styling**: All buttons use Material UI `Button` component with variant props (`contained`, `outlined`, `text`)

## Dependencies

### Production
- `next@^14.0.0` - React framework with App Router
- `react@^18.2.0` - UI library
- `react-dom@^18.2.0` - DOM rendering
- `@mui/material@^5.15.0` - Component library
- `@mui/icons-material@^5.15.0` - Icon library
- `@emotion/react`, `@emotion/styled`, `@emotion/cache` - CSS-in-JS (required by Material UI)

### Development
- TypeScript and type definitions for Node, React, and React-DOM

## Notes for Future Work

- The site is fully static and has no backend services or databases
- All content is hardcoded in the component; adding a CMS would require significant refactoring
- The Plausible analytics integration is lightweight and doesn't require additional dependencies
- The Material UI theme is centralized, making global style changes simple
- No state management library is needed for this static marketing site
