const Category = require("../models/Category");

// CREATE category (admin)
exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
};

// GET all categories
exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

// DELETE category
exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: "Category deleted" });
};