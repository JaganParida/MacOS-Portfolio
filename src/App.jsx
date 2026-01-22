import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/Windows/Github";
import Note from "./components/Windows/Note";
import Resume from "./components/Windows/Resume";
import Spotify from "./components/Windows/Spotify";
import Cli from "./components/Windows/Cli";
import Calendar from "./components/Windows/Calendar";
import Link from "./components/Windows/Link";
import Mail from "./components/Windows/Mail"; 

const App = () => {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    calendar: false,
    link: false,
    mail: false, 
  });

  const [activeWindow, setActiveWindow] = useState("");

  return (
    <main>
      <Nav />
      <Dock
        windowState={windowState}
        setwindowState={setwindowState}
        setActiveWindow={setActiveWindow}
      />


      {windowState.github && (
        <Github
          windowName="github"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.calendar && (
        <Calendar
          windowName="calendar"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.link && (
        <Link
          windowName="link"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.mail && (
        <Mail
          windowName="mail"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}

      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          windowState={windowState}
          setwindowState={setwindowState}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
        />
      )}
    </main>
  );
};

export default App;
