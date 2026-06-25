import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rishabhsahu747422_db_user:ris1234567890@rishabh-1.s2exrue.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in mongodb", error);
  }
};
