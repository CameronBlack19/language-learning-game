// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const isAuthenticated = await login(email, password);

      if (isAuthenticated) {
        console.log('Login successful');
        navigate('/language-learning-game');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="background-container">
      <div className="login-container">
        <h1>Language Learning Game</h1>
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className={`eye-icon ${showPassword ? 'visible' : ''}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>

          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
          {/* Link to navigate back to Register page*/}
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          {/* Link to navigate back to Dashboard page*/}
          <p>
            Go to <Link to="/dashboard">Dashboard</Link>
          </p>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
