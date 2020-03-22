import React from "react";

export enum BUBBLE_ID {
  BUBBLE_1 = "bubble-1",
  BUBBLE_2 = "bubble-2"
}

export interface WidgetCoordinates {
  x: number;
  y: number;
}

export interface BubbleProps extends WidgetCoordinates {
  dragMode: boolean;
  id: BUBBLE_ID;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type onInputChange = (e: InputChangeEvent) => void;
