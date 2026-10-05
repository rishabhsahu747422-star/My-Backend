import express from "express";
import { connectDB } from "./src/config/db.js";
import router from "./src/routes/user.routes.js";

connectDB();
const app = express();

app.use(express);
app.use(express.json());

app.use("/api/auth/user", router);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "klsdjf" });
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
