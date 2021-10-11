import React from "react";

interface IInput {
  value?: string;
  label?: string;
  onChange?: (value: string) => void
}

export const Input: React.FC<IInput> = (
{
  label,
  value = "",
  onChange = () => {}
}) => {
  const onChangeClick = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  }

  return(
    <label>
      <div>
        {label}
      </div>

      <input value={value} onChange={onChangeClick} />
    </label>
  )
}