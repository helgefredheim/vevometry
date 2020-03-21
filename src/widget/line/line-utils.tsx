import { CSSProperties } from "react";
import { WidgetCoordinates } from "../widget-types";

const getLength = (a: number, b: number) => {
  return a - b;
};

const getXLength = (
  point1: WidgetCoordinates,
  point2: WidgetCoordinates
): number => {
  return getLength(point2.x, point1.x);
};

const getYLength = (
  point1: WidgetCoordinates,
  point2: WidgetCoordinates
): number => {
  return getLength(point2.y, point1.y);
};

export const getLineLength = (
  point1: WidgetCoordinates,
  point2: WidgetCoordinates
): number => {
  const side1 = getXLength(point1, point2);
  const side2 = getYLength(point1, point2);

  return Math.sqrt(side1 * side1 + side2 * side2);
};

const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const getAngleInRadians = (
  point1: WidgetCoordinates,
  point2: WidgetCoordinates
): number => {
  const degrees =
    (Math.atan2(getYLength(point1, point2), getXLength(point1, point2)) * 180) /
    Math.PI;
  return degreesToRadians(degrees);
};

export const getLineStyle = (
  point1: WidgetCoordinates,
  point2: WidgetCoordinates
): CSSProperties => {
  return {
    top: `${point1.y + 50}px`,
    left: `${point1.x + 50}px`,
    width: `${getLineLength(point1, point2)}px`,
    transform: `rotate(${getAngleInRadians(point1, point2)}rad)`
  };
};
