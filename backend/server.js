// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const wishlistRoutes = require("./routes/wishlistRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

// const app = express();


// const cors = require("cors");

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/uploads", express.static("uploads"));

// app.use(cors());

// app.get("/", (req,res)=>{
//     res.send("API is running");
// })
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on ${PORT}`));



// app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/wishlist", wishlistRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/payment", paymentRoutes);
// // app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ Saare routes pehle register karo
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));