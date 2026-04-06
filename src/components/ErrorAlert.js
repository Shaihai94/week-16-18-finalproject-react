import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ message }) => (
  <Alert variant="danger" className="text-center">
    {message || 'Something went wrong. Please try again.'}
  </Alert>
);
export default ErrorAlert;