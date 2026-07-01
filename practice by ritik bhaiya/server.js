const express = require("express");
const userRoutes = require("./src/routes/user.routes");
const connectDb = require("./src/config/db");

const app = express();
connectDb();

app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
