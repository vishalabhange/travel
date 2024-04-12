const mongoose = require("mongoose");

const { Schema } = mongoose;

const TripSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String
  },
  destination: {
    type: String,
    // required: true,
  },
  from: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  group_of: {
    type: Number,
  },
  PhoneNumber: {
    type: Number,
    // required: true,
  },
  date: {
    type: String,
    // required: true,
  },
  time: {
    type: String,
    // required: true,
  },
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
