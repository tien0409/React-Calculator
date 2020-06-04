import React from "react";
import "./Button.css";

const Button = (props) => {
  const handleClickButton = () => {
    props.onClick(props.button.value);
  };

  return (
    <button onClick={handleClickButton} className={props.button.name}>
      {props.button.value}
    </button>
  );
};

export default Button;
