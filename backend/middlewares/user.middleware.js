const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');




module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    console.log("Token received:", token);

    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        console.log("Token is blacklisted");
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        const user = await userModel.findById(decoded._id)

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        console.log("User attached to request:", req.user);

        return next();

    } catch (err) {
        console.error("Error verifying token:", err.message);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
