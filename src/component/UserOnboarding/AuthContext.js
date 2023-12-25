// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Replace this with your actual authentication logic
    // For demonstration purposes, using a mock authentication service
    // You would typically make a request to your server here
    if (email === 'user@example.com' && password === 'password') {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    // Replace this with your logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
