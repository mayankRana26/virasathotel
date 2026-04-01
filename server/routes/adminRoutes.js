import express from "express";
import { protectAdmin } from "../middleware/auth.js";
import { getAdminDashboard } from "../controllers/adminController.js";

// 🔥 import booking controller
import {
  getBookings,
  deleteBooking,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

// ✅ Admin dashboard
router.get("/dashboard", protectAdmin, getAdminDashboard);

// 🔥 ADD THESE (MAIN FIX)
router.get("/bookings", protectAdmin, getBookings);
router.delete("/bookings/:id", protectAdmin, deleteBooking);
router.put("/bookings/:id/status", protectAdmin, updateBookingStatus);

export default router;