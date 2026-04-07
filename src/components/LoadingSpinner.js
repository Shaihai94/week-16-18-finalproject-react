import React from 'react';
import { Spinner } from 'react-bootstrap';

// Shows while data is loading from API
const LoadingSpinner = () => (
  <div className="text-center my-5">
    <Spinner animation="border" variant="primary" />
    <p className="mt-2">Loading todos...</p>
  </div>
);
export default LoadingSpinner;