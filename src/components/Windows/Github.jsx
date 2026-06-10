import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({ data }) => {
  return (
    <div
      className="gh-card"
      onClick={() => window.open(data.repoLink, "_blank")}
    >
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
            onClick={(e) => e.stopPropagation()}
          >
            {data.title}
          </a>
          <span className="gh-badge">Public</span>
        </div>
        <div className="gh-options-icon">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="#8b949e">
            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
      </div>
      <p className="gh-description">{data.description}</p>
      <div className="gh-card-footer">
        <div className="gh-stats">
          <div className="gh-stat-item">
            <span className={`gh-language-dot ${data.language}`}></span>
            <span className="gh-language-text">{data.language}</span>
          </div>
          {data.stars > 0 && (
            <div className="gh-stat-item">
              <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" width="16" fill="#8b949e">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
              </svg>
              <span>{data.stars}</span>
            </div>
          )}
          {data.liveLink && (
            <div className="gh-stat-item gh-live-link">
              <a href={data.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="#8b949e">
                  <path d="M10.604 1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.75.75 0 0 1-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1ZM3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path>
                </svg>
                <span>Live Demo</span>
              </a>
            </div>
          )}
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
          <div className="gh-section-header">
            <h3>Developer Activity</h3>
          </div>
          <div className="gh-dashboard-grid">
            <div className="gh-dashboard-card">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
                alt="GitHub Stats"
                className="gh-dashboard-img"
              />
            </div>
            <div className="gh-dashboard-card">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
                alt="Top Languages"
                className="gh-dashboard-img"
              />
            </div>
          </div>
        </div>
        <div className="gh-pinned-section">
          <div className="gh-section-header">
            <h3>Pinned</h3>
            <span className="gh-link-text">Customize your pins</span>
          </div>
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
