import React from "react";
import MacWindow from "./MacWindow";
import { Github, Linkedin, Mail, Globe, Twitter } from "lucide-react"; 
import "./link.scss";

const Link = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const links = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/jaganparida",
      icon: <Github size={20} />,
      color: "#333",
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/in/jagan-parida04",
      icon: <Linkedin size={20} />,
      color: "#0077b5",
    },
    {
      id: 3,
      name: "Portfolio Website",
      url: "https://jaganparida.github.io/Portfolio/",
      icon: <Globe size={20} />,
      color: "#25D366",
    },
    {
      id: 4,
      name: "Email Me",
      url: "mailto:jaganparida39064@gmail.com",
      icon: <Mail size={20} />,
      color: "#EA4335",
    },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="400px"
      height="600px"
    >
      <div className="link-window">
        <div className="profile-header">
          <img
            src="https://github.com/jaganparida.png" 
            alt="Profile"
            className="avatar"
          />
          <h3>Jagan Parida</h3>
          <p>Full-Stack Developer | Open Source</p>
        </div>

        <div className="links-container">
          {links.map((link) => (
            <div
              key={link.id}
              className="link-card"
              onClick={() => handleLinkClick(link.url)}
            >
              <div className="icon-wrapper" style={{ color: link.color }}>
                {link.icon}
              </div>
              <span className="link-text">{link.name}</span>
              <div className="arrow-icon">→</div>
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default Link;
