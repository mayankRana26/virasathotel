import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-4 py-8">

      {/* Hotel Name */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold">
          Virasat Hotel & Restaurant
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Comfort • Food • Experience
        </p>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm mb-6">
        <a href="/" className="text-gray-300 hover:text-white transition">
          Home
        </a>
        <a href="/rooms" className="text-gray-300 hover:text-white transition">
          Rooms
        </a>
        <a href="/food" className="text-gray-300 hover:text-white transition">
          Food
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-center text-xs text-gray-400 space-y-1 mb-6">
        <p>📍 Virasat Hotel, Badrinath Rd,Bagwan, Uttarakhand 249161, India</p>
        <p>📞 +91 94109 77778</p>
        <p>✉️ virasathotelandrestaurant@gmail.com</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3 mb-6">
        <a
          href="tel:+919410977778"
          className="flex-1 text-center bg-white text-black py-2 rounded-xl text-sm font-medium active:scale-95 transition"
        >
          Call Now
        </a>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Virasat+Hotel+and+Restaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-white py-2 rounded-xl text-sm font-medium active:scale-95 transition"
        >
          Directions
        </a>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-[10px] text-gray-500">
        © {new Date().getFullYear()} Virasat Hotel and Restaurant. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;