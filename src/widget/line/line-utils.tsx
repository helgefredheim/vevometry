import { BubbleData, BubbleId, WidgetValues } from "../widget-types";
import { CSSProperties } from "react";
import { getBubbleData } from "../widget-utils";

const getValue = (bubble: BubbleData, field: string) => {
  return Number(bubble.fields[field].value);
};

const getSide = (data: WidgetValues, field: string): number => {
  const bubble0 = getBubbleData(BubbleId.BUBBLE_0, data);
  const bubble1 = getBubbleData(BubbleId.BUBBLE_1, data);
  return getValue(bubble0, field) - getValue(bubble1, field);
};

const getXLength = (data: WidgetValues): number => {
  return getSide(data, "x");
};

const getYLength = (data: WidgetValues): number => {
  return getSide(data, "y");
};

export const getLineLength = (data: WidgetValues): number => {
  const side1 = getXLength(data);
  const side2 = getYLength(data);

  return Math.floor(Math.sqrt(side1 * side1 + side2 * side2));
};

const getAngle = (data: WidgetValues): number => {
  return (Math.atan2(getYLength(data), getXLength(data)) * 180) / Math.PI + 180;
};

export const getLineStyle = (data: WidgetValues): CSSProperties => {
  const bubble0 = getBubbleData(BubbleId.BUBBLE_0, data);
  return {
    top: `${Number(bubble0.fields.y.value) + 50}px`,
    left: `${Number(bubble0.fields.x.value) + 50}px`,
    width: `${getLineLength(data)}px`,
    transform: `rotate(${getAngle(data)}deg)`
  };
};
