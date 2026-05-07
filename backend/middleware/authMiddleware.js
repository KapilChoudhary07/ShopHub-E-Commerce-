const jwt = require("jsonwebtoken");

// 🔒 PROTECT ROUTES (login required)
exports.protect = (req, res, next) => {
  let token;

  // Authorization header check
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token invalid"
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token, access denied"
    });
  }
};

// 👑 ADMIN CHECK
exports.admin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({
      success: false,
      message: "Admin access only"
    });
  }
  next();
};