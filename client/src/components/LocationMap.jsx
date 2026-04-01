import React from "react";

const LocationMap = () => {
  return (
    <div className="w-full px-4 py-6 bg-white">
      
      {/* Heading */}
      <div className="mb-3 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Location
        </h2>
        <p className="text-xs text-gray-500">
          Virasat Hotel & Restaurant
        </p>
      </div>

      {/* Map */}
      <div className="w-full h-[240px] rounded-xl overflow-hidden shadow-sm">
        <iframe
          title="Virasat Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.229789754452!2d78.67640217535245!3d30.23052297483037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a90051135811%3A0xba93cadaa57bc14!2sVirasat%20Hotel%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1774885188754!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* CTA Buttons (IMPORTANT 🔥) */}
  {/* CTA Buttons */}
<div className="mt-4 flex justify-center">
  
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Virasat+Hotel+and+Restaurant"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-auto md:px-6 text-center bg-black text-white text-sm py-3 rounded-xl active:scale-95 transition"
  >
    Get Directions
  </a>

</div>

    </div>
  );
};

export default LocationMap;