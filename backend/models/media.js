const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mediaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    resourceLink: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    mediaCategory: {
      type: String,
      unique: false,
      enum: ["Video", "Article", "Event", "Humor"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Media", mediaSchema);
