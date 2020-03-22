import React from "react";

export interface WidgetCoordinates {
  x: number;
  y: number;
}

export interface BubbleProps extends WidgetCoordinates {
  dragMode: boolean;
  id: BubbleId;
}

export enum BubbleId {
  BUBBLE_1 = "bubble-1",
  BUBBLE_2 = "bubble-2"
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type BubbleDragEvent = React.DragEvent<HTMLDivElement>;

export type onInputChange = (e: InputChangeEvent) => void;
