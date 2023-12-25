// index.js or wherever you render App
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './component/UserOnboarding/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
