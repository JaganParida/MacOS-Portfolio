import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/Windows/MacWindow";
import Github from "./components/Windows/Github";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <Github/>
    </main>
  );
};

export default App;
