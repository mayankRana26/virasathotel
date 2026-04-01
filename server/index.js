import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// 🔥 LOAD ENV FIRST (VERY IMPORTANT)
dotenv.config();

// 🔍 DEBUG (temporary)

const app = express();

// DB connect
connectDB();

// Middleware
app.use(
  cors({
    origin: "https://virasathotel.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});