import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../Css/Logout.css'; // Import your CSS file

function Logout() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Clear the auth token from local storage
    localStorage.removeItem("authToken");

    // Redirect to the login page after logout
    navigate("/");
  };

  return (
    <div className="logout-container">
      <h2 className="logout-heading">Logout</h2>
      <p className="logout-message">Are you sure you want to logout?</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;