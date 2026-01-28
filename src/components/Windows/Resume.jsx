import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="50vw"
      height="80vh"
    >
      <div className="resume-window">
        <iframe
          src="/Jagan_Parida_Resume.pdf#toolbar=0"
          frameBorder="0"
          title="Resume PDF"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
