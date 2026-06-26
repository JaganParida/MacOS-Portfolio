import React, { useState, useEffect } from "react";
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
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1920&q=80&auto=format&fit=crop", // Smooth dark metallic/grey abstract
  "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1920&q=80&auto=format&fit=crop", // Dark grey smooth 3d shapes
  "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1920&q=80&auto=format&fit=crop", // Premium smooth dark grey gradient
  "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1920&q=80&auto=format&fit=crop"  // Minimalist dark grey tone
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
  const [prevWallpaperIndex, setPrevWallpaperIndex] = useState(null);
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });

  useEffect(() => {
    // Preload all wallpapers to ensure instant, smooth cross-fade animation
    wallpapers.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ show: true, x: e.pageX, y: e.pageY });
  };

  const nextWallpaper = () => {
    setPrevWallpaperIndex(wallpaperIndex);
    setWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main onContextMenu={handleContextMenu}>
      <div className="wallpaper-container">
        {wallpapers.map((url, idx) => (
          <div
            key={url}
            className={`wallpaper-layer ${
              idx === wallpaperIndex ? "active" : idx === prevWallpaperIndex ? "previous" : ""
            }`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
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
