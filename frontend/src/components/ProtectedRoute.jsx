import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if token exists in local storage (this token would be set when the user logs in)
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to login
    return <Navigate to='/login' />;
  }

  // Render the children if the token is present
  return children;
};

export default ProtectedRoute;
