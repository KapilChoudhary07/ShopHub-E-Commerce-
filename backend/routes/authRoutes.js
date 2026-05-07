const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const { register, login, googleSuccess } = require("../controllers/authController");

// normal auth
router.post("/register", register);
router.post("/login", login);

// google auth
router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  googleSuccess
);

module.exports = router;