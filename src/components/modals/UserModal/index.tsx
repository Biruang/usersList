import React, {useEffect, useState} from "react";
import "./style.css";
import {TOrganisation, TUser} from "../../pages/MainPage";
import {ModalContainer} from "../../atoms/ModalContainer";
import {LabeledInput} from "../../molecules/LabeledInput";
import {LabeledSelect} from "../../molecules/LabeledSelect";

interface IEditUser {
  isActive: boolean;
  user?: TUser;
  onEdit?: (user: TUser) => void;
  onCreate?: (user: TUser) => void;
  onClose?: () => void;
  organisations: TOrganisation[]
}

export const UserModal: React.FC<IEditUser> = ({
  isActive,
  user,
  organisations,
  onClose= () => {},
  onEdit= () => {},
  onCreate = () => {}
}) => {
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [organisationId, setOrganisationId] = useState<number>();

  useEffect(() => {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setEmail(user?.email);
      setMiddleName(user?.middleName);
      setOrganisationId(user?.organisationId);
  }, [user]);

  const onCloseClick = () => {
    onClose();
  }

  const onOrgSelect = (id: number) => {
    setOrganisationId(id);
  }

  const onSave = () => {
    if(!user) return;

    const newUser: TUser = {
      id: user.id,
      middleName: middleName || '',
      email: email || '',
      lastName: lastName || '',
      organisationId: organisationId,
      firstName: firstName || ''
    }

    onCreate(newUser);
  }

  return(
    <ModalContainer
      isActive={isActive}
      onClick={onCloseClick}
    >
      <div className="editUser">
        <LabeledInput label="Фамилия" value={lastName}/>
        <LabeledInput label="Имя" value={firstName}/>
        <LabeledInput label="Отчество" value={middleName}/>
        <LabeledSelect
          label="Организация"
          organisations={organisations}
          selectedId={organisationId}
          onSelect={onOrgSelect}
        />
        <LabeledInput label="E-Mail" value={email}/>
        <button onClick={onSave}>Ок</button>
        <button onClick={onCloseClick}>Отмена</button>
      </div>
    </ModalContainer>
  )
}
