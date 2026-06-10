import React, { useEffect, useRef } from "react";
import "./contextMenu.scss";

const ContextMenu = ({ x, y, show, onClose, onNextWallpaper, onRefresh }) => {
  const menuRef = useRef(null);

  // Close context menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="mac-context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
      ref={menuRef}
    >
      <div
        className="menu-item"
        onClick={() => {
          onNextWallpaper();
          onClose();
        }}
      >
        Change Wallpaper...
      </div>
      <div className="menu-divider"></div>
      <div
        className="menu-item"
        onClick={() => {
          onRefresh();
          onClose();
        }}
      >
        Refresh Page
      </div>
      <div className="menu-divider"></div>
      <div
        className="menu-item"
        onClick={() => {
          window.open("https://github.com/JaganParida/MacOS-Portfolio", "_blank");
          onClose();
        }}
      >
        View Source
      </div>
    </div>
  );
};

export default ContextMenu;
