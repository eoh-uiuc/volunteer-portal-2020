const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { generateAuthToken, isAuthenticated } = require('../../utils/auth');
const User = require('../../models/User');

// Volunteer signup
router.post('/signup', async (req, res) => {
  const data = req.body;
  // Check if email is valid
  if (!validator.isEmail(data.email)) {
    return res.status(400).send('Invalid email address.');
  }

  // Check if email is already in use
  let user = await User.findOne({ 'email': data.email });
  if (user) {
    return res.status(400).send('Email is already in use.');
  }

  // Create new user
  try {
    user = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
      email: data.email,
      phone: data.phone,
      netid: data.netid,
      password: data.password,
      society: data.society,
    });
    // Hash the password before saving
    user.password = await bcrypt.hash(user.password, 8);
    await user.save();

    res.json({
      code: 200,
      message: 'Successfully created new user.',
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send('Failed to create new user');
  }
})

// Volunteer login
router.post('/login', async (req, res) => {
  try {
    const { netid, password } = req.body;
    const user = await User.findOne({ netid });
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).send('Invalid login credentials');
    } else {
      const token = await generateAuthToken(user);
      res.json({
        code: 200,
        message: 'Successfully logged in',
        success: true,
        user,
        token,
      });
    }
  } catch (error) {
    res.status(400).send('Failed to login');
  }
})

module.exports = router;
