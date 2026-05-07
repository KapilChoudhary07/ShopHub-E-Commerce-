const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
  updateCart
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, removeFromCart);
router.put("/:id", protect, updateCart);

module.exports = router;