import React from "react";
import {Input} from "../../atoms/Input";
import "./styled.css";

interface ILabeledInput {
  label?: string;
  value?: string;
  onChange?: (value: string) => void
}

export const LabeledInput: React.FC<ILabeledInput> = ({
  label,
  value,
  onChange
}) => {
  return(
    <label className="labeled-input">
      <span>{label}</span>
      <Input value={value} onChange={onChange} />
    </label>
  )
}
