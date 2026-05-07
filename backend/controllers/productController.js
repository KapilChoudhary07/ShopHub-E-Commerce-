const Product = require("../models/Product");


// ✅ GET all products (search + filter + category populate)
exports.getProducts = async (req, res) => {
  try {
    const { keyword, category } = req.query;

    let query = {};

    // 🔍 Search
    if (keyword) {
      query.name = { $regex: keyword, $options: "i" };
    }

    // 📂 Category filter (ObjectId)
    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .populate("category", "name"); // 🔥 IMPORTANT

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



// ✅ GET single product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("category", "name");

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



// ✅ CREATE product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



// ✅ UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("category", "name");

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



// ✅ DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};