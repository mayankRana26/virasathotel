import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import rooms from "../data/rooms";

const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === Number(id));
  const navigate = useNavigate();

  if (!room) return <div className="pt-24 text-center text-xl font-medium">Room not found</div>;

  const handleBooking = () => {
    navigate("/booking", {
      state: { roomName: room.name },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 lg:pb-0">
      {/* Container for Desktop Centering */}
      <div className="max-w-7xl mx-auto lg:pt-32 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:gap-12 bg-white lg:rounded-3xl lg:overflow-hidden lg:shadow-xl">
          
          {/* Image Section - Full width on mobile, half on lg */}
          <div className="relative w-full lg:w-3/5 h-[40vh] md:h-[50vh] lg:h-[600px]">
         
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 px-6 py-8 lg:py-12 lg:pr-12">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-yellow-600 font-bold uppercase tracking-wider text-xs">Premium Room</span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-1">
                  {room.name}
                </h1>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <span className="text-2xl">🛏️</span>
                <p className="text-sm font-medium text-gray-700">{room.bed}</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <span className="text-2xl">❄️</span>
                <p className="text-sm font-medium text-gray-700">{room.ac}</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <span className="text-2xl">🌊</span>
                <p className="text-sm font-medium text-gray-700">{room.view}</p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <span className="text-2xl">📶</span>
                <p className="text-sm font-medium text-gray-700">Free WiFi</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8 hidden lg:block">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Price per night</p>
                  <p className="text-3xl font-bold text-gray-900">₹{room.price}</p>
                </div>
                <button
                  onClick={handleBooking}
                  className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-yellow-200"
                >
                  Book This Room
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury and comfort in our {room.name}. Designed with modern aesthetics 
                and equipped with top-tier amenities to ensure your stay is unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Footer - Price & CTA always visible on scroll */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between lg:hidden z-50">
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Total Price</p>
          <p className="text-xl font-bold text-gray-900">₹{room.price}<span className="text-sm font-normal text-gray-500"> /night</span></p>
        </div>
        <button
          onClick={handleBooking}
          className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold active:scale-95 transition-transform"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;