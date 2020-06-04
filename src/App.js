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
      case "*":
      case "+":
      case "-":
        handleMath(type);
        break;
      case ".":
        handleDot(type);
        break;
      default:
        handleNumber(type);
        break;
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setResult("0");
  };

  const handleMath = (type) => {
    setResult(type);
    if (parseInt(display[display.length - 1])) {
      setDisplay(display.concat(type));
    } else {
      const oldDisplay = display.slice(0, -1);
      setDisplay(oldDisplay.concat(type));
    }
  };

  const handleNumber = (type) => {
    if (result.length >= 30) {
      // limit  input number length
      setResult("Digit Limit");
    } else if (result === "0" || result === "Digit Limit") {
      setResult(type);
      setDisplay(type);
    } else if (
      result === "+" ||
      result === "-" ||
      result === "*" ||
      result === "/"
    ) {
      setResult(type);
    } else {
      setDisplay(display.concat(type));
      setResult(result.concat(type));
    }
  };

  const handleDot = (type) => {};

  return (
    <div className="calculator">
      <Display result={result} display={display} />
      <Clickable onClick={handleClick} />
    </div>
  );
}

export default App;
