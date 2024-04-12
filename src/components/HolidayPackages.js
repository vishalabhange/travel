// HolidayPackages.js
import React, { useState } from 'react';
import '../Css/HolidayPackages.css'; // Import your CSS file for styling
import BookingForm from './BookingForm';

function HolidayPackages() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookPackage = (packageDetails) => {
    setSelectedPackage(packageDetails);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedPackage(null);
  };

  const holidayPackages = [
    {
      id: 1,
      name: 'Golden Triangle Tour',
      description: 'Explore the Golden Triangle of India with this 6-day tour that covers Delhi, Agra, and Jaipur.',
      price: 50000,
      image: 'https://example.com/golden-triangle.jpg',
    },
    {
      id: 2,
      name: 'Goa Beach Vacation',
      description: 'Relax and unwind on the beautiful beaches of Goa with this 7-day vacation package.',
      price: 70000,
      image: 'https://example.com/goa-beach.jpg',
    },
    {
      id: 3,
      name: 'Kerala Backwaters Tour',
      description: 'Experience the serene backwaters of Kerala with this 5-day tour package.',
      price: 60000,
      image: 'https://example.com/kerala-backwaters.jpg',
    },
    {
      id: 4,
      name: 'Rajasthan Desert Safari',
      description: 'Embark on a desert safari in Rajasthan with this 4-day tour package.',
      price: 40000,
      image: 'https://example.com/rajasthan-desert.jpg',
    },
  ];

  return (
    <div className="holiday-packages-container">
      <h2 className="holiday-packages-heading">Indian Holiday Packages</h2>
      <ul className="holiday-packages-list">
        {holidayPackages.map((holidayPackage) => (
          <li key={holidayPackage.id} className="holiday-packages-item">
            <img src={holidayPackage.image} alt={holidayPackage.name} className="holiday-packages-image" />
            <h3 className="holiday-packages-item-name">{holidayPackage.name}</h3>
            <p className="holiday-packages-item-description">{holidayPackage.description}</p>
            <p className="holiday-packages-item-price">₹ {holidayPackage.price}</p>
            <button className="holiday-packages-button" onClick={() => handleBookPackage(holidayPackage)}>Book Package</button>
          </li>
        ))}
      </ul>

      {showForm && selectedPackage && (
        <BookingForm packageDetails={selectedPackage} onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default HolidayPackages;
