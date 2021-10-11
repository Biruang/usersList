import React, {useEffect, useState} from "react";
import './styled.css';
import {Table} from "../../organisms/Table";
import orgData from '../../../assets/organisations.json';
import usersData from '../../../assets/users.json';
import {UserModal} from "../../modals/UserModal";

export type TUser = {
  id: number,
  firstName: string,
  lastName: string,
  middleName: string,
  organisationId?: number,
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

  const onSave = (user: TUser) => {
    let newUsers = users.map(item => {
      if(item.id === user.id) return user;
      return item;
    });

    setUsers(newUsers);
    setIsEditModal(false);
  }

  const onCreate = (user: TUser) => {
    let newUsers = [...users];
    newUsers.push(user);

    setUsers(newUsers);
    setIsEditModal(false);
  }

  const onModalClose = () => {
    setIsEditModal(false);
  }

  const onCreateOpen = () => {
    setSelectedUser(undefined);
    setIsEditModal(true);
  }

  return(
    <>
      <button onClick={onCreateOpen}>Добавить пользователя</button>

      <Table
        organisations={organisations}
        users={users}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <UserModal
        organisations={organisations}
        isActive={isEditModal}
        user={selectedUser}
        onClose={onModalClose}
        onCreate={onCreate}
        onEdit={onSave}
      />
    </>
  )
}
