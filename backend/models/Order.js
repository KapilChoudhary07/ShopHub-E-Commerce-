


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],

  shippingAddress: {
    name: String,
    phone: String,
    address: String,
    city: String,
    pincode: String,
  },

  totalPrice: Number,

  isPaid: {
    type: Boolean,
    default: true,
  },

  paymentMethod: {
    type: String,
    default: "Razorpay",
  },

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);