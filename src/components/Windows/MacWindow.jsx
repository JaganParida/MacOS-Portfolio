import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { X, Minus, Maximize2 } from "lucide-react";
import "./window.scss";

const MacWindow = ({
  children,
  width = "45vw",
  height = "53vh",
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpening(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!windowState || windowState[windowName] === false) return null;

  const handleMinimizeOrClose = (e) => {
    e.stopPropagation();
    setwindowState((prev) => ({ ...prev, [windowName]: false }));
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  return (
    <Rnd
      size={isMaximized ? { width: "100vw", height: "94vh" } : undefined}
      position={isMaximized ? { x: 0, y: 30 } : undefined}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      default={{ x: 300, y: 200, width: width, height: height }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      dragHandleClassName="nav"
      style={{
        zIndex: activeWindow === windowName ? 100 : 10,
      }}
      onMouseDown={() => setActiveWindow(windowName)}
    >
      <div
        className={`window 
        ${isMaximized ? "maximized" : ""} 
        ${isOpening ? "window-open-anim" : ""}
      `}
      >
        <div className="nav">
          <div className="dots">
            <div className="dot red" onMouseDown={handleMinimizeOrClose}>
              <X size={8} className="icon" />
            </div>

            <div className="dot yellow" onMouseDown={handleMinimizeOrClose}>
              <Minus size={8} className="icon" />
            </div>

            <div className="dot green" onMouseDown={handleMaximize}>
              <Maximize2 size={8} className="icon" />
            </div>
          </div>
          <div className="title">
            <p>{windowName} — zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
