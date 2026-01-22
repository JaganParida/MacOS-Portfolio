import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter
            language="typescript"
            style={atelierDuneDark}
            customStyle={{
              padding: "0",
              margin: "0",
              fontSize: "0.9rem",
              lineHeight: "1.5",
            }}
          >
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <div className="loading-state">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
