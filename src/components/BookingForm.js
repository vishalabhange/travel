// BookingForm.js
import React, { useState } from 'react';
import '../Css/BookingForm.css'; // Import your CSS file for styling

const BookingForm = ({ packageDetails, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    idProof: '',
    phoneNumber: '',
    email: '',
    bookingDate: '',
    sourceLocation: '',
    destination: packageDetails.name,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="booking-form-container">
      <h2>Book Package - {packageDetails.name}</h2>
      <div className="booking-form-scroll-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="idProof">ID Proof:</label>
        <input
          type="text"
          id="idProof"
          name="idProof"
          value={formData.idProof}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="bookingDate">Booking Date:</label>
        <input
          type="text"
          id="bookingDate"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="sourceLocation">Source Location:</label>
        <input
          type="text"
          id="sourceLocation"
          name="sourceLocation"
          value={formData.sourceLocation}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default BookingForm;
