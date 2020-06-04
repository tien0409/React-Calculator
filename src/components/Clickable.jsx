import React, { useState } from "react";
import "./Clickable.css";
import Button from "./Button";

const Clickable = () => {
  const [rowButtons, setRowButtons] = useState({
    1: [
      { value: "AC", name: "clear" },
      { value: "/", name: "math divide" },
      { value: "x", name: "math multiply" },
    ],
    2: [
      { value: "7", name: "seven" },
      { value: "8", name: "eight" },
      { value: "9", name: "nice" },
      { value: "+", name: "math add" },
    ],
    3: [
      { value: "4", name: "four" },
      { value: "5", name: "five" },
      { value: "6", name: "sĩ" },
      { value: "-", name: "math subtract" },
    ],
    4: [
      { value: "1", name: "one" },
      { value: "2", name: "two" },
      { value: "3", name: "three" },
    ],
    5: [
      { value: "0", name: "zero" },
      { value: ".", name: "dot" },
    ],
    6: [{ value: "=", name: "equals" }],
  });

  return (
    <div className="clickable">
      <div className="row">
        {rowButtons[1].map((i) => (
          <Button button={i} />
        ))}
      </div>
      <div className="row">
        {rowButtons[2].map((i) => (
          <Button button={i} />
        ))}
      </div>
      <div className="row">
        {rowButtons[3].map((i) => (
          <Button button={i} />
        ))}
      </div>
      <div className="row bottom-cal">
        <div className="left-bottom-cal">
          <div className="top">
            {rowButtons[4].map((i) => (
              <Button button={i} />
            ))}
          </div>
          <div className="bottom">
            {rowButtons[5].map((i) => (
              <Button button={i} />
            ))}
          </div>
        </div>
        <div className="right-bottom-cal">
          {rowButtons[6].map((i) => (
            <Button button={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clickable;
