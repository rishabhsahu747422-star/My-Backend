import express from "express";
import { connectDb } from "./src/config/db.js";
import employeRoute from "./src/routes/employe.route.js";

connectDb();

const app = express();

app.use(express.json());

app.use("/api/employe", employeRoute);

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
