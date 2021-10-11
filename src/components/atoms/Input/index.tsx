import React from "react";
import "./styled.css"

interface IInput {
  value?: string;
  onChange?: (value: string) => void
}

export const Input: React.FC<IInput> = (
{
  value = "",
  onChange = () => {}
}) => {
  const onChangeClick = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  }

  return <input className="input" value={value} onChange={onChangeClick} />
}
