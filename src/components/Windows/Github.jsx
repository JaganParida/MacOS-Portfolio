import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { GitHubCalendar } from "react-github-calendar";
import "./github.scss";

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
      width="95vw"
      height="calc(100vh - 85px)"
    >
      <div className="bento-main-container github-contributions-page">
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
      </div>
    </MacWindow>
  );
};

export default Github;
