// In DestinationDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Css/DestinationDetail.css';

const DestinationDetail = ({ places }) => {
  const { id } = useParams();

  const destination = places.find(place => place.id === parseInt(id, 10));

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  // Dummy hotel data
  const hotels = [
    { name: 'Hotel A', price: 100, image: 'hotel_a.jpg' },
    { name: 'Hotel B', price: 120, image: 'hotel_b.jpg' },
    { name: 'Hotel C', price: 80, image: 'hotel_c.jpg' },
    // Add more hotel data as needed
  ];

  return (
    <div className="destination-detail-container">
      <Link to="/Showcase" className="back-link">
        Back to Destinations
      </Link>
      <div className="place-card">
        <img src={destination.image} alt={destination.name} className="place-img" />
        <div className="destination-details">
          <h2>{destination.name}</h2>
          <p>Location: {destination.location}</p>
          <p>Price: ${destination.price}</p>
        </div>
      </div>
      <div className="destination-info">
        {/* <h3>About {destination.name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
          eu pharetra nec, mattis ac neque. Integer in mauris eu nibh euismod gravida.
          Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
          Etiam tempor.
        </p> */}
        <h3>Available Hotels:</h3>
        <div className="hotel-cards">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-details">
                <h4>{hotel.name}</h4>
                <p>Price: ${hotel.price} per night</p>
                <button className="book-button">Book Hotel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
