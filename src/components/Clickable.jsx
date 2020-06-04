import React, { useState } from "react";
import "./Clickable.css";
import Button from "./Button";

const Clickable = (props) => {
  const [rowButtons, setRowButtons] = useState({
    1: [
      { value: "AC", name: "clear" },
      { value: "/", name: "math divide" },
      { value: "*", name: "math multiply" },
    ],
    2: [
      { value: "7", name: "number seven" },
      { value: "8", name: "number eight" },
      { value: "9", name: "number nice" },
      { value: "+", name: "math add" },
    ],
    3: [
      { value: "4", name: "number four" },
      { value: "5", name: "number five" },
      { value: "6", name: "number six" },
      { value: "-", name: "math subtract" },
    ],
    4: [
      { value: "1", name: "number one" },
      { value: "2", name: "number two" },
      { value: "3", name: "number three" },
    ],
    5: [
      { value: "0", name: "number zero" },
      { value: ".", name: "number dot" },
    ],
    6: [{ value: "=", name: "equals" }],
  });

  return (
    <div className="clickable">
      <div className="row">
        {rowButtons[1].map((i) => (
          <Button key={i.name} onClick={props.onClick} button={i} />
        ))}
      </div>
      <div className="row">
        {rowButtons[2].map((i) => (
          <Button key={i.name} onClick={props.onClick} button={i} />
        ))}
      </div>
      <div className="row">
        {rowButtons[3].map((i) => (
          <Button key={i.name} onClick={props.onClick} button={i} />
        ))}
      </div>
      <div className="row bottom-cal">
        <div className="left-bottom-cal">
          <div className="top">
            {rowButtons[4].map((i) => (
              <Button key={i.name} onClick={props.onClick} button={i} />
            ))}
          </div>
          <div className="bottom">
            {rowButtons[5].map((i) => (
              <Button key={i.name} onClick={props.onClick} button={i} />
            ))}
          </div>
        </div>
        <div className="right-bottom-cal">
          {rowButtons[6].map((i) => (
            <Button key={i} onClick={props.onClick} button={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clickable;
