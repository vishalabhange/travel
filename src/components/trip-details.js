import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "material-icons/iconfont/material-icons.css";
import "../Css/TripDetails.css";
import { useLikedTrips } from "./LikedTripsContext";

import { useClickedEmail } from "./EmailContext";

import { getToken } from "../authUtils";

const TripDetails = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState({});

  const { setClickedEmail } = useClickedEmail();

  const handleEmailClick = () => {
    setClickedEmail(tripDetails.email);
    Navigate("http://localhost:3000/SearchProfilePage")
  };

  const { id } = useParams();
  const Navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState("");
  const [text, settext] = useState([]);
  const [userId, setuserId] = useState("");

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

  const { addLikedTrip } = useLikedTrips();

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    console.log("Adding trip to LikedTrips:", tripDetails);
    addLikedTrip(tripDetails);

    try {
      axios.post(
        `http://localhost:8080/api/trip/likeTrip/${id}/${profile._id}`
      );
      setLiked(!liked); // Toggle the liked state
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleMessage = () => {
    if (tripDetails && tripDetails.PhoneNumber) {
      // Redirect to WhatsApp with the phone number from trip details
      window.location.href = `https://wa.me/${tripDetails.PhoneNumber}`;
    } else {
      // Provide a message if the phone number is not available
      alert("Phone number not available for WhatsApp redirection.");
    }
  };

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/trip/trip-details/${id}`
        );

        // Fetch comments for the trip
        const commentResponse = await axios.get(
          `http://localhost:8080/api/trip/getComments/${id}`
        );

        setTripDetails({
          ...response.data.tripDetails,
          comments: commentResponse.data.comments,
        });
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTripDetails();
  }, [id]);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleCommentChange = (e) => {
    settext(e.target.value);
  };

  const handleuserIdChange = (e) => {
    setuserId(e.target.value);
  };

  // const emailClick = () => {
  //   Navigate("/");
  // };

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:8080/api/trip/addComment/${id}`, {
        text: text, // Include the comment text in the request body
        userId: profile._id, // Include the user ID in the request body
      });
      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!tripDetails) {
    return <p className="trip-details-loading">Loading...</p>;
  }

  return (
    <div className="trip-details-container">
      <h2 className="trip-details-title">{tripDetails.name}</h2>
      <p className="trip-details-email" onClick={handleEmailClick}>
        Email : <a href="http://localhost:3001/SearchProfilePage/{tripDetails.email}">{tripDetails.email}</a>
      </p>
      <p className="trip-details-location">
        From: {tripDetails.from} ➡️ To: {tripDetails.destination}
      </p>
      <p className="trip-details-age">Age: {tripDetails.age}</p>
      <p className="trip-details-age">PhoneNumber: {tripDetails.PhoneNumber}</p>
      <p className="trip-details-date-time">
        Date: {tripDetails.date} & Time: {tripDetails.time}
      </p>
      <button className="toggle-comments-button" onClick={handleToggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <button
        className={
          liked ? "toggle-comments-button liked" : "toggle-comments-button"
        }
        onClick={handleLike}
      >
        {liked ? "💙 Liked" : "🤍 Like"}
      </button>
      <button className="toggle-comments-button" onClick={handleMessage}>
        📞 Message
      </button>
      {showComments && (
        <div className="comments-section">
          <input
            type="string"
            value={profile._id}
            onChange={handleuserIdChange}
          />
          <input
            type="text"
            placeholder="Add a comment..."
            value={text}
            onChange={handleCommentChange}
          />
          <button className="add-comment-button" onClick={handleAddComment}>
            Add Comment
          </button>
          <h3>Comments</h3>
          {tripDetails.comments.map((comment, index) => (
            <p key={index} className="comment">
              {comment.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripDetails;
