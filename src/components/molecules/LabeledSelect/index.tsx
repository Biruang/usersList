import React from "react";
import "./styled.css";
import {Select} from "../../atoms/Select";
import {TOrganisation} from "../../pages/MainPage";

interface ILabeledSelect {
  label?: string;
  organisations: TOrganisation[];
  selectedId?: number;
  onSelect?: (id: number) => void;
}

export const LabeledSelect: React.FC<ILabeledSelect> = ({
  label,
  organisations,
  selectedId,
  onSelect
}) => {
  return(
    <label className="labeled-select">
      <span>{label}</span>

      <Select
        organisations={organisations}
        onSelect={onSelect}
        selectedId={selectedId}
      />
    </label>
  )
}
