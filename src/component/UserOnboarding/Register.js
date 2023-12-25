// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from './AuthContext';
import './Register.css'; // Import the Register.css file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleRegister = async () => {
    try {
      const isRegistered = await register(email, password);

      if (isRegistered) {
        console.log('Registration successful');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error.message);
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="background-container">
      <div className="register-container">
        <h1>Language Learning Game</h1>
        <h2>Register</h2>
        <form>
          <label>Email:</label>
          <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

          <button type="button" className="register-button" onClick={handleRegister}>
            Register
          </button>

          {error && <p className="error-message">{error}</p>}

          {/* Link to navigate back to the login page */}
          <p>
            Already have an account? <Link to="/login">Back to Login</Link>
          </p>
          {/* Link to navigate back to Dashboard page*/}
          <p>
            Go to <Link to="/dashboard">Dashboard</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;