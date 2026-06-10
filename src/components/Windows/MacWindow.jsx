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
  const [isClosingWindow, setIsClosingWindow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpening(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!windowState || windowState[windowName] === false) return null;

  const handleMinimizeOrClose = (e) => {
    e.stopPropagation();
    setIsClosingWindow(true);
    setTimeout(() => {
      setwindowState((prev) => ({ ...prev, [windowName]: false }));
    }, 300);
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  const effectiveMaximized = isMaximized || isMobile;

  return (
    <Rnd
      size={effectiveMaximized ? { width: "100vw", height: isMobile ? "calc(100vh - 40px)" : "calc(100vh - 120px)" } : undefined}
      position={effectiveMaximized ? { x: 0, y: 32 } : undefined}
      disableDragging={effectiveMaximized}
      enableResizing={!effectiveMaximized}
      default={{ x: 300, y: 100, width: width, height: height }}
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
        ${effectiveMaximized ? "maximized" : ""} 
        ${isOpening ? "window-open-anim" : ""}
        ${isClosingWindow ? "window-close-anim" : ""}
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
