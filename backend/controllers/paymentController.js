const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ CREATE PAYMENT
exports.createPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    // console.log("AMOUNT:", amount);
    // console.log("KEY:", process.env.RAZORPAY_KEY_ID);

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    console.log("ORDER CREATED:", order);

    res.json(order);

  } catch (err) {
    console.log("🔥 CREATE PAYMENT ERROR FULL:", err);
    res.status(500).json({ msg: err.message });
  }
};
// ✅ VERIFY PAYMENT
exports.verifyPayment = (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSign === razorpay_signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
};