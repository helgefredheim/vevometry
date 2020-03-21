import React, { FunctionComponent } from "react";
import { onInputChange, WidgetCoordinates } from "../widget-types";
import Input from "../input/input";
import Form from "../form/form";

interface BubbleFormProps {
  coordinates: WidgetCoordinates;
  onFieldChange: onInputChange;
  id: string;
}

const BubbleForm: FunctionComponent<BubbleFormProps> = ({
  coordinates,
  onFieldChange,
  id
}) => {
  return (
    <Form>
      <Input
        value={coordinates.x}
        label="x"
        name="x"
        onChange={onFieldChange}
        id={`${id}_x`}
      />
      <Input
        value={coordinates.y}
        label="y"
        name="y"
        onChange={onFieldChange}
        id={`${id}_y`}
      />
    </Form>
  );
};

export default BubbleForm;
