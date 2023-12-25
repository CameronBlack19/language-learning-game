import React from 'react';
import './Settings.css'

const Settings = ({ selectedLanguage, onLanguageChange }) => {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <label htmlFor="languageDropdown">Select Language:</label>
        <select
          id="languageDropdown"
          value={selectedLanguage}
          onChange={onLanguageChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          {/* Add more languages as needed */}
        </select>
      </div>
    );
  };

export default Settings;
