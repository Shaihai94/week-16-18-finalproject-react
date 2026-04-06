import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          {todo.title}
          {todo.completed && <Badge bg="success" className="ms-2">Done</Badge>}
        </Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(todo)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default TodoItem;