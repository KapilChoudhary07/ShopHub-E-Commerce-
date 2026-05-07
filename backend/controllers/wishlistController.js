const User = require("../models/User");

// ✅ GET wishlist
exports.getWishlist = async (req, res) => {
  const user = await User.findById(req.user.id)
    .populate("wishlist");

  res.json(user.wishlist);
};


// ✅ TOGGLE wishlist
exports.toggleWishlist = async (req, res) => {
  const { productId } = req.body;

  const user = await User.findById(req.user.id);

  const exists = user.wishlist.find(
    (id) => id.toString() === productId
  );

  if (exists) {
    user.wishlist = user.wishlist.filter(
      (id) => id.toString() !== productId
    );
  } else {
    user.wishlist.push(productId);
  }

  await user.save();

  // 🔥 ALWAYS POPULATE
  const updatedUser = await User.findById(req.user.id)
    .populate("wishlist");

  res.json(updatedUser.wishlist);
};