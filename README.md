<div align="center">

# To-Do Project

**A clean, glassmorphism-styled to-do list built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies, no build step.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

[Live Demo](https://zikreddincikla.github.io/glass-todo/) · [Report a Bug](https://github.com/zikreddincikla) · [Author](https://github.com/zikreddincikla)

🇬🇧 English | [🇹🇷 Türkçe](README.tr.md)

</div>
 
---

## Overview

To-Do Project is a lightweight task manager that runs entirely in the browser. Every task is written straight to `localStorage`, so your list survives page refreshes and browser restarts — without a backend, a database, or a single `npm install`.

It's built as a demonstration of solid fundamentals: semantic HTML, CSS Grid/Flexbox layout, `backdrop-filter` glass effects, and framework-free DOM manipulation.

> [!TIP]
> Because there's zero build tooling, you can literally double-click `index.html` and the app just works. That's the whole setup process.

## Features

- **Add tasks** — via button click or `Enter` key
- **Complete tasks** — one click toggles a task's completed state
- **Delete tasks** — remove individual items instantly
- **Bulk actions** — Check All, Uncheck All, and Clear All from the sidebar
- **Persistent storage** — tasks are saved to `localStorage`, so they're still there when you come back
- **History panel** — a running record of tasks from your session
- **Responsive layout** — reflows from a 3-column desktop grid into a stacked mobile view below `1080px`
- **Glassmorphism UI** — frosted-glass panels via `backdrop-filter: blur()`
- **SEO-ready** — Open Graph and Twitter Card meta tags are already wired up for link previews

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Structure | HTML5 | Semantic tags (`<header>`, `<main>`, `<aside>`, `<article>`, `<footer>`) |
| Styling | CSS3 | CSS Grid + Flexbox, `backdrop-filter`, responsive media queries |
| Behavior | Vanilla JavaScript (ES6) | DOM API, event listeners, `localStorage` |
| Build tools | None | Zero dependencies, zero config |

## Getting started

No installation required — this project has no dependencies to install.

```bash
git clone https://github.com/zikreddincikla/glass-todo.git
cd to-do-project
```

Then simply open `index.html` in your browser. For live-reload during development, you can optionally serve it with any static server:

```bash
npx serve .
```

<details>
<summary><b>Project structure</b></summary>

```
to-do-project/
├── index.html      # Markup and page structure
├── style.css       # Layout, theming, glassmorphism effects
├── app.js          # To-do logic, localStorage sync, event handling
└── Pictures/
    ├── Sunset.png  # Background + social preview image
    └── icon.ico    # Favicon
```

</details>

<details>
<summary><b>How persistence works</b></summary>

Every add, check, or delete action calls `save_todo()`, which serializes the current list into a plain array of `{ text, completed }` objects and writes it to `localStorage` under the `todos` key[^1]. On page load, `load_todo()` reads that array back and rebuilds the DOM from it — so the interface is always a direct reflection of what's in storage, not the other way around.

[^1]: This means clearing your browser's site data will also clear your to-do list — there's currently no cloud sync or export option.

</details>

## Author

Built and maintained by **Zikreddin**.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/zikreddincikla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/)

## License

Distributed under the MIT License. See `LICENSE` for details.

---

<div align="center">

© 2026 Zikreddin — All rights reserved.

</div>
