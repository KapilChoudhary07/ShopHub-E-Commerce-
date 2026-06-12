
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true, // ⚠️ testing ke liye
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("Mongo Error ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;