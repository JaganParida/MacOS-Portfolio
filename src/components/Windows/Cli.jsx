import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () => `Hi, I'm Jagan Parida 👋
Full-Stack Developer and Computer Science Engineering student.

I focus on building scalable web applications, contributing to open-source,
and strengthening my problem-solving skills through DSA and real-world projects.`,
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend:
  - Next.js
  - React.js
  - Angular
  - GSAP
  - Tailwind CSS

Backend:
  - Node.js
  - Express.js
  - Spring Boot

Databases:
  - MongoDB
  - MySQL

Problem Solving:
  - Java
  - Data Structures & Algorithms
  - LeetCode

Tools:
  - Git
  - Docker
  - Figma
  - Postman`,
    },

    projects: {
      description: "View major projects",
      usage: "projects",
      fn: () => `1. Attendance Management System
   - Full-stack web application
   - Focus on automation & scalability

2. NotesVault
   - Modern notes sharing platform
   - HTML, CSS, JavaScript

3. Music Player Web App
   - Saavn API integration
   - Search & playback features

4. CLI Portfolio
   - React-based interactive terminal`,
    },

    experience: {
      description: "Work & open-source experience",
      usage: "experience",
      fn: () => `Open Source Contributor (2025 - 2026)
  - OSCG'26 Contributor
  - SWOC Season 6 Contributor
  - 750+ GitHub contributions

Web Development & Design Intern
Oasis Infobyte (Dec 2025)
  - Built responsive UI components
  - Applied modern design principles`,
    },

    achievements: {
      description: "Competitive achievements",
      usage: "achievements",
      fn: () => `• Shortlisted – Google Cloud Gen AI Exchange Hackathon 2025
  Project: Personalized Career & Skills Advisor

• 365-Day LeetCode Streak (In Progress)
  Goal: 800+ Problems Solved`,
    },

    education: {
      description: "Academic background",
      usage: "education",
      fn: () => `B.Tech in Computer Science & Engineering
Centurion University of Technology & Management
Expected Graduation: 2027`,
    },

    status: {
      description: "Current status",
      usage: "status",
      fn: () => `Status: Building Attendance Management Systems & Exploring GenAI
Location: Odisha, India
Open to: Learning, Open Source & Collaboration`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () => `Email: jaganparida39064@gmail.com
LinkedIn: linkedin.com/in/jagan-parida04
GitHub: github.com/jaganparida`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/jaganparida", "_blank");
        return "Opening GitHub profile...";
      },
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔══════════════════════════════════════════════╗
║        Jagan Parida — CLI Portfolio          ║
╚══════════════════════════════════════════════╝

Full-Stack Developer | Open Source Contributor
Problem Solver | CSE Undergraduate

Type 'help' to see available commands.

Try:
  • about
  • skills
  • projects
  • experience
  • achievements
  • status
  • contact

Ready to explore 🚀
`;

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"jagan@portfolio:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
          style={{ background: "transparent", minHeight: "100%" }}
          contentStyle={{ color: "#a8a8a8" }}
          inputStyle={{ color: "#fff" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
