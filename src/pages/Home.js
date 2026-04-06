import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to the Todo App</h1>
      <p className="lead">A full CRUD React Router v5 project for my coding class</p>
      <Card className="mx-auto mt-4" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <Card.Title>Features</Card.Title>
          <ul className="text-start">
            <li>✅ 3+ pages with React Router</li>
            <li>✅ Full CRUD with MockAPI</li>
            <li>✅ 10+ custom components</li>
            <li>✅ React Bootstrap styling</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Home;