import React from 'react';
import { Form } from 'react-bootstrap';

// Search input to filter todos in real-time
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="🔍 Search todos by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchBar;