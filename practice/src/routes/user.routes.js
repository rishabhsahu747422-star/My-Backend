const express = require("express");
const ProductCreateController = require("../controller/user.controller");

const router = express.Router();

router.post("/create", ProductCreateController);

module.exports = router;
