const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  tags: { type: [String] },
});

module.exports = mongoose.model("Video", VideoSchema);
