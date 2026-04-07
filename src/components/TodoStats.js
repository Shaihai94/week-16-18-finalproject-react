import React from 'react';
import { ProgressBar } from 'react-bootstrap';

// Shows completion percentage with a progress bar
const TodoStats = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mb-4">
      <p className="mb-1">
        <strong>Completion Rate:</strong> {percentage}%
      </p>
      <ProgressBar now={percentage} variant="success" />
    </div>
  );
};

export default TodoStats;