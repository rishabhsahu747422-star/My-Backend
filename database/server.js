const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/user.model");

const app = express();

app.use(express.json());

let connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://rishabhsahu747422_db_user:qwerty12345@rishabh-1.s2exrue.mongodb.net/",
  );

  console.log("Mongodb Connected");
};

connectDb();

app.post("/create", (req, res) => {
  const { name, email, mobile, gender } = req.body;

  if (!name || !email || !mobile || !gender)
    return res.json({
      success: false,
      message: "ALl fields are required",
    });

  let newUser = UserModel({
    name,
    email,
    mobile,
    gender,
  });

  res.json({
    success: true,
    message: "user created",
    data: newUser,
  });
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
