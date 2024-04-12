// WelcomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../authUtils";
import "../Css/WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [countdown, setCountdown] = useState(3);

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

      // Set the profile state
      setProfile({ _id, name, email, date });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/Showcase");
    }, 3000);

    // Cleanup to avoid memory leaks
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };

  }, [navigate]);

  fetchProfile();

  return (
    <section id="welcome-section">
      <div>
        <h1>Welcome {profile.name}</h1>
        <p>...have a look around</p>
      </div>
    </section>
  );
};

export default WelcomePage;
