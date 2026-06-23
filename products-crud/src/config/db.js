const { default: mongoose } = require("mongoose");

let connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://rishabhsahu747422_db_user:qwerty12345@rishabh-1.s2exrue.mongodb.net/",
  );

  console.log("Mongodb Connected");
};

module.exports = connectDb;
