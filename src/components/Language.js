import React from 'react';
import '../Css/Language.css'; // Import your CSS file

function Language() {
  return (
    <div className="language-container">
      <h2 className="language-heading">Language</h2>
      <label htmlFor="languages">Select Languages:</label>
      <select id="languages" name="languages" multiple>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
}

export default Language;
