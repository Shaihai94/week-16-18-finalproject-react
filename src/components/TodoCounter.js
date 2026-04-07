import React from 'react';
import { Badge } from 'react-bootstrap';

// Shows total number of todos and how many are completed
const TodoCounter = ({ total, completed }) => {
  return (
    <div className="mb-4">
      <h5>
        Total Todos: <Badge bg="primary">{total}</Badge> &nbsp;&nbsp;
        Completed: <Badge bg="success">{completed}</Badge>
      </h5>
    </div>
  );
};

export default TodoCounter;