import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "../Css/TripForm.css"

import { getToken } from "../authUtils";

const CreateTripForm = () => {
  const [tripData, setTripData] = useState({
    name: "",
    email: "",
    destination: "",
    from: "",
    gender: "", // Added gender field
    age: "",
    group_of: "", // Added group_of field
    PhoneNumber: "", // Added PhoneNumber field
    date: new Date(),
    time: "12:00", // Set a default time if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleDateChange = (date) => {
    setTripData({ ...tripData, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = tripData.date.toISOString();
    const dataToSend = { ...tripData, date: formattedDate };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/trip/createTrip",
        tripData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();

      try {
        const response = await axios.get(
          "http://localhost:8080/api/auth/getuser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userData = response.data;
        setTripData((prevTripData) => ({
          ...prevTripData,
          email: userData.email, // Update email in tripData
        }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Create Trip</h2>
      <form onSubmit={handleSubmit}>
        <label className="name-label">
          Your Name:
          <input
            type="text"
            name="name"
            value={tripData.name}
            onChange={handleChange}
            className="name-input"
          />
        </label>
        <label className="email-label">
          Your Email:
          <input
            type="email"
            name="email"
            value={tripData.email}
            onChange={handleChange}
            className="email-input"
          />
        </label>
        <label className="destination-label">
          Destination:
          <input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleChange}
            className="destination-input"
          />
        </label>
        <label className="from-label">
          From:
          <input
            type="text"
            name="from"
            value={tripData.from}
            onChange={handleChange}
            className="from-input"
          />
        </label>
        <label className="gender-label">
          Gender:
          <input
            type="text"
            name="gender"
            value={tripData.gender}
            onChange={handleChange}
            className="gender-input"
          />
        </label>
        <label className="age-label">
          Age:
          <input
            type="number"
            name="age"
            value={tripData.age}
            onChange={handleChange}
            className="age-input"
          />
        </label>
        <label className="group-of-label">
          Group of:
          <input
            type="number"
            name="group_of"
            value={tripData.group_of}
            onChange={handleChange}
            className="group-of-input"
          />
        </label>
        <label className="PhoneNumber-label">
          Phone Number:
          <input
            type="number"
            name="PhoneNumber"
            value={tripData.PhoneNumber}
            onChange={handleChange}
            className="PhoneNumber-input"
          />
        </label>
        <label className="date-label">
          Date:
          <DatePicker
            selected={tripData.date}
            onChange={handleDateChange}
            className="date-input"
          />
        </label>
        <label className="time-label">
          Time:
          <input
            type="String"
            name="time"
            value={tripData.time}
            onChange={handleChange}
            className="time-input"
          />
        </label>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
};

export default CreateTripForm;
