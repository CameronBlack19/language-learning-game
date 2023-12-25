import React from 'react';
import './Leaderboard.css'; // Create a CSS file for leaderboard styles

const Leaderboard = ({ leaderboardData, selectedLanguage }) => {
    console.log('leaderboardData:', leaderboardData);
    console.log('selectedLanguage:', selectedLanguage);
  
    // ... rest of the component code
    const filteredLeaderboard = leaderboardData.filter(
    (user) => user.language === selectedLanguage
  );

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <p>Top-performing users in {selectedLanguage}</p>
      <ul>
        {filteredLeaderboard.map((user, index) => (
          <li key={index}>
            {user.name} - Score: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
