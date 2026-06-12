

const Order = require("../models/Order");

//  CREATE ORDER (PAYMENT)
exports.createOrder = async (req, res) => {
  try {
    const { cart, totalPrice, shippingAddress } = req.body;

    const orderItems = cart.map((item) => ({
      product: item.productId._id || item.productId,  
      quantity: item.quantity,
    }));

    const order = await Order.create({
      user: req.user.id,
      orderItems,   
      totalPrice,
      shippingAddress,
      paymentMethod: "Razorpay",
      isPaid: true,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("orderItems.product");
    
    console.log("Orders:", JSON.stringify(orders[0]?.orderItems, null, 2)); // debug
    
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate({
        path: "orderItems.product",
        model: "Product",
        select: "name image price category"
      });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


//  ADMIN
// updateOrderStatus is the remaining admin route controller function


exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);

  order.status = req.body.status;

  await order.save();
  res.json(order);
};