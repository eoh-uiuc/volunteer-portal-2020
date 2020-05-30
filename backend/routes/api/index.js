const router = require('express').Router();

// Put all routes here
router.use('/users', require('./users'));

module.exports = router;