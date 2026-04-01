import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/admin`,
});

// 🔐 Helper to get token
const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// ✅ Get all bookings (ADMIN)
export const getBookings = () =>
  API.get("/bookings", getAuthHeader());

// ✅ Delete booking
export const deleteBooking = (id) =>
  API.delete(`/bookings/${id}`, getAuthHeader());

// ✅ Update booking status
export const updateBooking = (id, data) =>
  API.put(`/bookings/${id}/status`, data, getAuthHeader());