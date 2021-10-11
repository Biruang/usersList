import React, {useEffect, useState} from "react";
import './styled.css';
import {Table} from "../../organisms/Table";
import orgData from '../../../assets/organisations.json';
import usersData from '../../../assets/users.json';
import {EditUser} from "../../modals/EditUser";

export type TUser = {
  id: number,
  firstName: string,
  lastName: string,
  middleName: string,
  organisationId: number,
  email: string
}

export type TOrganisation = {
  id: number,
  fullName: string,
  shortName: string
}

export const MainPage: React.FC = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [organisations, setOrganisations] = useState<TOrganisation[]>([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<TUser>();

  useEffect(() => {
    setUsers(usersData.users);
    setOrganisations(orgData.organisations);
  }, []);

  const onDelete = (id: number) => {
    const newUsers = users.filter(user => user.id !== id);

    setUsers(newUsers);
  }

  const onEdit = (id: number) => {
    const user = users.find(user => user.id === id);

    if(user) {
      setSelectedUser(user);
      setIsEditModal(true);
    }
  }

  return(
    <>
      <button>Добавить пользователя</button>

      <Table
        organisations={organisations}
        users={users}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <EditUser organisations={organisations} isActive={isEditModal} user={selectedUser} />
    </>
  )
}