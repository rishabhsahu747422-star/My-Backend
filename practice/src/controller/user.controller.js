const express = require("express");
const productModel = require("../models/product.model");

const ProductCreateController = async (req, res) => {
  const {
    name,
    description,
    brand,
    category,
    price,
    discountPrice,
    costPrice,
    stock,
    ratings,
  } = req.body;

  if (
    !name ||
    !description ||
    !brand ||
    !category ||
    !price ||
    !discountPrice ||
    !costPrice ||
    !stock ||
    !ratings
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are Required",
    });
  }

  const products = await productModel.create({
    name,
    description,
    brand,
    category,
    pricing: { price, discountPrice, costPrice },
    stock,
    ratings,
  });

  return res.status(201).json({
    success: true,
    message: "Product created",
    data: products,
  });
};

module.exports = ProductCreateController;
