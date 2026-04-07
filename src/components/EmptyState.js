import React from 'react';
import { Card } from 'react-bootstrap';

// Shown when there are no todos or after search returns nothing
const EmptyState = () => {
  return (
    <Card className="text-center p-5 bg-light">
      <Card.Body>
        <h3>No todos found 😔</h3>
        <p className="text-muted">Try adding a new todo or clearing your search.</p>
      </Card.Body>
    </Card>
  );
};

export default EmptyState;