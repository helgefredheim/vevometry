import React, { FunctionComponent } from "react";
import { BubbleId } from "../widget-types";
import Input from "../input/input";
import "./bubble.css";

interface Props {
  x: number;
  y: number;
  setX: any;
  setY: any;
}

const BubbleForm: FunctionComponent<Props> = ({ x, y, setX, setY }) => {
  return (
    <div className="form">
      <Input value={x} setValue={setX} label="x" />
      <Input value={y} setValue={setY} label="y" />
    </div>
  );
};

const getStyle = (x: number, y: number): any => {
  return { left: `${x}px`, top: `${y}px` };
};

const Bubble: FunctionComponent<{
  id: BubbleId;
  x: number;
  y: number;
  setX: any;
  setY: any;
}> = ({ id, x, y, setX, setY }) => {
  return (
    <div className="bubble" style={getStyle(x, y)}>
      <BubbleForm x={x} y={y} setX={setX} setY={setY} />
    </div>
  );
};

export default Bubble;
