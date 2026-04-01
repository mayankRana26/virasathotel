import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  checkIn: {
    type: Date,
    required: true
  },

  checkOut: {
    type: Date,
    required: true
  },

  guests: {
    type: Number,
    required: true
  },

  roomType: {
    type: String,
    required: true
  },

  // 💰 PAYMENT FIELDS
  totalAmount: {
    type: Number,
    required: true
  },

  advanceAmount: {
    type: Number,
    required: true
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "partial", "paid"],
    default: "pending"
  },

  paymentMethod: {
    type: String,
    enum: ["hotel", "upi"],
    default: "hotel"
  },

  paymentId: {
    type: String
  },

  // 🏨 BOOKING STATUS
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;