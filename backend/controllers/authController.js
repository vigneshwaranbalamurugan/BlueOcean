const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const sendEmail = require("../utils/sendEmail");
require('dotenv').config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Signup with Email & Password
exports.signup = async (req, res) => {
  try {
    console.log('hi');
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
   
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = new User({ name, email, password: hashedPassword,verificationToken,});

    await user.save();

    const verifyUrl = `http://localhost:5000/auth/verify-email/${verificationToken}`;
    await sendEmail(email, "Verify Your Email", `Click the link to verify: ${verifyUrl}`);

    res.status(201).json({ message: "Verification email sent. Please check your inbox." });
  } catch (error) {
    res.status(500).json({ message: 'Failed to signup! Try again Later!' });
  }
};

exports.verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
      const user = await User.findOne({ verificationToken: token });
  
      if (!user) return res.status(400).json({ message: "Invalid verification token" });
  
      user.isVerified = true;
      user.verificationToken = null;
      await user.save();
  
      res.json({ message: "Email verified successfully. You can now log in." });
    } catch (error) {
      res.status(500).json({ message: 'Failed to Verify! Try again Later!' });
    }
  };

  
// Login with Email & Password
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });

    if (!user.isVerified) return res.status(400).json({ message: "Please verify your email before logging in." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    res.json({message:`Signed in as ${email}`, user, token });
  } catch (error) {
    res.status(500).json({ message: 'Failed to Login! Try again Later' });
  }
};

// Google OAuth Callback
exports.googleAuth = async (req, res) => {
  try {
    const { email, googleId, name, profilePic } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, googleId, name, profilePic });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Login Failed! Try again Later' });
  }
};
