const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateAuthToken = user => {
    return jwt.sign({ netid: user.netid }, process.env.JWT_KEY);
}

const isAuthenticated = async (req, res, next) => {
    console.log("here")
    const token = req.header('Authorization').replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_KEY, async (error, userData) => {
        if (error) {
            // Invalid token
            return res.status(403).send('Not authorized.');
        } else {
            try {
                const user = await User.findOne({ netid: userData.netid, 'token': token });
                req.user = user;
                req.token = token;
                next();
            } catch (error) {
                // Invalid netid and token combination
                res.status(401).send('Cannot find user.');
            }
        }
    });
}

module.exports = {
    generateAuthToken,
    isAuthenticated
};