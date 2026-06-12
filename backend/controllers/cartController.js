const User = require("../models/User");


//  GET cart
exports.getCart = async (req, res) => {
  const user = await User.findById(req.user.id)
    .populate("cart.productId");

  res.json(user.cart);
};


//  ADD to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const user = await User.findById(req.user.id);

  const item = user.cart.find(
    (i) => i.productId.toString() === productId
  );

  if (item) {
    item.quantity += quantity;
  } else {
    user.cart.push({ productId, quantity });
  }

  await user.save();

  //  IMPORTANT: populate before sending
  const updatedUser = await User.findById(req.user.id)
    .populate("cart.productId");

  res.json(updatedUser.cart);
};


//  REMOVE item
exports.removeFromCart = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.cart = user.cart.filter(
    (i) => i.productId.toString() !== req.params.id
  );

  await user.save();

  const updatedUser = await User.findById(req.user.id)
    .populate("cart.productId");

  res.json(updatedUser.cart);
};


//  UPDATE quantity
exports.updateCart = async (req, res) => {
  const { quantity } = req.body;

  const user = await User.findById(req.user.id);

  const item = user.cart.find(
    (i) => i.productId.toString() === req.params.id
  );

  if (item) {
    item.quantity = quantity;
  }

  await user.save();

  const updatedUser = await User.findById(req.user.id)
    .populate("cart.productId");

  res.json(updatedUser.cart);
};