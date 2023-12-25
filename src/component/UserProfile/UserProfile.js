import React from 'react';
import './UserProfile.css';

const UserProfile = ({ completedExercises, selectedLanguage, onResetProgress }) => {
    return (
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Selected Language: {selectedLanguage}</p>
        <p>Completed Exercises: {completedExercises.length}</p>
        <button onClick={onResetProgress}>Reset Progress</button>
      </div>
    );
  };

export default UserProfile;
