import React from 'react';

// Simple About page explaining the project
const About = () => {
  return (
    <div>
      <h2>About This Project</h2>
      <p>
        This is my React Todo Application built for the coding class assignment.
      </p>
      <p>
        I used the provided React Router v5 boilerplate, connected it to MockAPI 
        for full CRUD operations, and created 11 custom components.
      </p>
      <p>
        The project demonstrates React state management, API calls, routing, 
        and component reusability.
      </p>
    </div>
  );
};

export default About;