import React from "react";
import "./App.css";
import Display from "./components/Display";
import Clickable from "./components/Clickable";

function App() {
  return (
    <div className="calculator">
      <Display />
      <Clickable />
    </div>
  );
}

export default App;
