# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-03-03

### Fixed
- **Deployment:** Migrated to **GitHub Actions** for robust build-and-deploy cycles.
- **Build Configuration:** Configured Vite to correctly build and output both `index.html` and `404.html`.
- **Custom Domain:** Automated `CNAME` and `.nojekyll` placement in build output to ensure stable domain mapping.
- **Security:** Updated **Content Security Policy (CSP)** to allow external noise textures and resolved browser validation warnings.
- **Pathing:** Implemented relative base paths in Vite for better compatibility with GitHub Pages environments.

## [2.0.0] - 2026-03-03

### Changed
- **Tech Stack Overhaul:** Migrated from manual PostCSS to **Vite** for building and bundling.
- **Styling:** Upgraded to **Tailwind CSS v4** and consolidated all custom CSS into `src/styles.css`.
- **Aesthetic:** Implemented a full CRT/Terminal theme with scanlines, noise, and flickering.
- **JavaScript:** Refactored `script.js` into a Class-based modular structure (`Terminal`).
- **Typography:** Standardized on `Space Mono` for the entire project.
- **Organization:** Restructured project into modern `src/` and `public/` directories.

### Added
- **Easter Eggs:** Hidden keystroke commands (`LORE`, `STATUS`, `HELP`, `ECHO`).
- **CRT Overlay:** Real-time scanline and flicker effect.
- **Realistic Typewriter:** Randomized intervals for a more authentic terminal feel.
- **Glitch Effect:** Added subtle hover glitches for the logo.
- **Linting:** Integrated **ESLint** and **Prettier** for automated code quality and formatting.

## [0.1.0] - 2025-10-02

### Fixed
- Corrected self-closing SVG tags in `index.html`.
- Replaced inline styles on the 404 page with Tailwind CSS utility classes.
