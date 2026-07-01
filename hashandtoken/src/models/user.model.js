const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is Required"],
    },
    email: {
      type: String,
      require: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, "Minimun 6 chars are Required"],
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
