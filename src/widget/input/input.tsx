import React, { FunctionComponent } from "react";
import "./input.css";

const Input: FunctionComponent<React.HTMLProps<HTMLInputElement>> = props => {
  return (
    <div className="input">
      <label htmlFor={props.id} className="input__label">
        {props.label}
      </label>
      <input className="input__text" type="number" {...props} />
    </div>
  );
};

export default Input;
