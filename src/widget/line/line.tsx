import React, { FunctionComponent } from "react";
import "./line.css";
import { getLineLength, getLineStyle } from "./line-utils";
import Input from "../input/input";

export interface WidgetCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const LineForm: FunctionComponent<{ value: number }> = ({ value }) => {
  return (
    <div className="form form--line">
      <Input
        value={value}
        label="lengde"
        setValue={() => {
          console.log("not implemented");
        }}
      />
    </div>
  );
};

const Line: FunctionComponent<WidgetCoordinates> = props => {
  return (
    <div className="line" style={getLineStyle(props)}>
      <LineForm value={getLineLength(props)} />
    </div>
  );
};

export default Line;
