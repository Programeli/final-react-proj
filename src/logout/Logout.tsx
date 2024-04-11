import React from 'react';
import axios from 'axios';

export default function Logout(): JSX.Element {
  const handleLogout = () => {
    // Send logout request to the server
    axios.post('http://localhost:3001/logout')
      .then(response => {
        // Redirect to the login page or perform other actions after logout
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div>

      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}