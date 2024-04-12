const express = require("express");
const mongoose = require("mongoose");
const Trip = require("../models/Trip");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/createTrip",
  [
    body("name", "Enter your name").notEmpty(),
    body("email", "Enter your email"),
    body("destination", "Enter your destination").notEmpty(),
    body("from", "Enter you travelling from location").notEmpty(),
    body("gender", "Your Gender").notEmpty(),
    body("age", "Your age should not be empty").notEmpty(),
    body("group_of", "NO of members"),
    body("PhoneNumber", "Your PhoneNumber should not be empty").isLength(10),
    body("date", "Enter a valid date").notEmpty(),
    body("time", "Enter a valid time").notEmpty(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Retrieve data from the request body
    const {
      name,
      email,
      destination,
      from,
      gender,
      age,
      group_of,
      PhoneNumber,
      date,
      time,
    } = req.body;

    try {
      // Save the trip details to the database
      const trip = new Trip({
        name,
        email,
        destination,
        from,
        gender,
        age,
        group_of,
        PhoneNumber,
        date,
        time,
      });
      await trip.save();

      // Respond with a success message or the created trip object
      res.status(200).json({ message: "Trip created successfully", trip });
    } catch (error) {
      console.error("Error saving trip to the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Route 2: Get all trips using: GET "/api/getAllTrips"
router.get("/getAllTrips", async (req, res) => {
  try {
    // Fetch all trips from the database
    const trips = await Trip.find();

    // Respond with the list of trips
    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route 3: Get specific trip using: GET "/api/trip-details/:id"
router.get("/trip-details/:id", async (req, res) => {
  const tripId = req.params.id;

  try {
    // Retrieve trip details from the database based on the tripId
    const tripDetails = await Trip.findById(tripId);

    if (!tripDetails) {
      // If trip not found, respond with a 404 status
      return res.status(404).json({ error: "Trip not found" });
    }

    // Send trip details as a JSON response
    res.json({ tripDetails });
  } catch (error) {
    console.error("Error fetching trip details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getUserTrips", async (req, res) => {
  const profileId = req.query.userId; // Use req.query.userId to get the query parameter

  try {
    // Fetch trips for the specified user from the database
    // const trips = await Trip.find({ userId });
    const trips = await Trip.find({ userId: profileId });

    // Respond with the list of user-specific trips
    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching user trips from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route 4: Get liked trips for a specific user using: GET "/api/getLikedTrips/:userId"
router.get("/getLikedTrips/:userId", async (req, res) => {
  try {
    // Convert the userId to a valid ObjectId
    const profileId = req.params.userId;

    // Use the Trip model to find trips where the profileId is in the likes array
    const likedTrips = await Trip.find({ likes: { $in: [profileId] } });

    res.status(200).json({ likedTrips });
  } catch (error) {
    console.error("Error fetching liked trips from the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route 5: Like a trip for a specific user using: POST "/api/likeTrip/:tripId/:userId"
router.post("/likeTrip/:tripId/:userId", async (req, res) => {
  const tripId = req.params.tripId;
  const userId = req.params.userId;

  try {
    // Find the trip by ID
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    // Ensure that the 'likes' property is initialized as an array
    trip.likes = trip.likes || [];

    // Check if the user has already liked the trip
    if (trip.likes.includes(userId)) {
      return res.status(400).json({ error: "User already liked this trip" });
    }

    // Update the "likes" field in the trip model
    trip.likes.push(userId);

    // Save the updated trip
    await trip.save();

    res
      .status(200)
      .json({ message: "Trip liked successfully", likedTrip: trip });
  } catch (error) {
    console.error("Error liking trip:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Comments ********************************

router.post("/addComment/:tripId", async (req, res) => {
  const userId = req.params.userId;
  const tripId = req.params.tripId;

  try {
    const { text } = req.body;

    // const trip = await Trip.findById(tripId).populate({
    //   path: "comments",
    //   populate: {
    //     path: "userId",
    //     model: "User",
    //   },
    // });

    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    trip.comments = trip.comments || [];

    const newComment = {
      userId: userId, // Assuming user ID is available in the request
      text: text,
      timestamp: Date.now(),
    };

    // Add the new comment to the trip's comments array
    trip.comments.push(newComment);

    // Save the updated trip
    await trip.save();

    res
      .status(200)
      .json({ message: "Comment added successfully", commentedTrip: trip });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getComments/:tripId", async (req, res) => {
  const tripId = req.params.tripId;

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    const comments = trip.comments || [];

    res.status(200).json({ comments: comments });
  } catch (error) {
    console.error("Error getting comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
