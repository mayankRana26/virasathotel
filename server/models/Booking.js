import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  checkIn: {
    type: Date,
    required: true,
  },

  checkOut: {
    type: Date,
    required: true,
  },

  guests: {
    type: Number,
    required: true,
  },

  roomType: {
    type: String,
    required: true,
  },

  // 🏨 BOOKING STATUS
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;