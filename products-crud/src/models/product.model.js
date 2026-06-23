const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productsName: {
    type: String,
    required: true,
  },
  price: {
    currency: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  category: {
    type: String,
    required: true,
  },
  description: String,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
