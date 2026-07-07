const mongoose = require("mongoose");

let connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in mongodb", error);
  }
};
module.exports = connectDb;
