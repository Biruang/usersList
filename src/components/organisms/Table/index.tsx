import React from "react";
import {TableRow} from "../../molecules/TableRow";
import {TOrganisation, TUser} from "../../pages/MainPage";

interface ITable {
  users: TUser[];
  organisations: TOrganisation[];
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
}

export const Table: React.FC<ITable> = (
{
  users,
  organisations,
  onEdit = () => {},
  onDelete = () => {}
}) => {
  const onEditClick = (user: TUser) => () => {
    onEdit(user.id);
  }

  const onDeleteClick = (user: TUser) => () => {
    onDelete(user.id);
  }

  return(
    <table>
      <thead>
        <tr>
          <td>Пользователь</td>
          <td>Организация</td>
          <td>Email</td>
          <td />
        </tr>
      </thead>

      <tbody>

      {
        users.map(user => (
          <TableRow
            user={user}
            organisation={organisations.find(org => org.id === user.organisationId)} key={user.id}
            onEdit={onEditClick(user)}
            onDelete={onDeleteClick(user)}
          />
        ))
      }
      </tbody>
    </table>
  )
}