// WinterSport.js
import React from 'react';
import '../Css/WinterSport.css'; // Import your CSS file for styling
import WinterSport1 from '../assests/Wintersport/Wintersport 1.webp';
import WinterSport2 from '../assests/Wintersport/Wintersport2.jpg';
import WinterSport3 from '../assests/Wintersport/WinterSport3.jpg';

const WinterSport = () => {
  // Winter sport images array
  const winterSportImages = [
    WinterSport1,
    WinterSport2,
    WinterSport3
  ];

  return (
    <div className="winter-sport-container">
      <h2>Winter Sport</h2>
      <div className="winter-sport-images">
        {winterSportImages.map((image, index) => (
          <div key={index} className="winter-sport-image">
            <img src={process.env.PUBLIC_URL + image} alt={`Winter Sport ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterSport;
