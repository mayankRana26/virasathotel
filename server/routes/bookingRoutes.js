import express from "express";
import {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

// 🔥 BOOKING
router.post("/create", createBooking);
router.get("/", getBookings);
router.put("/:id/status", updateBookingStatus);
router.delete("/:id", deleteBooking);


export default router;