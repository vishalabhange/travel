import React, { useState } from 'react';

const TouristLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [addressInput, setAddressInput] = useState('');

  const handleLocationChange = async (address) => {
    try {
      const apiKey = '4b03469baaf349cd93082946855ec1c9'; // Replace with your OpenCage API key
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setUserLocation({ lat, lng });
        fetchTouristPlaces(lat, lng);
      } else {
        console.error('No results found for the given address');
      }
    } catch (error) {
      console.error('Error getting coordinates from address:', error);
    }
  };

  const fetchTouristPlaces = async (lat, lng) => {
    try {
      // Implement fetching tourist places based on the location
      // You can use your backend or another API for this purpose
      // Example: const response = await fetch(`YOUR_TOURIST_PLACES_API_ENDPOINT?lat=${lat}&lng=${lng}`);
      // const data = await response.json();
      // setTouristPlaces(data);
      console.log('Fetching tourist places...');
    } catch (error) {
      console.error('Error fetching tourist places:', error);
    }
  };

  return (
    <div>
      <div>
        <label>Enter your location:</label>
        <input
          type="text"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
        <button onClick={() => handleLocationChange(addressInput)}>Search</button>
      </div>
      {userLocation && (
        <div>
          <p>Your Location: Latitude {userLocation.lat}, Longitude {userLocation.lng}</p>
          {/* Render map or other components as needed */}
        </div>
      )}
    </div>
  );
};

export default TouristLocator;
