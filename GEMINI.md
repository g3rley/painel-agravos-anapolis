# Project Context: Painel de Agravos Anápolis

This document provides essential context and guidelines for interacting with the `painel-agravos-anapolis` project.

## Project Overview
The project is an **epidemiological observatory** (Painel SINAN) focused on work-related health issues and underreporting in Anápolis-GO, Brazil, covering the period from 2020 to 2024. It is a single-page web application designed for a presentation at the UniEVANGÉLICA Medicine course.

### Core Technologies
- **HTML5/CSS3**: Pure vanilla implementation for layout and styling.
- **JavaScript**: Client-side logic for navigation and chart initialization.
- **Chart.js (v4.4.1)**: Used for all data visualizations (line, bar, pie, doughnut, radar, and area charts).
- **Google Fonts**: Uses 'DM Sans' and 'DM Mono'.

### Architecture
The project follows a **Single File Architecture**. All HTML structure, CSS styling, and JavaScript logic (including data and chart configurations) are contained within `index.html`. 

## Building and Running
As a static web project, there is no build or installation process required.

- **Running Locally**: Open `index.html` directly in any modern web browser.
- **Deployment**: Can be hosted on any static site hosting service (GitHub Pages, Vercel, Netlify) by serving the `index.html` file.
- **Dependencies**: Loaded via CDN (Chart.js and Google Fonts). No `npm install` or local dependencies are managed.

## Development Conventions
- **All-in-one File**: Maintain the pattern of keeping HTML, CSS, and JS in `index.html` unless a refactoring to a build system (like Vite or Webpack) is explicitly requested.
- **Styling**: Uses CSS Variables (defined in `:root`) for a consistent design system (colors, spacing, radii).
- **Data Visualization**: Charts are initialized in the `<script>` tag at the bottom of the file. Data for the charts is hardcoded as arrays within the script.
- **Responsive Design**: The CSS includes media queries to ensure the dashboard is functional on mobile devices.
- **Language**: The user interface and documentation are in **Portuguese (pt-BR)**.

## Key Files
- `index.html`: The entire application (Structure, Styles, Logic, and Data).
- `README.md`: Basic project introduction.
- `LICENSE`: Project licensing terms.
