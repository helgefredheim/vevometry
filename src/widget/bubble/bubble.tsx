import React, { FunctionComponent } from "react";
import {
  BubbleData,
  BubbleId,
  Field,
  FieldsRecord,
  setFieldValue
} from "../widget-types";
import Input from "../input/input";
import "./bubble.css";

interface Props {
  x: Field;
  y: Field;
  setValue: setFieldValue;
}

const BubbleForm: FunctionComponent<Props> = ({ x, y, setValue }) => {
  return (
    <div className="form">
      <Input {...x} setValue={setValue} />
      <Input {...y} setValue={setValue} />
    </div>
  );
};

const getStyle = (fields: FieldsRecord): any => {
  return { left: `${fields.x.value}px`, top: `${fields.y.value}px` };
};

const Bubble: FunctionComponent<{
  id: BubbleId;
  data: BubbleData;
  setValue: setFieldValue;
}> = ({ id, data, setValue }) => {
  const { fields } = data;
  return (
    <div className="bubble" style={getStyle(fields)}>
      <BubbleForm x={fields.x} y={fields.y} setValue={setValue} />
    </div>
  );
};

export default Bubble;
