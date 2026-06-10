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
import ContextMenu from "./components/ContextMenu";

const wallpapers = [
  "https://raw.githubusercontent.com/vinceliuice/WhiteSur-wallpapers/master/4k/Monterey-dark.jpg", // Monterey Dark
  "https://raw.githubusercontent.com/vinceliuice/WhiteSur-wallpapers/master/4k/BigSur-dark.jpg", // BigSur Dark
  "https://raw.githubusercontent.com/vinceliuice/WhiteSur-wallpapers/master/4k/Catalina-dark.jpg", // Catalina Dark
  "https://raw.githubusercontent.com/vinceliuice/WhiteSur-wallpapers/master/4k/Mojave-dark.jpg", // Mojave Dark
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2564&auto=format&fit=crop" // Liquid Dark
];

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
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ show: true, x: e.pageX, y: e.pageY });
  };

  const nextWallpaper = () => {
    setWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main 
      onContextMenu={handleContextMenu}
      style={{ backgroundImage: `url(${wallpapers[wallpaperIndex]})` }}
    >
      <ContextMenu 
        show={contextMenu.show} 
        x={contextMenu.x} 
        y={contextMenu.y} 
        onClose={() => setContextMenu({ ...contextMenu, show: false })}
        onNextWallpaper={nextWallpaper}
        onRefresh={handleRefresh}
      />
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
