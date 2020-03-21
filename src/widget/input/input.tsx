import React, { FunctionComponent } from "react";
import "./input.css";
import { setValue } from "../widget-types";

const Input: FunctionComponent<{
  label: string;
  value: number;
  setValue: setValue;
}> = ({ label, value, setValue }) => {
  return (
    <div className="input">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input
        className="input__text"
        type="number"
        name={label}
        id={label}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
