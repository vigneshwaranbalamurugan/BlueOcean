const express = require('express');
const passport = require('passport');
const { signup, login,verifyEmail, googleAuth } = require('../controllers/authController');
const router = express.Router();

// Email & Password Routes
router.post('/signup', signup);
router.post('/login', login);

router.get("/verify-email/:token", verifyEmail);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.redirect(`/dashboard?token=${req.user._id}`);
});

module.exports = router;
