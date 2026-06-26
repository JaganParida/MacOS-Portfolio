import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { X, Minus, Maximize2 } from "lucide-react";
import "./window.scss";

const MacWindow = ({
  children,
  width = "45vw",
  height = "calc(100vh - 130px)",
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

  const getInitialPosition = () => {
    let w = 800;
    if (typeof width === 'string') {
      if (width.includes('calc')) {
        w = window.innerWidth * 0.8; // Safe fallback
      } else if (width.includes('vw')) {
        w = (parseFloat(width.replace(/[^\d.-]/g, '')) / 100) * window.innerWidth;
      } else if (width.includes('px')) {
        w = parseFloat(width.replace(/[^\d.-]/g, ''));
      }
    } else if (typeof width === 'number') {
      w = width;
    }
    
    let h = 600;
    if (typeof height === 'string') {
      if (height.includes('calc(100vh - 130px)')) {
        h = window.innerHeight - 130;
      } else if (height.includes('calc')) {
        h = window.innerHeight * 0.8; // Safe fallback
      } else if (height.includes('vh')) {
        h = (parseFloat(height.replace(/[^\d.-]/g, '')) / 100) * window.innerHeight;
      } else if (height.includes('px')) {
        h = parseFloat(height.replace(/[^\d.-]/g, ''));
      }
    } else if (typeof height === 'number') {
      h = height;
    }
    
    const calculatedX = Math.max(0, (window.innerWidth - w) / 2);
    
    return {
      x: isNaN(calculatedX) ? 100 : calculatedX,
      y: 40, // Always position exactly below nav bar (32px nav + 8px gap)
      width: isNaN(w) ? 800 : w,
      height: isNaN(h) ? 600 : h
    };
  };

  const initialPos = getInitialPosition();

  return (
    <Rnd
      size={effectiveMaximized ? { width: "100vw", height: isMobile ? "calc(100vh - 40px)" : "calc(100vh - 120px)" } : undefined}
      position={effectiveMaximized ? { x: 0, y: 32 } : undefined}
      disableDragging={effectiveMaximized}
      enableResizing={!effectiveMaximized}
      default={{ 
        x: initialPos.x, 
        y: initialPos.y, 
        width: initialPos.width, 
        height: initialPos.height 
      }}
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
