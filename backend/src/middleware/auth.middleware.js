import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const toker = req.cookies.jwt;

        if (!token) res.status(401).json({ message: "Unauthorised no token provided" });

        const decode = jwt.verify(toker, process.env.JWT_SECRET);
        if (!decode) return res.status(401).json({ message: "Unauthorised Invalid token" });

        const user = await User.findById(decode.userId).select("-password");

        if (!user) {
            res.status(404).json({ message: "no user found" })
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in proectRoute Middle layer" + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}