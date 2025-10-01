import jwt from "jsonwebtoken";
import User from "./Models/user.model.js";

export const isLoggedIn = async (req, res, next) => {
    try {


        const token = req.headers.authorization?.split(" ")[1];


        if (!token && token == null) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        req.user = await User.findById(decoded.id).select("-password");


        next();

    } catch (error) {
        res.status(401).json({ message: "Token invalid or expired", message: error.message });
    }
};




export const authorizeRoles = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied: insufficient permissions" });
        }

        next();
    };

};

