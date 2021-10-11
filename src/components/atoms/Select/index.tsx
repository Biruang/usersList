import React, {useEffect, useRef, useState} from "react";
import {TOrganisation} from "../../pages/MainPage";
import "./styled.css";

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
  const [value, setValue] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const org = organisations.find(org => org.id === selectedId);

    if(org){
      setValue(`${org.fullName}(${org.shortName})`)
    }
  }, [selectedId, organisations]);

  useEffect(() => {
    const callback = (ev: MouseEvent) => {
      if(!selectRef.current?.contains(ev.target as Node)){
        setIsOpen(false);
      }
    }
    window.addEventListener('click', callback)

    return () => window.removeEventListener('click', callback);
  }, []);

  const select = (id: number) => () => {
    setIsOpen(false);
    onSelect(id);
  }

  const onInputClick = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div ref={selectRef} className="select-container">
      <input
        onClick={onInputClick}
        className="select"
        value={value}
        readOnly
      />

      {
        isOpen ? (
          <ul className="select-menu">
            {organisations.map(org => {
              if(org.id !== selectedId) return(
                <li
                  className="select-menu-item"
                  key={org.id}
                  onClick={select(org.id)}
                >
                  {`${org.fullName}(${org.shortName})`}
                </li>
              );
              return null;
            })}
          </ul>
        ): null
      }
    </div>
  )
}
