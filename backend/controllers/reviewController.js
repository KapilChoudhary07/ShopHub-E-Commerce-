const Product = require("../models/Product");

// ADD REVIEW
exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  // check if user already reviewed
  const alreadyReviewed = product.reviews.find(
    r => r.user.toString() === req.user.id
  );

  if (alreadyReviewed) {
    return res.status(400).json({ msg: "Already reviewed" });
  }

  const review = {
    user: req.user.id,
    rating,
    comment
  };

  product.reviews.push(review);

  // calculate average rating
  product.averageRating =
    product.reviews.reduce((acc, item) => acc + item.rating, 0) /
    product.reviews.length;

  await product.save();

  res.json(product);
};