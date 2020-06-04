import React from "react";
import "./Clickable.css";

const Clickable = () => {
  return (
    <div className="clickable">
      <div className="row">
        <button className="btn clear">AC</button>
        <button className="btn math divide">/</button>
        <button className="btn math multiply">x</button>
      </div>
      <div className="row">
        <button className="btn seven">7</button>
        <button className="btn eight">8</button>
        <button className="btn nine">9</button>
        <button className="btn math subtract">-</button>
      </div>
      <div className="row">
        <button className="btn four">4</button>
        <button className="btn five">5</button>
        <button className="btn six">6</button>
        <button className="btn math add">+</button>
      </div>
      <div className="row bottom-cal">
        <div className="left-bottom-cal">
          <div className="top">
            <button className="btn one">1</button>
            <button className="btn two">2</button>
            <button className="btn three">3</button>
          </div>
          <div className="bottom">
            <button className="btn zero">0</button>
            <button className="btn dot">.</button>
          </div>
        </div>
        <div className="right-bottom-cal">
          <button className="btn equals">=</button>
        </div>
      </div>
    </div>
  );
};

export default Clickable;
