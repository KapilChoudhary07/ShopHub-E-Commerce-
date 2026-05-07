

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ msg: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });

  res.json({
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).json({ msg: "Invalid email" });

  // ✅ Google se login kiya hua user check
  if (!user.password) {
    return res.status(400).json({ msg: "Please login with Google" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  res.json({
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }
  });
};

exports.googleSuccess = (req, res) => {
  const token = generateToken(req.user);
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin
  };
  res.redirect(
    `http://localhost:5173/google-success?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`
  );
};