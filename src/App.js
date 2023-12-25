// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './component/UserOnboarding/AuthContext';
import Login from './component/UserOnboarding/Login';
import Register from './component/UserOnboarding/Register';
import LanguageLearningGame from './component/LanguageLearningGame';
import Dashboard from './component/Dashboard';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              user ? (
                <LanguageLearningGame />
              ) : (
                // Redirect to the Dashboard if not logged in
                <Dashboard />
              )
            }
          />
          <Route path="/language-learning-game" element={<LanguageLearningGame />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
