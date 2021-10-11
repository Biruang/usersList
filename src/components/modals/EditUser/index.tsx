import React, {useEffect, useState} from "react";
import {TOrganisation, TUser} from "../../pages/MainPage";
import {Input} from "../../atoms/Input";
import {Select} from "../../atoms/Select";

interface IEditUser {
  isActive: boolean;
  user?: TUser;
  onEdit?: () => void;
  onClose?: () => void;
  organisations: TOrganisation[]
}

export const EditUser: React.FC<IEditUser> = ({isActive, user, organisations}) => {
  const [firstName, setFirstName] = useState<string>();
  const [middleName, setMiddleName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [organisationId, setOrganisationId] = useState<number>();

  useEffect(() => {
    if(user){
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setMiddleName(user.middleName);
      setOrganisationId(user.organisationId);
    }
  }, [user])

  return(
    <div>
      <Input label="Фамилия" value={lastName}/>
      <Input label="Имя" value={firstName}/>
      <Input label="Отчество" value={middleName}/>
      <Select organisations={organisations} selectedId={organisationId} />
      <Input label="E-Mail" value={email}/>
      <button>Ок</button>
      <button>Отмена</button>
    </div>
  )
}