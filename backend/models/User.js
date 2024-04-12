const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  backgroundUrl: { type: String },
  avatarUrl: { type: String },
});
const User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;
