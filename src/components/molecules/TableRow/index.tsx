import React from "react";
import {TOrganisation, TUser} from "../../pages/MainPage";

interface ITableRow {
  user: TUser;
  organisation?: TOrganisation;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const TableRow: React.FC<ITableRow> = (
{
  user,
  organisation,
  onDelete = () => {},
  onEdit = () => {}
}) => {
  return(
    <tr>
      <td>{user.firstName}</td>
      <td>{organisation?.shortName}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>delete</button>
      </td>
    </tr>
  )
}