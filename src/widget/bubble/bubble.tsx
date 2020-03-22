import React, { CSSProperties, FunctionComponent } from "react";
import { InputChangeEvent, BubbleProps, onInputChange } from "../widget-types";
import "./bubble.css";
import BubbleForm from "./bubble-form";

const getBubbleStyle = (props: BubbleProps): CSSProperties => {
  return {
    left: `${props.x}px`,
    top: `${props.y}px`,
    cursor: props.dragMode ? "grabbing" : "grab"
  };
};

const Bubble: FunctionComponent<{
  bubbleProps: BubbleProps;
  setState?: any;
  setOffset?: any;
}> = ({ bubbleProps, setState, setOffset }) => {
  const onFieldChange: onInputChange = (event: InputChangeEvent): void => {
    setState({
      ...bubbleProps,
      [event.currentTarget.name]: Number(event.currentTarget.value)
    });
  };
  const setDragMode = (dragMode: boolean): void => {
    setState({
      ...bubbleProps,
      dragMode
    });
  };

  return (
    <div
      className="bubble"
      style={getBubbleStyle(bubbleProps)}
      onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
        setDragMode(true);
        setOffset({
          x: bubbleProps.x - event.clientX,
          y: bubbleProps.y - event.clientY
        });
      }}
      onMouseUp={() => {
        setDragMode(false);
      }}
    >
      <BubbleForm bubbleProps={bubbleProps} onFieldChange={onFieldChange} />
    </div>
  );
};

export default Bubble;
