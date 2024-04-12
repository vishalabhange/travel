import React from 'react';
import '../Css/RecentTrips.css'; // Import your CSS file

function RecentTrips() {
  return (
    <div className="recent-trips-container">
      <h2 className="recent-trips-heading">Recent Trips</h2>
      <ul className="recent-trips-list">
        <li className="recent-trips-item">
          <h3 className="recent-trips-item-heading">Trip 1</h3>
          <p className="recent-trips-item-details">Destination: New York</p>
          <p className="recent-trips-item-details">Dates: May 1-7, 2023</p>
        </li>
        <li className="recent-trips-item">
          <h3 className="recent-trips-item-heading">Trip 2</h3>
          <p className="recent-trips-item-details">Destination: Paris</p>
          <p className="recent-trips-item-details">Dates: June 15-22, 2023</p>
        </li>
        <li className="recent-trips-item">
          <h3 className="recent-trips-item-heading">Trip 3</h3>
          <p className="recent-trips-item-details">Destination: Tokyo</p>
          <p className="recent-trips-item-details">Dates: July 20-27, 2023</p>
        </li>
      </ul>
    </div>
  );
}

export default RecentTrips;