import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./SideBar";
import "../Css/Profile.css";
import { useClickedEmail } from "./EmailContext";

const UserProfileDisplay = () => {
  const { clickedEmail } = useClickedEmail();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/auth/searchuser/${clickedEmail}`
        );

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

    if (clickedEmail) {
      fetchProfile();
    }
  }, [clickedEmail]);

  return (
    <>
      <div>
        <Header />
        <Sidebar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="content-profile-page">
            <div className="profile-user-page card">
              <div className="img-user-profile"></div>
              <div className="user-profile-data">
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
              </div>
              <div className="description-profile">
                Registered on {new Date(profile.date).toLocaleDateString()}
              </div>
              <ul className="data-user">
                <li>
                  <strong>{profile._id}</strong>
                  <span>User ID</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfileDisplay;
