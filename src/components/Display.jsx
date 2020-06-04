import React from "react";
import "./Display.css";
import DisplayTop from "./DisplayTop";
import DisplayBottom from "./DisplayBottom";

const Display = (props) => {
  return (
    <div className="display">
      <DisplayTop display={props.display} />
      <DisplayBottom result={props.result} />
    </div>
  );
};

export default Display;
