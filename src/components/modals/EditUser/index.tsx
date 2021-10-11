import React, {useEffect, useState} from "react";
import {TUser} from "../../pages/MainPage";
import {Input} from "../../atoms/Input";

interface IEditUser {
  isActive: boolean;
  user?: TUser;
  onEdit?: () => void;
  onClose?: () => void;
}

export const EditUser: React.FC<IEditUser> = ({isActive, user}) => {
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
      <Input label="�������" value={lastName}/>
      <Input label="���" value={firstName}/>
      <Input label="��������" value={middleName}/>
      <Input label="�����������" />
      <Input label="E-Mail" value={email}/>
      <button>��</button>
      <button>������</button>
    </div>
  )
}