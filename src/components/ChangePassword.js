import React, { useState } from "react";
import "../Css/ChangePassword.css"; // Import your CSS file

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="change-password-container">
      <h2 className="change-password-heading">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="change-password-form-group">
          <label htmlFor="old-password">Old Password:</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
        </div>
        <div className="change-password-form-group">
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="change-password-form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="change-password-button">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;