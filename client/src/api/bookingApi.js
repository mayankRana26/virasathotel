import axios from "axios";

const API = axios.create({
  baseURL: "https://virasathotel-server.onrender.com/api/bookings",
});

export const createBooking = (data) => API.post("/create", data);
export const getBookings = () => API.get("/");
export const deleteBooking = (id) => API.delete(`/${id}`);
export const updateBooking = (id, data) =>
  API.put(`/${id}/status`, data);
