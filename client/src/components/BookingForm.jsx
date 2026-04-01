import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { createBooking } from "../api/bookingApi";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: location.state?.roomName || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 💰 Room Prices
  const roomPrices = {
    "Deluxe Room": 2500,
    "Standard Room": 1500,
    "Super Deluxe Room": 3200,
    "Family Suite": 4500,
    "Economy Room": 1200,
    "Luxury Suite": 6000,
    "Premium Room": 2800,
    "Couple Special Room": 3500,
  };

  // 📅 Date calculation
  const checkInDate = new Date(form.checkIn);
  const checkOutDate = new Date(form.checkOut);

  const timeDiff = checkOutDate - checkInDate;
  const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const totalNights = nights > 0 ? nights : 0;

  const pricePerNight = roomPrices[form.roomType] || 0;
  const total = totalNights > 0 ? pricePerNight * totalNights : 0;
  const advance = Math.round(total * 0.25);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkOutDate <= checkInDate) {
      alert("Check-out must be after check-in");
      return;
    }

    try {
      setLoading(true);

      // 💰 STEP 1: Create Razorpay order
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings/create-order`,
        { amount: advance }
      );

      // 💳 STEP 2: Razorpay options
      const options = {
        key: "rzp_test_SXTjAvLdimqC5C",
        amount: order.amount,
        currency: "INR",
        name: "Virasat Hotel",
        description: "Room Booking Advance",

        handler: async function (response) {
          try {
            // 💾 STEP 3: Save booking in DB
            await createBooking({
              name: form.name,
              phone: form.phone,
              checkIn: form.checkIn,
              checkOut: form.checkOut,
              guests: form.guests,
              roomType: form.roomType,
              totalAmount: total,
              advanceAmount: advance,
              paymentStatus: "partial",
              paymentId: response.razorpay_payment_id,
            });

            // 💚 STEP 4: WhatsApp message
            const phone = "919410977778";

            const text = `🔥 New Booking Confirmed

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏨 Room: ${form.roomType}
👥 Guests: ${form.guests}

📅 Check-in: ${form.checkIn}
📅 Check-out: ${form.checkOut}

💰 Total: ₹${total}
💵 Advance Paid: ₹${advance}

🆔 Payment ID: ${response.razorpay_payment_id}`;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

setTimeout(() => {
  window.location.href = url;
}, 500);
            // 🎉 Redirect
            navigate("/thank-you", {
              state: {
                name: form.name,
                roomType: form.roomType,
                advanceAmount: advance,
              },
            });

          } catch (err) {
            console.log(err);
            alert("Booking save failed ❌");
          }
        },

        theme: {
          color: "#facc15",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.log(error);
      alert("Payment Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-10 md:px-8">
      <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
        Book Your Stay
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-5 md:p-8 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            name="checkIn"
            required
            value={form.checkIn}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="date"
            name="checkOut"
            required
            value={form.checkOut}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <input
          type="number"
          name="guests"
          min="1"
          max={2}
          required
          value={form.guests}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />

        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-2 text-sm"
        >
          <option value="">Select Room Type</option>
          <option>Deluxe Room</option>
          <option>Standard Room</option>
          <option>Super Deluxe Room</option>
          <option>Family Suite</option>
          <option>Luxury Suite</option>
          <option>Economy Room</option>
          <option>Premium Room</option>
          <option>Couple Special Room</option>
        </select>

        {/* 💰 PRICE */}
        {totalNights > 0 && (
          <div className="text-sm text-gray-600 space-y-1">
            <p>🛏 Nights: {totalNights}</p>
            <p>💰 Total: ₹{total}</p>
            <p className="text-yellow-500 font-semibold">
              Advance (25%): ₹{advance}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black py-2.5 rounded-full font-semibold"
        >
          {loading ? "Processing..." : "Pay & Book"}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;