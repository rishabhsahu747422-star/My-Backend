const express = require("express");
const connectDb = require("./src/config/db");
const ProductModel = require("./src/models/product.model");

connectDb();
const app = express();

app.use(express.json());

app.post("/api/products/create", (req, res) => {
  const { productName, currency, amount, description, category } = req.body;

  if (!productName || !currency || !amount || !category)
    return req.json({
      succes: false,
      message: "All fields are required",
    });

  const newProducts = ProductModel({
    productName,
    category,
    description,
    price: {
      currency,
      amount,
    },
  });
  return res.json({
    succes: true,
    message: "Product created",
    data: newProducts,
  });
});

app.get("/", async (req, res) => {
  try {
    let allProducts = await ProductModel.find();

    return res.status(200).json({
      success: true,
      message: "All products fetched",
      data: allProducts,
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "Internal server error",
    });
  }
});

app.patch("/api/products/update/:productId", async (req, res) => {
  try {
    let { productId } = req.params;

    let { productName, description, category, currency, amount } = req.body;

    let product = await ProductModel.findByIdAndUpdate(
      productId,
      { productName, description, category, price: { currency, amount } },
      { new: true, runValidators: true },
    );

    return res.json({
      success: true,
      message: "Product Updated",
      data: product,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error ",
    });
  }
});

app.get("/api/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await ProductModel.findById(productId);

    return res.status(200).json({
      success: true,
      message: "product fetched",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.delete("/api/products/delete/:productId", async (req, res) => {
  try {
    let { productId } = req.params;

    await ProductModel.findByIdAndDelete(productId);

    return res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
