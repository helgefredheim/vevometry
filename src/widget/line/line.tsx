import React, { FunctionComponent } from "react";
import { WidgetValues } from "../widget-types";
import Input from "../input/input";
import "./line.css";
import { getLineLength, getLineStyle } from "./line-utils";

type onLengthChange = (value: string) => void;

const LineForm: FunctionComponent<{
  state: WidgetValues;
  onChange: onLengthChange;
}> = ({ state, onChange }) => {
  return (
    <div className="form form--line">
      <Input
        value={getLineLength(state).toString()}
        label="Width"
        name="width"
        setValue={(fieldName, value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

const Line: FunctionComponent<{
  data: WidgetValues;
  onLineChange: onLengthChange;
}> = ({ data, onLineChange }) => {
  return (
    <div className="line" style={getLineStyle(data)}>
      <LineForm state={data} onChange={onLineChange} />
    </div>
  );
};

export default Line;
