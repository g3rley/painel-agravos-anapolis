# Project Context: Painel de Agravos Anápolis

This document provides essential context and guidelines for interacting with the `painel-agravos-anapolis` project, which has been refactored for scalability and modularity.

## Project Overview
The project is an **epidemiological observatory** (Painel SINAN) for Anápolis-GO, Brazil (2020–2024). It is now structured as a modern modular web application using **Vite**.

### Core Technologies
- **Vite**: Build tool and development server.
- **Chart.js (v4.4.1)**: Data visualization library (managed via npm).
- **ES Modules (ESM)**: Used for modular JavaScript.
- **Vanilla CSS & HTML5**: Core technologies for structure and styling.

### Architecture
The project is organized into logical modules:
- `index.html`: Main entry point (HTML structure only).
- `src/main.js`: Main JavaScript entry point, orchestrating imports and initialization.
- `src/css/style.css`: Central design system and component styles.
- `src/data/constants.js`: Hardcoded epidemiological data and design constants (colors, labels).
- `src/js/navigation.js`: Logic for section switching and tab management.
- `src/js/charts/`:
    - `setup.js`: Chart.js registration and configuration.
    - `utils.js`: Helper functions for legends and axis defaults.

## Building and Running
The project now requires Node.js for development.

### Development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

### Production
1. Build for production: `npm run build`
2. The output will be in the `dist/` directory.

## Development Conventions
- **Modularity**: Always separate data from logic. New epidemiological data should be added to `src/data/constants.js`.
- **Componentization**: If the dashboard grows, consider splitting `src/main.js` into smaller modules under `src/js/charts/` (e.g., `visaoGeral.js`, `acidentes.js`).
- **CSS Variables**: Use the variables defined in `src/css/style.css` for any new styling to maintain visual consistency.
- **Testing**: Before finalizing changes, verify that all charts render correctly and the navigation functions across all tabs.

## Key Files
- `index.html`: The skeleton of the dashboard.
- `src/main.js`: Application logic.
- `src/css/style.css`: Stylesheet.
- `src/data/constants.js`: The project's "database" (mock/estimated data).
- `package.json`: Project configuration and dependencies.
