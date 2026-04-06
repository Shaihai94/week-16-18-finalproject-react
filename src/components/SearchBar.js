import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Control
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchBar;