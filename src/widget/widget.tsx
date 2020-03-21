import React, { FunctionComponent, useState } from "react";
import Bubble from "./bubble/bubble";
import "./widget.css";
import {
  BubbleId,
  InputChangeEvent,
  onInputChange,
  WidgetCoordinates
} from "./widget-types";
import Line from "./line/line";
import { getAngleInRadians } from "./line/line-utils";

const Widget: FunctionComponent = () => {
  const [bubbleOne, setBubbleOneState] = useState<WidgetCoordinates>({
    x: 124,
    y: 19
  });

  const [bubbleTwo, setBubbleTwoState] = useState<WidgetCoordinates>({
    x: 303,
    y: 400
  });

  const getKeyValue = (event: InputChangeEvent): any => {
    return {
      [event.currentTarget.name]: Number(event.currentTarget.value)
    };
  };

  const onFieldChangeOne: onInputChange = (event: InputChangeEvent) => {
    setBubbleOneState({
      ...bubbleOne,
      ...getKeyValue(event)
    });
  };

  const onFieldChangeTwo: onInputChange = (event: InputChangeEvent) => {
    setBubbleTwoState({
      ...bubbleTwo,
      ...getKeyValue(event)
    });
  };

  const onLineChange: onInputChange = (event: InputChangeEvent) => {
    const length = Number(event.currentTarget.value);
    const angle = getAngleInRadians(bubbleOne, bubbleTwo);
    const x = Math.cos(angle) * length + bubbleOne.x;
    const y = Math.sin(angle) * length + bubbleOne.y;
    setBubbleTwoState({
      x,
      y
    });
  };

  return (
    <div className="widget">
      <Bubble
        id={BubbleId.BUBBLE_0}
        onFieldChange={onFieldChangeOne}
        coordinates={bubbleOne}
      />
      <Line point1={bubbleOne} point2={bubbleTwo} onChange={onLineChange} />
      <Bubble
        id={BubbleId.BUBBLE_1}
        onFieldChange={onFieldChangeTwo}
        coordinates={bubbleTwo}
      />
    </div>
  );
};

export default Widget;