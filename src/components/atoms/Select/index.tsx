import React from "react";
import {TOrganisation} from "../../pages/MainPage";

interface ISelect {
  organisations: TOrganisation[];
  selectedId?: number;
  onSelect?: (id: number) => void;
}

export const Select: React.FC<ISelect> = ({
  organisations,
  selectedId,
  onSelect = () => {}
}) => {
  return(
    <div>
      <input/>

      <ul>
        {organisations.map(org => {
          if(org.id !== selectedId) return(
            <li key={org.id}>{`${org.fullName}(${org.shortName})`}</li>
          );
          return null;
        })}
      </ul>
    </div>
  )
}