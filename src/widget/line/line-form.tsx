import { FunctionComponent } from "react";
import { onInputChange } from "../widget-types";
import Form from "../form/form";
import Input from "../input/input";
import React from "react";

const LineForm: FunctionComponent<{
  value: number;
  onChange: onInputChange;
}> = ({ value, onChange }) => {
  return (
    <Form className="form--line">
      <Input
        id="line"
        value={value}
        label="length"
        name="length"
        onChange={onChange}
      />
    </Form>
  );
};

export default LineForm;
