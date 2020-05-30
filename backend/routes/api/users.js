const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// Volunteer signup
router.post('/signup', async (req, res) => {
  // TODO: Check if user is created already
  const newUser = new User(req.body)
  await newUser.save();

  res.json({
    code: 200,
    message: 'Successfully created new user',
    success: true,
    result: newUser,
  });
})

module.exports = router;
