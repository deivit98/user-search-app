import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react';

interface User {
  username: string;
  email: string;
  displayName: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const columns: IColumn[] = [
    { key: 'username', name: 'username', fieldName: 'username', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'email', name: 'Email', fieldName: 'email', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'displayName', name: 'Display Name', fieldName: 'displayName', minWidth: 100, maxWidth: 200, isResizable: true }
  ];

  return (
    <DetailsList
      items={users}
      columns={columns}
      setKey="set"
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
    />
  );
};

export default UserTable;
export type { User }; // Ensure the file is treated as a module by exporting the User type