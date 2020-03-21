import React, { FunctionComponent, useState } from "react";
import Bubble from "./bubble/bubble";
import "./widget.css";
import { BubbleId } from "./widget-types";
import Line from "./line/line";

const Widget: FunctionComponent = () => {
  const [x1, setX1] = useState<number>(10);
  const [y1, setY1] = useState<number>(10);
  const [x2, setX2] = useState<number>(313);
  const [y2, setY2] = useState<number>(240);

  return (
    <div className="widget">
      <Bubble id={BubbleId.BUBBLE_0} setX={setX1} setY={setY1} x={x1} y={y1} />
      <Line x1={x1} y1={y1} x2={x2} y2={y2} />
      <Bubble id={BubbleId.BUBBLE_1} setX={setX2} setY={setY2} x={x2} y={y2} />
    </div>
  );
};

export default Widget;
