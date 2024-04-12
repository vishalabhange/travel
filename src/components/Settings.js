import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Settings.css'; // Import your CSS file
import SideBar from "./SideBar";
import './ChangePassword'
import ChangePassword from './ChangePassword';

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-container settingPage">
        <SideBar />
        <div className="settings-content">
          <h2 className="settings-heading">Settings</h2>
          <ul className="settings-list">
            <li className="settings-item">
              <Link to="/change-password" className="settings-link">Change Password</Link>
            </li>
            <li className="settings-item">
              <Link to="/recent-trips" className="settings-link">Recent Trips</Link>
            </li>
            <li className="settings-item">
              <Link to="/language" className="settings-link">Language</Link>
            </li>
            <li className="settings-item">
              <Link to="/legal" className="settings-link">Legal & About</Link>
            </li>
            <li className="settings-item">
              <Link to="/customer-services" className="settings-link">Customer Services</Link>
            </li>
            <li className="settings-item">
              <Link to="/logout" className="settings-link">Logout</Link>
            </li>
            {/* Add more settings options as needed */}
          </ul>
        </div>
        
      </div>
    );
  }

  handleRecentTrips() {
    console.log('Viewing Recent Trips');
  }

  handleLanguage() {
    console.log('Changing Language');
  }

  handleLegal() {
    console.log('Accessing Legal & About');
  }

  handleServices() {
    console.log('Accessing Customer Services');
  }

  handleLogout() {
    console.log('Logging Out');
  }
}

export default Settings;