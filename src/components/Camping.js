// Camping.js
import React from 'react';
import '../Css/Camping.css'; // Import your CSS file for styling
import Camping1 from '../assests/Camping/Camping1.webp';
import Camping2 from '../assests/Camping/Camping2.jpeg';
import Camping3 from '../assests/Camping/Camping3.webp';


const Camping = () => {
  // Camping images array
  const campingImages = [
  Camping1,
  Camping2,
  Camping3
  ];

  return (
    <div className="camping-container">
      <h2>Camping</h2>
      <div className="camping-images">
        {campingImages.map((image, index) => (
          <div key={index} className="camping-image">
            <img src={process.env.PUBLIC_URL + image} alt={`Camping ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camping;
