import React from 'react';
import { Card } from 'react-bootstrap';

// Home page - Welcome screen
const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to My Todo App</h1>
      <p className="lead">A full-featured CRUD application built with React Router v5</p>

      <Card className="mx-auto mt-5" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title>Project Features</Card.Title>
          <ul className="text-start">
            <li>✅ React Router with 3 pages</li>
            <li>✅ Full CRUD using MockAPI</li>
            <li>✅ 11 Custom Components</li>
            <li>✅ Search + Statistics</li>
            <li>✅ Responsive Bootstrap Design</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;