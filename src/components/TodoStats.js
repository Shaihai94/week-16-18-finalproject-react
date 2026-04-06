import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const TodoStats = ({ todos }) => {
  const completed = todos.filter(t => t.completed).length;
  const percentage = todos.length > 0 ? Math.round((completed / todos.length) * 100) : 0;

  return (
    <div className="mb-4">
      <p>Completion Rate: {percentage}%</p>
      <ProgressBar now={percentage} variant="success" />
    </div>
  );
};
export default TodoStats;