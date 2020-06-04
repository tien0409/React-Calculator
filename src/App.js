import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Clickable from "./components/Clickable";

function App() {
  const [result, setResult] = useState("0");
  const [display, setDisplay] = useState("0");

  const handleClick = (type) => {
    switch (type) {
      case "AC":
        handleClear();
        break;
      case "/":
      case "x":
      case "+":
      case "-":
        handleMath(type);
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setResult("0");
  };

  const handleMath = (type) => {
    console.log(type);
  };

  return (
    <div className="calculator">
      <Display result={result} display={display} />
      <Clickable onClick={handleClick} />
    </div>
  );
}

export default App;
