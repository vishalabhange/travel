import React from 'react';
import '../Css/Adventure.css'; // Import your CSS file for styling
import adventureimage from '../assests/adventure1.jpg';

const Adventure = () => {
  return (
    <div className="adventure-container">
      <h2>Adventure Travel</h2>
      <div className="adventure-content">
        <div className="adventure-image">
          <img src={adventureimage} alt="Adventure 1" />
        </div>
        <div className="adventure-info">
          <p>
            Explore the thrill of adventure travel! Whether it's trekking through
            mountains, diving into the ocean depths,
          </p>
          <p>
            Our expert guides will lead you on unforgettable journeys, ensuring
            safety and excitement at every step. Embark on the adventure of a
            lifetime and create lasting memories.
          </p>
          <a href="/adventure-details" className="learn-more-link">
            Learn More
          </a>
        </div>
        {/* Add a second image if needed */}
        {/* <div className="adventure-image">
          <img src="/images/adventure2.jpg" alt="Adventure 2" />
        </div> */}
      </div>
    </div>
  );
};

export default Adventure;
