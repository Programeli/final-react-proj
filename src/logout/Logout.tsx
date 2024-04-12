import React, { useEffect } from 'react';
import axios from 'axios';

export default function Logout(): JSX.Element {
  useEffect(() => {
    // Send logout request to the server
    axios.post('http://localhost:3001/logout')
      .then(response => {
        // Clear the isLoggedIn state in local storage
        localStorage.removeItem('isLoggedIn');
        // Redirect to the login page or perform other actions after logout
        window.location.href = '/log-in';
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  }, []);

  return (
    <div>
      
      <h1>Logging out...</h1>

    </div>
  );
}