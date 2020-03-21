import React, { FunctionComponent } from "react";
import "./input.css";

const Input: FunctionComponent<React.HTMLProps<HTMLInputElement>> = ({
  label,
  value,
  name,
  id,
  onChange
}) => {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        className="input__text"
        type="number"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
