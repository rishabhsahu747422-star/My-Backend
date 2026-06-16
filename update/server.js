const express = require("express");

let app = express();

app.use(express.json());

const ganjaArr = [
  {
    ganja: "weed",
    rate: "400 ki pudia",
  },
  {
    ganja: "maal",
    rate: "500 ki pudia",
  },
  {
    ganja: "lekha",
    rate: "350 ki pudia",
  },
  {
    ganja: "golmal",
    rate: "700 ki pudia",
  },
  {
    ganja: "charas",
    rate: "200 ki pudia",
  },
];

app.post("/", (req, res) => {
  try {
    let { ganja, rate } = req.body;

    if (!ganja || !rate) {
      return res.json({ success: false, message: "All fields are Required" });
    }

    ganjaArr.push({ ganja, rate });
    return res.json({
      success: true,
      message: "Ganja mil gaya",
      data: { ganja, rate },
    });
  } catch (error) {
    return res.json({ success: false, message: "Internal server error" });
  }
});

app.get("/ganjas", (req, res) => {
  try {
    return res.json({
      success: true,
      message: "Here your Ganjas",
      data: ganjaArr,
    });
  } catch (error) {
    return res.json({ success: false, message: "Internal server error" });
  }
});

app.patch("/update-data/:id", (req, res) => {
  let { id } = req.params;

  let { name } = req.body;

  if (!name)
    return res.json({
      success: false,
      message: "Please Enter name",
    });

  let updateData = ganjaArr.find((elem) => elem.ganja === id);

  if (!updateData)
    return res.json({
      success: false,
      message: "No name found with this id",
    });

  updateData.ganja = name;

  return res.json({
    success: true,
    message: "Data Updated",
    data: ganjaArr,
  });
});

app.listen(3000, () => {
  console.log("server is running at 3000");
});
