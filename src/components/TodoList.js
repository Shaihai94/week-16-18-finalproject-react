import React from 'react';
import TodoItem from './TodoItem';

// This component renders the full list of todos by mapping over them
const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}           // Unique key required by React for lists
          todo={todo} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TodoList;