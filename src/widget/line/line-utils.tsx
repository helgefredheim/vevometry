import { CSSProperties } from "react";
import { WidgetCoordinates } from "./line";

const getXLength = (data: WidgetCoordinates): number => {
  return data.x1 - data.x2;
};

const getYLength = (data: WidgetCoordinates): number => {
  return data.y1 - data.y2;
};

export const getLineLength = (data: WidgetCoordinates): number => {
  const side1 = getXLength(data);
  const side2 = getYLength(data);

  return Math.floor(Math.sqrt(side1 * side1 + side2 * side2));
};

const getAngle = (data: WidgetCoordinates): number => {
  return (Math.atan2(getYLength(data), getXLength(data)) * 180) / Math.PI + 180;
};

export const getLineStyle = (data: WidgetCoordinates): CSSProperties => {
  return {
    top: `${data.x1 + 50}px`,
    left: `${data.y1 + 50}px`,
    width: `${getLineLength(data)}px`,
    transform: `rotate(${getAngle(data)}deg)`
  };
};
