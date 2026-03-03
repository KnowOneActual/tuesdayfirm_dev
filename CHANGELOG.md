# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-03-03

### Changed

- **Tech Stack Overhaul:** Migrated from manual PostCSS to **Vite** for building and bundling.
- **Styling:** Upgraded to **Tailwind CSS v4** and consolidated all custom CSS into `src/styles.css`.
- **Aesthetic:** Implemented a full CRT/Terminal theme with scanlines, noise, and flickering.
- **JavaScript:** Refactored `script.js` into a Class-based modular structure (`Terminal`).
- **Typography:** Standardized on `Space Mono` for the entire project.

### Added

- **Easter Eggs:** Hidden keystroke commands (`LORE`, `STATUS`, `HELP`, `ECHO`).
- **CRT Overlay:** Real-time scanline and flicker effect.
- **Realistic Typewriter:** Randomized intervals for a more authentic terminal feel.
- **Glitch Effect:** Added subtle hover glitches for the logo.

## [0.1.0] - 2025-10-02

### Fixed

- Corrected self-closing SVG tags in `index.html`.
- Replaced inline styles on the 404 page with Tailwind CSS utility classes.
