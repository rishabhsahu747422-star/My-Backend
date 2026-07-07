const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
  },
  brand: {
    type: String,
    require: [true, "Brand is Required"],
  },
  category: {
    type: String,
    require: [true, "Category is Required"],
  },
  pricing: {
    price: {
      type: Number,
      require: [true, "Price is required"],
    },
    discountPrice: {
      type: Number,
      require: [true, "Discount Price is required"],
    },
    costPrice: {
      type: Number,
      require: [true, "Cost Price is required"],
    },
  },
  description: {
    type: String,
    require: [true, "Description is Required"],
  },
  stock: {
    type: Number,
    require: [true, "Stock is Required"],
  },
  ratings: {
    type: Number,
    require: [true, "Ratings is Required"],
  },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
