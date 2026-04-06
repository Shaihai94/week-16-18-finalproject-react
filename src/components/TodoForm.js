import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const TodoForm = ({ onSubmit, initialData = {}, isEditing = false, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    completed: false,
  });

  // Populate form when editing
  useEffect(() => {
    if (isEditing && initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        completed: initialData.completed || false,
      });
    } else {
      setFormData({ title: '', description: '', completed: false });
    }
  }, [initialData, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSubmit(formData);
  };

  return (
    <Card className="mb-4 border-primary" style={{ borderWidth: isEditing ? '3px' : '1px' }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">
          {isEditing ? (
            <>
              ✏️ Editing: <strong>{initialData.title}</strong>
            </>
          ) : (
            '➕ Add New Todo'
          )}
        </Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="Enter todo title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Optional description"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Mark as Completed"
              checked={formData.completed}
              onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button variant="primary" type="submit" size="lg">
              {isEditing ? '💾 Update Todo' : '✅ Create Todo'}
            </Button>

            {isEditing && onCancel && (
              <Button variant="secondary" size="lg" onClick={onCancel}>
                Cancel Edit
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TodoForm;