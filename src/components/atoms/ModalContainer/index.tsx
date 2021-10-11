import React from "react";
import "./styled.css";

interface IModalContainer {
  isActive:boolean;
  onClick?: () => void;
}

export const ModalContainer: React.FC<IModalContainer> = ({
  isActive,
  onClick = () => {},
  children
}) => {
  const click = (ev: React.MouseEvent<HTMLDivElement>) => {
    if(ev.currentTarget === ev.target){
      onClick();
    }
  }

  return(
    <div
      className={`modal-background${!isActive ? " disabled" : ""}`}
      onClick={click}
    >
      <div>
        {children}
      </div>
    </div>
  )
}
