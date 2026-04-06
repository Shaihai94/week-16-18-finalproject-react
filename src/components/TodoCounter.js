import React from 'react';
import { Badge } from 'react-bootstrap';

const TodoCounter = ({ total, completed }) => {
  return (
    <div className="mb-4">
      <h5>
        Total Todos: <Badge bg="primary">{total}</Badge> &nbsp;
        Completed: <Badge bg="success">{completed}</Badge>
      </h5>
    </div>
  );
};
export default TodoCounter;