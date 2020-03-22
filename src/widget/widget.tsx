import React, { FunctionComponent, useState } from "react";
import Bubble from "./bubble/bubble";
import "./widget.css";
import {
  BubbleId,
  BubbleProps,
  InputChangeEvent,
  onInputChange,
  WidgetCoordinates
} from "./widget-types";
import Line from "./line/line";
import { getAngleInRadians } from "./line/line-utils";

const Widget: FunctionComponent = () => {
  const [bubbleOne, setBubbleOneState] = useState<BubbleProps>({
    x: 124,
    y: 19,
    dragMode: false,
    id: BubbleId.BUBBLE_1
  });

  const [bubbleTwo, setBubbleTwoState] = useState<BubbleProps>({
    x: 303,
    y: 400,
    dragMode: false,
    id: BubbleId.BUBBLE_2
  });

  const [offset, setOffset] = useState<WidgetCoordinates>({ x: 0, y: 0 });

  const onLineChange: onInputChange = (event: InputChangeEvent) => {
    const length = Number(event.currentTarget.value);
    const angle = getAngleInRadians(bubbleOne, bubbleTwo);
    const x = Math.cos(angle) * length + bubbleOne.x;
    const y = Math.sin(angle) * length + bubbleOne.y;
    setBubbleTwoState({
      ...bubbleTwo,
      x,
      y
    });
  };

  return (
    <div
      className="widget"
      onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
        const xy: WidgetCoordinates = {
          x: event.clientX + offset.x,
          y: event.clientY + offset.y
        };

        if (bubbleOne.dragMode) {
          setBubbleOneState({
            ...bubbleOne,
            ...xy
          });
        } else if (bubbleTwo.dragMode) {
          setBubbleTwoState({
            ...bubbleTwo,
            ...xy
          });
        }
      }}
    >
      <Bubble
        bubbleProps={bubbleOne}
        setState={setBubbleOneState}
        setOffset={setOffset}
      />
      <Line point1={bubbleOne} point2={bubbleTwo} onChange={onLineChange} />
      <Bubble
        bubbleProps={bubbleTwo}
        setState={setBubbleTwoState}
        setOffset={setOffset}
      />
    </div>
  );
};

export default Widget;
