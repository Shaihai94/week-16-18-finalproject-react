import React from 'react';
import { Card } from 'react-bootstrap';

const EmptyState = () => {
  return (
    <Card className="text-center p-5">
      <Card.Body>
        <h3>No todos yet</h3>
        <p className="text-muted">Create your first todo above!</p>
      </Card.Body>
    </Card>
  );
};
export default EmptyState;