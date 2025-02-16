import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server is runnin on port: " + PORT);
    connectDB()
});
