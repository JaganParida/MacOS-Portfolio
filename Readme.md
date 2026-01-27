#  Jagan Parida | macOS Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<h3>
  <a href="https://jagan-portfolio-cyan.vercel.app/"> Launch Live System</a>
  <span> | </span>
  <a href="https://github.com/JaganParida/MacOS-Portfolio/issues">🐛 Report Bug</a>
</h3>

<p><i>"Designing the future, one pixel at a time."</i></p>

</div>

---

## ⚡️ Overview

Welcome to **Jagan Parida's Portfolio**.

Instead of a traditional static resume, I built a **fully functional web-based operating system**. This project showcases my skills in **Full-Stack Development**, **UI/UX Design**, and **Complex State Management** by mimicking the macOS ecosystem right in the browser.

> **Why this?** It demonstrates not just _what_ I can build, but _how_ I obsess over details—from the physics of the dock animations to the z-index window layering.

---

## 💎 System Architecture

### 🖥️ The Desktop

- **Dynamic Environment:** A highly optimized desktop interface that manages window states, active applications, and system time.
- **Window Manager:** A custom-built engine that handles dragging, resizing, minimizing, and maximizing windows with persistence.

### 🚀 The Dock

- **Interactive Physics:** Icons scale and bounce based on mouse proximity and click events.
- **State Awareness:** Visual indicators show which apps are open, minimized, or active.

### 📂 Application Suite

| Icon | App          | My Implementation                                                                                   |
| :--: | :----------- | :-------------------------------------------------------------------------------------------------- |
|  🧑‍💻  | **Terminal** | A functional CLI that allows users to navigate my skills and bio using commands like `ls` and `cd`. |
|  🐙  | **GitHub**   | Fetches my live contribution data and pinned repositories using the GitHub API.                     |
|  🎵  | **Spotify**  | An embedded player connected to my personal "Coding Mode" playlist.                                 |
|  📧  | **Mail**     | A fully working email client. **Clicking Send actually opens your Gmail** to email me directly!     |
|  🔗  | **Links**    | A custom "Linktree" style window organizing my social presence.                                     |
|  📅  | **Calendar** | A custom-built calendar logic to handle date navigation and real-time updates.                      |

---

## 🛠️ Technical Specifications

- **Core Framework:** `React.js` (v18)
- **Build Tool:** `Vite` (Lightning fast HMR)
- **Styling:** `SCSS` (Custom modules, no UI libraries used for core layout)
- **Icons:** `Lucide React`
- **Animation:** `Framer Motion`
- **Deployment:** `Vercel`

---

## 🔋 Getting Started

Want to see how I built this? Follow these steps to run my code locally.

### Prerequisites

- **Node.js** (v16+)
- **npm**

### Installation

1. **Clone my repository**
   ```bash
   git clone [https://github.com/JaganParida/MacOS-Portfolio.git](https://github.com/JaganParida/MacOS-Portfolio.git)
   cd MacOS-Portfolio
   ```

Open your browser and visit:
`http://localhost:5173`

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Dock.jsx
│   ├── Nav.jsx
│   ├── Windows/
│   │   ├── Calendar.jsx
│   │   ├── Cli.jsx
│   │   ├── Github.jsx
│   │   ├── Link.jsx
│   │   ├── Mail.jsx
│   │   ├── Note.jsx
│   │   ├── Resume.jsx
│   │   └── Spotify.jsx
│   └── MacWindow.jsx
├── App.jsx
└── main.jsx
```

---

## 🔧 Configuration

- **Projects:** `src/assets/github.json`
- **Resume:** `public/Resume.pdf`
- **About Me:** `public/note.txt`
- **Email:** `MY_EMAIL` in `Mail.jsx`

---

<div align="center">
  <p>If you enjoyed this project, please give it a ⭐️</p>
  <p>Designed & Built with ❤️ by Jagan</p>
</div>
