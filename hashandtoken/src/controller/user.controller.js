const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const { default: mongoose } = require("mongoose");

const userRegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }

    let hashPassword = bcrypt.hashSync(password, 10);

    let user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Registration failed",
      });
    }

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("secret", token);

    return res.status(201).json({
      success: true,
      message: "User Registered",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};

const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("secret", token);

    return res.status(200).json({
      success: true,
      message: "User Logged In",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
      error,
    });
  }
};

module.exports = {
  userRegisterController,
  userLoginController,
};
