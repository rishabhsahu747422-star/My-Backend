const express = require("express");

let app = express();

app.use(express.json());

let arr = [];

app.post("/data", (req, res) => {
  const { frame, rate, sell } = req.body;

  if (!frame || !rate || !sell) {
    res.send("incomplete data");
  }

  arr.push({ frame, rate, sell });

  res.send("ok");
});

app.get("/", (req, res) => {
  res.send(arr);
});

app.listen(3000, () => {
  console.log("server is running!!!");
});
