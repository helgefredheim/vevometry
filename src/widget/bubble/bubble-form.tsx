import React, { FunctionComponent } from "react";
import { onInputChange, BubbleProps } from "../widget-types";
import Input from "../input/input";
import Form from "../form/form";

interface BubbleFormProps {
  bubbleProps: BubbleProps;
  onFieldChange: onInputChange;
}

const BubbleForm: FunctionComponent<BubbleFormProps> = ({
  bubbleProps,
  onFieldChange
}) => {
  return (
    <Form>
      <Input
        value={bubbleProps.x}
        label="x"
        name="x"
        onChange={onFieldChange}
        id={`${bubbleProps.id}_x`}
      />
      <Input
        value={bubbleProps.y}
        label="y"
        name="y"
        onChange={onFieldChange}
        id={`${bubbleProps.id}_y`}
      />
    </Form>
  );
};

export default BubbleForm;
