import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import bookingRoutes from "./routes/bookingRoutes.js";

// 🔥 LOAD ENV FIRST (VERY IMPORTANT)
dotenv.config();

// 🔍 DEBUG (temporary)
console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID);

const app = express();

// DB connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});