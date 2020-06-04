import React from "react";
import "./Display.css";
import DisplayTop from "./DisplayTop";
import DisplayBottom from "./DisplayBottom";

const Display = () => {
  return (
    <div className="display">
      <DisplayTop />
      <DisplayBottom />
    </div>
  );
};

export default Display;
