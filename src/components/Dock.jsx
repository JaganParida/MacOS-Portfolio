import React, { useState } from "react";
import "./dock.scss";

const Dock = ({ windowState, setwindowState, setActiveWindow }) => {
  const [bouncing, setBouncing] = useState(null);

  const openWindow = (name) => {

    setBouncing(name);

    setwindowState((state) => ({
      ...state,
      [name]: true,
    }));
    setActiveWindow(name);

    setTimeout(() => setBouncing(null), 500);
  };

  return (
    <footer className="dock">
      <div
        className="icon-container"
        style={{ display: "flex", gap: "0.75rem" }}
      >
        <div
          className={`icon github ${windowState.github ? "is-open" : ""} ${bouncing === "github" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("github")}
        >
          <img src="/doc-icons/github.svg" alt="Github" />
        </div>

        <div
          className={`icon note ${windowState.note ? "is-open" : ""} ${bouncing === "note" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("note")}
        >
          <img src="/doc-icons/note.svg" alt="Notes" />
        </div>

        <div
          className={`icon pdf ${windowState.resume ? "is-open" : ""} ${bouncing === "resume" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("resume")}
        >
          <img src="/doc-icons/pdf.svg" alt="Resume" />
        </div>

        <div
          className={`icon calender ${windowState.calendar ? "is-open" : ""} ${bouncing === "calendar" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("calendar")}
        >
          <img src="/doc-icons/calender.svg" alt="Calender" />
        </div>

        <div
          className={`icon spotify ${windowState.spotify ? "is-open" : ""} ${bouncing === "spotify" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("spotify")}
        >
          <img src="/doc-icons/spotify.svg" alt="Spotify" />
        </div>

        <div
          className={`icon mail ${windowState.mail ? "is-open" : ""} ${bouncing === "mail" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("mail")}
        >
          <img src="/doc-icons/mail.svg" alt="Mail" />
        </div>

        <div
          className={`icon link ${windowState.link ? "is-open" : ""} ${bouncing === "link" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("link")}
        >
          <img src="/doc-icons/link.svg" alt="Links" />
        </div>

        <div
          className={`icon cli ${windowState.cli ? "is-open" : ""} ${bouncing === "cli" ? "bounce" : ""}`}
          onMouseDown={() => openWindow("cli")}
        >
          <img src="/doc-icons/cli.svg" alt="Terminal" />
        </div>
      </div>
    </footer>
  );
};

export default Dock;
