import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { GitHubCalendar } from "react-github-calendar";
import { FolderGit2, Star, ExternalLink } from "lucide-react";
import githubData from "../../assets/github.json";
import "./github.scss";

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
  const [selectedYear, setSelectedYear] = useState(2026);
  const years = [2026, 2025, 2024];

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="80vw"
      height="calc(100vh - 120px)"
    >
      <div className="bento-main-container github-contributions-page">
        
        {/* Contributions Section */}
        <div className="bento-header">
          <h2>GitHub Contributions</h2>
          <p>Real-time commit tracking for {username}</p>
        </div>

        <div className="contribution-layout">
          <div className="calendar-container">
            <GitHubCalendar 
              username={username}
              year={selectedYear}
              colorScheme="dark"
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              blockSize={16}
              blockMargin={6}
              fontSize={14}
              hideColorLegend={false}
              labels={{
                totalCount: '{{count}} contributions in {{year}}',
              }}
            />
          </div>
          
          <div className="year-selector">
            {years.map(year => (
              <button 
                key={year}
                className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Pinned Projects Section */}
        <div className="bento-header" style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px' }}>Pinned</h2>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', fontSize: '14px', textDecoration: 'none' }}>Customize your pins</a>
        </div>

        <div className="bento-grid">
          {githubData.map((project) => (
            <BentoProjectCard key={project.id} data={project} />
          ))}
        </div>

      </div>
    </MacWindow>
  );
};

export default Github;
