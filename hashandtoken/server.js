require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./src/config/db");
const userRoutes = require("./src/routes/user.routes");

const app = express();
connectDb();

app.use(express.json());
app.use("/api/auth", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
