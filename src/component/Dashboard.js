// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Language Learning Game</h1>
      <p>
        Start your language learning journey today! <br /> <br />
        Enhance your language skills in a fun and interactive way with our
        Language Learning Game.
      </p>

      <div className="button-container">
        <Link to="/login">
          <button className="dashboard-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="dashboard-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;