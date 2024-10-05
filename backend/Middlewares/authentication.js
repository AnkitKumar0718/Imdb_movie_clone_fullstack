const jwt = require('jsonwebtoken');
const User = require('../Models/users');
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
    try { 
        const token = req.cookies['jwt-imdb'];
        console.log('Token received:', token);

        if (!token) {
            return res.status(401).json({ success: false, message: "Authentication required" });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        if (!decoded || !decoded.userID) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        const user = await User.findById(decoded.userID).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user; // Attach the user to req object
        next();
    } 
    catch (error) {
        return res.status(403).json({ success: false, message: "Invalid token" });
    }
};

module.exports = authMiddleware;
