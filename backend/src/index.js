import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(cookieParser());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server is runnin on port: " + PORT);
    connectDB()
});
