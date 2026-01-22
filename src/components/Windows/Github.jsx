import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({ data }) => {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <div className="gh-title-area">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            className="gh-repo-icon"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <a
            href={data.repoLink}
            target="_blank"
            rel="noreferrer"
            className="gh-repo-name"
          >
            {data.title}
          </a>
          <span className="gh-badge">Public</span>
        </div>
      </div>
      <p className="gh-description">{data.description}</p>
      <div className="gh-card-footer">
        <div className="gh-stats">
          <div className="gh-stat-item">
            <span className={`gh-language-dot ${data.language}`}></span>
            <span className="gh-language-text">{data.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Github = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const username = "jaganparida";

  const heatmapUrl = `https://ghchart.rshah.org/39d353/${username}`;

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="gh-main-container">
        <div className="gh-contributions-section">
          <h3
            style={{ marginBottom: "1rem", color: "#c9d1d9", fontSize: "1rem" }}
          >
            Contributions
          </h3>
          <div className="gh-heatmap-card">
            <img
              src={heatmapUrl}
              alt="GitHub Heatmap"
              className="gh-heatmap-img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="gh-pinned-section">
          <h3
            style={{ marginBottom: "1rem", color: "#c9d1d9", fontSize: "1rem" }}
          >
            Pinned Projects
          </h3>
          <div className="gh-pinned-grid">
            {githubData.map((project) => (
              <GitCard key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
