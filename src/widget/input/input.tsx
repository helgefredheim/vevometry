import React, { FunctionComponent } from "react";
import { setFieldValue } from "../widget-types";
import "./input.css";

const Input: FunctionComponent<{
  label: string;
  value: string;
  name: string;
  setValue: setFieldValue;
}> = ({ label, value, name, setValue }) => {
  return (
    <div className="input">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input
        className="input__text"
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={e => {
          setValue(name, e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
