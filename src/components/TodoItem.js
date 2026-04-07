import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

// This component displays a single Todo item as a card
// It receives the todo data and functions to edit or delete it
const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        
        {/* Todo Title + Completed Badge */}
        <Card.Title className="d-flex justify-content-between align-items-center">
          {todo.title}
          {/* Show "Done" badge only if the todo is completed */}
          {todo.completed && <Badge bg="success" className="ms-2">Done</Badge>}
        </Card.Title>

        {/* Todo Description - only shows if there is a description */}
        {todo.description && (
          <Card.Text className="text-muted">
            {todo.description}
          </Card.Text>
        )}

        {/* Action Buttons Section */}
        <div className="mt-3">
          {/* Edit Button - sends the full todo object to parent for editing */}
          <Button 
            variant="warning" 
            size="sm" 
            className="me-2"
            onClick={() => onEdit(todo)}
          >
            ✏️ Edit
          </Button>

          {/* Delete Button - sends only the ID to parent for deletion */}
          <Button 
            variant="danger" 
            size="sm"
            onClick={() => onDelete(todo.id)}
          >
            🗑️ Delete
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default TodoItem;