import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";
import { FolderGit2, Star, ExternalLink, Activity } from "lucide-react";

const BentoProjectCard = ({ data }) => {
  return (
    <div
      className="bento-card project-card"
      onClick={() => window.open(data.repoLink, "_blank")}
    >
      <div className="card-bg-gradient"></div>
      <div className="card-content">
        <div className="card-header">
          <div className="icon-wrapper">
            <FolderGit2 size={20} className="project-icon" />
          </div>
          {data.liveLink && (
            <a 
              href={data.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="live-link-btn"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
        </div>
        <h3 className="project-title">{data.title}</h3>
        <p className="project-desc">{data.description}</p>
        <div className="project-footer">
          <span className={`lang-badge ${data.language}`}>
            <span className="dot"></span> {data.language}
          </span>
          {data.stars > 0 && (
            <span className="star-badge">
              <Star size={14} /> {data.stars}
            </span>
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

  // Using a dark purple/blue theme for the heatmap to match premium UI
  const heatmapUrl = `https://ghchart.rshah.org/58a6ff/${username}`;

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="bento-main-container">
        <div className="bento-header">
          <h2>Developer Dashboard</h2>
          <p>Activity & Projects Overview</p>
        </div>

        <div className="bento-grid">
          
          {/* Stats Box */}
          <div className="bento-card stats-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="GitHub Stats"
              className="stats-img"
            />
          </div>

          {/* Language Box */}
          <div className="bento-card lang-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="Top Languages"
              className="stats-img"
            />
          </div>

          {/* Heatmap Box (Spans full width) */}
          <div className="bento-card heatmap-card full-width">
            <div className="heatmap-header">
              <Activity size={18} className="activity-icon" />
              <h4>Contribution History</h4>
            </div>
            <div className="heatmap-scroll-container">
              <img src={heatmapUrl} alt="Github Heatmap" className="heatmap-img" />
            </div>
          </div>

          {/* Project Boxes */}
          {githubData.map((project) => (
            <BentoProjectCard key={project.id} data={project} />
          ))}

        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
