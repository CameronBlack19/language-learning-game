// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../UserOnboarding/AuthContext';
import './Logout.css';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <button className="logout" type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
