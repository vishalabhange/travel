// LikedTrips.jsx
import React, { useEffect, useState } from "react";
import { useLikedTrips } from "./LikedTripsContext";
import axios from "axios";
import { getToken } from "../authUtils";
import "../Css/LikedTrips.css";

const LikedTrips = () => {
  // const { likedTrips } = useLikedTrips();
  const [likedTrips, setLikedTrips] = useState([]);

  const [userId, setuserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState({});
  


  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();
  
      try {
        const response = await axios.get("http://localhost:8080/api/auth/getuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const userData = response.data;
        const { _id, name, email, date } = userData;
  
        setProfile({ _id, name, email, date });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Error fetching profile");
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  
  useEffect(() => {
    // Check if the profile state is populated before fetching liked trips
    if (profile._id) {
      const fetchUserTrips = async () => {
        const token = getToken();
  
        try {
          const response = await axios.get(
            `http://localhost:8080/api/trip/getLikedTrips/${profile._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          console.log("API Response:", response.data);
          setLikedTrips(response.data.likedTrips);
        } catch (error) {
          console.error("Error fetching user trips:", error);
        }
      };
  
      fetchUserTrips();
    }
  }, [profile]);

  return (
    <div className="liked-trips">
      <h2>Liked Trips</h2>
      {likedTrips && likedTrips.length > 0 ? (
        <ul className="trip-list">
          {likedTrips.map((trip, index) => (
            <li key={index} className="trip-item">
              <h3 className="Likedtrip-name">{trip.name}</h3>
              <p className="Likedtrip-detail">Destination: {trip.destination}</p>
              <p className="Likedtrip-detail">From: {trip.from}</p>
              <p className="Likedtrip-detail">Age: {trip.age}</p>
              <p className="Likedtrip-detail">Phone Number: {trip.PhoneNumber}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-trips">No liked trips found.</p>
      )}
    </div>
  );
};

export default LikedTrips;
