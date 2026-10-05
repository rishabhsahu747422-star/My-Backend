import mongoose from "mongoose";

export let connectDB = async () => {
  await mongoose.connect("mongodb://0.0.0.0/test");
  console.log("mongodb connected");
};
