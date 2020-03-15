import { BubbleData, BubbleId, Field, WidgetValues } from "./widget-types";

export const getBubbleData = (
  id: BubbleId,
  state: WidgetValues
): BubbleData => {
  return state.find((data: BubbleData) => {
    return data.id === id;
  }) as BubbleData;
};

export const getField = (value: string, name: string, label: string): Field => {
  return { value, name, label };
};
