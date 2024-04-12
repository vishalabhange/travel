// WaterSport.js
import React from 'react';
import '../Css/WaterSport.css'; // Import your CSS file for styling
import WaterSport1 from '../assests/WaterSport/WaterSport1.jpg';
import WaterSport2 from '../assests/WaterSport/WaterSport2.jpg';
import WaterSport3 from '../assests/WaterSport/WaterSport3.jpg';
// import WaterSport4 from '../assests/WaterSport/WaterSport4.jpg';
// import WaterSport5 from '../assests/WaterSport/WaterSport5.jpg';

const WaterSport = () => {
  // Water sport images array
  const waterSportImages = [
    WaterSport1,
    WaterSport2,
    WaterSport3
  

  ];

  return (
    <div className="water-sport-container">
      <h2>Water Sport</h2>
      <div className="water-sport-images">
        {waterSportImages.map((image, index) => (
          <div key={index} className="water-sport-image">
            <img src={process.env.PUBLIC_URL + image} alt={`Water Sport ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterSport;
