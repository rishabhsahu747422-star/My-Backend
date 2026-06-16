const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Good Evening");
});

let data = [
  {
    name: "rishabh",
  },
];

app.get("/data", (req, res) => {
  res.send(data);
});

app.post("/name", (res, req) => {
  let name = req.body();
  res.send(name);
});

app.listen(3000, () => {
  console.log("server run ho chuka h ");
});
