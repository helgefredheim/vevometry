import React, { FunctionComponent } from "react";
import "./form.css";

const Form: FunctionComponent<{ className?: string }> = props => {
  return (
    <div className={`form ${props.className}` || ""}>{props.children}</div>
  );
};

export default Form;
