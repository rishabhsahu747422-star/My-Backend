const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("ok");
  res.send("mill gaya");
});

let user = [
  {
    name: "rishabh",
  },
];

app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(3000, () => {
  console.log("server run ho chuka h ");
});
