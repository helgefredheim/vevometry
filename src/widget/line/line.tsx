import React, { FunctionComponent } from "react";
import "./line.css";
import { getLineLength, getLineStyle } from "./line-utils";
import { onInputChange, WidgetCoordinates } from "../widget-types";
import LineForm from "./line-form";

interface LineProps {
  point1: WidgetCoordinates;
  point2: WidgetCoordinates;
  onChange: onInputChange;
}

const Line: FunctionComponent<LineProps> = ({ point1, point2, onChange }) => {
  return (
    <div className="line" style={getLineStyle(point1, point2)}>
      <LineForm value={getLineLength(point1, point2)} onChange={onChange} />
    </div>
  );
};

export default Line;
