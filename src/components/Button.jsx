import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button className={props.button.name}>{props.button.value}</button>;
};

export default Button;
