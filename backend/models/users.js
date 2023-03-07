const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    lastName: {
      type: String,
      required: [true, "please provide a last name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email address"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    profileImage: {
      type: String,
    }
  }, {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);