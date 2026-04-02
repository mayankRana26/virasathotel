import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";
import RoomDetails from "./pages/RoomDetails";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./routes/AdminRoute";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/food" element={<Food />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />

        <Route
  path="/admin"
  element={
    <AdminRoute>
      <Admin />
    </AdminRoute>
  }
/>
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
