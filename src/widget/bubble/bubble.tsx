import React, { CSSProperties, FunctionComponent } from "react";
import { BubbleId, onInputChange, WidgetCoordinates } from "../widget-types";
import "./bubble.css";
import BubbleForm from "./bubble-form";

const getBubbleStyle = (coordinates: WidgetCoordinates): CSSProperties => {
  return { left: `${coordinates.x}px`, top: `${coordinates.y}px` };
};

const Bubble: FunctionComponent<{
  id: BubbleId;
  coordinates: WidgetCoordinates;
  onFieldChange: onInputChange;
}> = ({ id, coordinates, onFieldChange }) => {
  return (
    <div className="bubble" style={getBubbleStyle(coordinates)}>
      <BubbleForm
        coordinates={coordinates}
        onFieldChange={onFieldChange}
        id={id}
      />
    </div>
  );
};

export default Bubble;
