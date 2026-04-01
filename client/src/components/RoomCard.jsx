import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white  rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h2 className="text-lg font-semibold">{room.name}</h2>

        {/* FEATURES */}
        <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-2">
          <span>{room.bed}</span>
          <span>• {room.ac}</span>
          <span>• {room.view}</span>
          <span>• WiFi</span>
        </div>

        {/* PRICE + BUTTON */}
        <div className="mt-4 flex items-center justify-between">

          <p className="text-yellow-500 font-semibold">
            ₹{room.price}/night
          </p>

          <button
            onClick={() => navigate(`/rooms/${room.id}`)}
            className="bg-black text-white px-3 py-1.5 text-sm rounded-full hover:bg-gray-800 transition"
          >
            View
          </button>

        </div>
      </div>
    </div>
  );
};

export default RoomCard;