export type setFieldValue = (fieldName: string, value: string) => void;

export enum BubbleId {
  BUBBLE_0 = "bubble-0",
  BUBBLE_1 = "bubble-1"
}

export interface Field {
  value: string;
  name: string;
  label: string;
}

export type FieldsRecord = Record<string, Field>;

export interface BubbleData {
  id: BubbleId;
  fields: FieldsRecord;
}

export type WidgetValues = Array<BubbleData>;
