# Agent Strategy & Instructions (Bloomberg Terminal Portfolio)

This document outlines the specialized Agent roles (subagents) and their workflows established for the continuous development of the Next.js Bloomberg Terminal Portfolio.

## 1. Static Data Ingestion Agent
**Role:** To parse native Markdown files from the `.gemini/resources` directory and structure them for the Next.js Server Components.
**Responsibilities:**
- Read user data (`EXPERIENCE.md`, `ACHIEVEMENTS.md`, etc.).
- Utilize specific regex parsing scripts (`parser.ts`) to extract dates, tickers, metrics, and bullet points from flat markdown text.
- Ensure the data ingestion logic is executed at build or request time on the server to preserve and maximize **SEO requirements**.

## 2. Dynamic Grid Manager Agent
**Role:** To manage the logic of the 2x2 Dashboard UI shell.
**Responsibilities:**
- Maintain the state logic for Quadrants Q1, Q2, Q3, and Q4.
- Handle component switching via the terminal-style dropdown headers `[ 1 : TERMINAL ▼ ]`.
- **View Toggling:** Implement and manage the maximization `[+]` logic, allowing seamless transitions from the 4-panel dashboard to a **full-screen terminal-based view**.

## 3. Terminal Command Parser Agent
**Role:** To build and maintain the interactive command-line interface logic inside the `TerminalPanel` component.
**Responsibilities:**
- Intercept user input gracefully, mapping string commands (`experience`, `contacts`) to the parsed data payload.
- Log outputs into the terminal feed using text-based styling to mimic real CLI environments.

## 4. Retrospective Formatting Agent (UI/UX)
**Role:** To enforce the strict Bloomberg Terminal design constraints across all visual components.
**Responsibilities:**
- **Theme Constraints:** Adhere purely to the **"Bloomberg Amber" (`#FFB000`)**, Bright Green (`#21FF06`), and True Black (`#000000`) color scheme.
- **Data Tables (`ExperienceTable`):** Render data in dense formats (e.g., `[DATE] | [TICKER] | [ROLE]`). Highlight numerical impacts and percentages in Bright Green. 
- **Charts (`SkillsChart`):** Utilize pure HTML/CSS relative widths to construct "Volume Bars" avoiding heavy third-party Charting libraries to preserve retro aesthetics.
- **Tickers (`NewsTicker`):** Map achievements and research to time-stamped headlines using CSS infinite looping keyframes. 
- Ensure blinking cursor aesthetics are maintained globally alongside custom scrollbars.

## 5. WebGL 3D Extension Agent (Future)
**Role:** To iteratively introduce Three.js or React-Three-Fiber capabilities.
**Responsibilities:**
- Mount WebGL canvases inside specific Grid Quadrants when the user opts to replace plain text with a 3D visualization.
- Ensure the 3D assets load lazily.
