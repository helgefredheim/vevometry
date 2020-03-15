import React, { FunctionComponent, useState } from "react";
import Bubble from "./bubble/bubble";
import Line from "./line/line";
import "./widget.css";
import {
  BubbleData,
  BubbleId,
  setFieldValue,
  WidgetValues
} from "./widget-types";
import { getBubbleData, getField } from "./widget-utils";

const initialState: WidgetValues = [
  {
    id: BubbleId.BUBBLE_0,
    fields: {
      x: getField("0", "x", "x"),
      y: getField("0", "y", "y")
    }
  },
  {
    id: BubbleId.BUBBLE_1,
    fields: {
      x: getField("300", "x", "x"),
      y: getField("300", "y", "y")
    }
  }
];

const Widget: FunctionComponent = () => {
  const [state, setState] = useState<WidgetValues>(initialState);

  const setValue = (id: BubbleId): setFieldValue => {
    return (fieldName: string, value: string): void => {
      setState(
        state.map((bubble: BubbleData) => {
          return bubble.id !== id || !fieldName
            ? bubble
            : {
                ...bubble,
                fields: {
                  ...bubble.fields,
                  [fieldName]: {
                    ...bubble.fields[fieldName],
                    value
                  }
                }
              };
        })
      );
    };
  };

  const onLineChange = (value: string): void => {
    console.log("Not yet implemented", value);
  };

  return (
    <div className="widget">
      <Bubble
        id={BubbleId.BUBBLE_0}
        setValue={setValue(BubbleId.BUBBLE_0)}
        data={getBubbleData(BubbleId.BUBBLE_0, state)}
      />
      <Line data={state} onLineChange={onLineChange} />
      <Bubble
        id={BubbleId.BUBBLE_1}
        setValue={setValue(BubbleId.BUBBLE_1)}
        data={getBubbleData(BubbleId.BUBBLE_1, state)}
      />
    </div>
  );
};

export default Widget;
