import React from "react";

export interface WidgetCoordinates {
  x: number;
  y: number;
}

export enum BubbleId {
  BUBBLE_0 = "bubble-0",
  BUBBLE_1 = "bubble-1"
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type BubbleDragEvent = React.DragEvent<HTMLDivElement>;

export type onInputChange = (e: InputChangeEvent) => void;
