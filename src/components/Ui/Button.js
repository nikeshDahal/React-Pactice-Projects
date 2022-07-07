import React from "react";
import buttonCssModule from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={buttonCssModule.button} type={props.type || "submit"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
