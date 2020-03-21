import React, { CSSProperties, FunctionComponent, useState } from "react";
import {
  BubbleDragEvent,
  BubbleId,
  InputChangeEvent,
  WidgetCoordinates
} from "../widget-types";
import "./bubble.css";
import BubbleForm from "./bubble-form";

const getBubbleStyle = (coordinates: WidgetCoordinates): CSSProperties => {
  return { left: `${coordinates.x}px`, top: `${coordinates.y}px` };
};

const Bubble: FunctionComponent<{
  id: BubbleId;
  coordinates: WidgetCoordinates;
  setCoordinates?: any;
}> = ({ id, coordinates, setCoordinates }) => {
  const [offset, setOffset] = useState<WidgetCoordinates>({ x: 0, y: 0 });
  const onFieldChange = (event: InputChangeEvent) => {
    setCoordinates({
      ...coordinates,
      [event.currentTarget.name]: Number(event.currentTarget.value)
    });
  };

  return (
    <div
      className="bubble"
      draggable="true"
      style={getBubbleStyle(coordinates)}
      onDragStart={(event: BubbleDragEvent) => {
        setOffset({
          x: coordinates.x - event.clientX,
          y: coordinates.y - event.clientY
        });
      }}
      onDrag={(event: BubbleDragEvent) => {
        if (event.clientX !== 0 && event.clientY !== 0) {
          setCoordinates({
            x: event.clientX + offset.x,
            y: event.clientY + offset.y
          });
        }
      }}
    >
      <BubbleForm
        coordinates={coordinates}
        onFieldChange={onFieldChange}
        id={id}
      />
    </div>
  );
};

export default Bubble;
