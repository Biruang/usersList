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
        <div className="editUser-title">Создать пользователя</div>

        <div className="editUser-body">
          <div className="editUser-input">
            <LabeledInput
              label="Фамилия"
              value={lastName}
              onChange={(value) => setLastName(value)}
            />
          </div>

          <div className="editUser-input">
            <LabeledInput
              label="Имя"
              value={firstName}
              onChange={(value => setFirstName(value))}
            />
          </div>

          <div className="editUser-input">
            <LabeledInput
              label="Отчество"
              value={middleName}
              onChange={(value) => setMiddleName(value)}
            />
          </div>

          <div className="editUser-input">
            <LabeledSelect
              label="Организация"
              organisations={organisations}
              selectedId={organisationId}
              onSelect={onOrgSelect}
            />
          </div>

          <div className="editUser-input">
            <LabeledInput
              label="E-Mail"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </div>

          <div className="editUser-buttons">
            <button className="editUser-button" onClick={onSave}>Ок</button>

            <button className="editUser-button" onClick={onCloseClick}>Отмена</button>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}
