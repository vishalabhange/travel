// commentModel.js
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  // You can add other fields like timestamp if needed
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
