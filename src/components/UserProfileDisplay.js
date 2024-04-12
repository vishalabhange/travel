import React, { useState, useEffect } from "react";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../firebaseConfig";

import axios from "axios";
import Header from "./Header";
import Sidebar from "./SideBar";
import "../Css/Profile.css";
import { getToken } from "../authUtils";
import ImageUpload from "./ImageUpload";
import ProfileImage from "./ProfileImage";
import ImageGallery from "./ImageGallery";

const storage = getStorage();

const UserProfileDisplay = () => {
  const [profile, setProfile] = useState({});
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState("");

  const [imageUrls, setImageUrls] = useState([]);

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

  // images
  useEffect(() => {
    const imageRef = ref(storage, "images");

    listAll(imageRef)
      .then((result) => {
        const urls = [];

        // Iterate through each item in the result
        result.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((url) => {
              urls.push(url);
              setImageUrls(urls); // Update state after each URL is obtained
            })
            .catch((error) => {
              console.error("Error getting download URL:", error.message);
            });
        });
      })
      .catch((error) => {
        console.error("Error fetching images:", error.message);
      });
  }, []);

  return (
    <>
      <div>
        <Header setAuthToken={setAuthToken} />
        <Sidebar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="content-profile-page">
            <div className="profile-user-page card">
              <div className="img-user-profile">
                {/* <img className="profile-bgHome" src="" alt="" /> */}
                <ProfileImage className="profile-bgHome" />
                {imageUrls.map((url, index) => (
                  <div key={index} className="gallery-item">
                    <img
                      src={url}
                      alt={`Image ${index}`}
                      className={`gallery-image-${index}`}
                    />
                  </div>
                ))}
              </div>
              <button>Follow</button>
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
      <ImageUpload />
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <div key={index} className="gallery-item">
            <img
              src={url}
              alt={`Image ${index}`}
              className={`gallery-image-${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfileDisplay;
