import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { GitHubCalendar } from "react-github-calendar";
import { Book, Star, GitFork, GripHorizontal } from "lucide-react";
import githubData from "../../assets/github.json";
import "./github.scss";

const PinnedRepoCard = ({ data }) => {
  return (
    <div
      className="pinned-repo-card"
      onClick={() => window.open(data.repoLink, "_blank")}
    >
      <div className="repo-header">
        <div className="repo-title-row">
          <Book size={16} className="repo-icon" />
          <a href={data.repoLink} className="repo-name" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>{data.title}</a>
          <span className="public-badge">Public</span>
        </div>
        <GripHorizontal size={16} className="drag-icon" />
      </div>
      
      <p className="repo-desc">{data.description}</p>
      
      <div className="repo-footer">
        <div className="lang-info">
          <span className={`lang-dot ${data.language}`}></span>
          <span className="lang-name">{data.language}</span>
        </div>
        
        {data.stars > 0 && (
          <div className="repo-stat">
            <Star size={14} className="stat-icon" /> {data.stars}
          </div>
        )}
        
        {/* Using a mock fork count of 1 since data has none, like the screenshot shows forks */}
        <div className="repo-stat">
          <GitFork size={14} className="stat-icon" /> 1
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
  const calendarRef = React.useRef(null);

  React.useEffect(() => {
    // Small delay to allow the calendar SVG to render before scrolling
    const timer = setTimeout(() => {
      if (calendarRef.current) {
        calendarRef.current.scrollLeft = calendarRef.current.scrollWidth;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedYear]);

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="80vw"
    >
      <div className="bento-main-container github-contributions-page">
        
        {/* Contributions Section */}
        <div className="bento-header">
          <h2>GitHub Contributions</h2>
          <p>Real-time commit tracking for {username}</p>
        </div>

        <div className="contribution-layout">
          <div className="calendar-container" ref={calendarRef}>
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
        <div className="bento-header" style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <h2 style={{ fontSize: '20px', margin: 0 }}>Pinned</h2>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', fontSize: '14px', textDecoration: 'none' }}>Customize your pins</a>
        </div>

        <div className="bento-grid">
          {githubData.map((project) => (
            <PinnedRepoCard key={project.id} data={project} />
          ))}
        </div>

      </div>
    </MacWindow>
  );
};

export default Github;
