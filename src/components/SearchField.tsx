import * as React from 'react';
import { TextField } from '@fluentui/react';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const handleSearch = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    onSearch(newValue || '');
  };

  return (
    <TextField
      label="Search Users"
      onChange={handleSearch}
      placeholder="Type to search..."
    />
  );
};

export default SearchField;
export type { SearchFieldProps }; // Ensure the file is treated as a module by exporting the SearchFieldProps type
