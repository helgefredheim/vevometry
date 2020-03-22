import React, { FunctionComponent } from "react";
import { onInputChange, BubbleProps, WidgetCoordinates } from "../widget-types";
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
  const fields: WidgetCoordinates = {
    x: bubbleProps.x,
    y: bubbleProps.y
  };
  return (
    <Form>
      {Object.keys(fields).map((field: string) => {
        const id = `${bubbleProps.id}_${field}`;
        return (
          <Input
            value={fields[field as keyof WidgetCoordinates]}
            label={field}
            name={field}
            onChange={onFieldChange}
            id={id}
            key={id}
          />
        );
      })}
    </Form>
  );
};

export default BubbleForm;
