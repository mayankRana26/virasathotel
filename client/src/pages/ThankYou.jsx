import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">

      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-md w-full">

        <h1 className="text-2xl md:text-3xl font-semibold text-green-600">
          🎉 Booking Confirmed!
        </h1>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Thank you <span className="font-semibold">{data?.name}</span> for booking.
        </p>

        <p className="mt-2 text-gray-600 text-sm">
          Room: <span className="font-semibold">{data?.roomType}</span>
        </p>

        <p className="mt-3 text-gray-500 text-sm">
          Our team will contact you shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold"
        >
          Go Home
        </button>

      </div>
    </div>
  );
};

export default ThankYou;