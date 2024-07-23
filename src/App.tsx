import React, { useState, useEffect } from 'react';
import { Stack } from '@fluentui/react';
import SearchField from './components/SearchField';
import UserTable from './components/UserTable';
import { fetchUsers } from './services/apiService';

interface User {
  username: string;
  email: string;
  displayName: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetchUsers(searchQuery);
        console.log(result)
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    getUsers();
  }, [searchQuery]);

  return (
    <Stack tokens={{ childrenGap: 20 }} padding={20}>
      <SearchField onSearch={setSearchQuery} />
      <UserTable users={users} />
    </Stack>
  );
};

export default App;

