import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import { useNavigate } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import Food from "./Food";
import GoogleReviews from "../components/GoogleReviews";
import BookingForm from "../components/BookingForm";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Hero />

      {/* ROOMS PREVIEW */}
      <section className="px-4 md:px-8 py-10">

        {/* HEADING */}
        <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
          Our Rooms
        </h2>

        {/* GRID */}
        <div className="
          grid gap-4
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3
        ">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mb-0 mt-10">
          <button
            onClick={() => navigate("/rooms")}
            className="
              border border-yellow-400 text-black
              px-6 py-2 rounded-full 
              text-sm md:text-base font-medium bg-yellow-400
              hover:bg-yellow-500 hover:text-black 
              transition
            "
          >
            View All Rooms →
          </button>
        </div>

      </section>
      
      <section className="px-4 py-10">

  {/* Only 4 items */}
  <Food limit={4} />

  {/* View More Button */}
  <div className="flex justify-center mt-6">
    <button
      onClick={() => navigate("/food")}
      className="
        border border-yellow-400 bg-yellow-400
        text-black px-6 py-2 rounded-full
        text-sm font-medium
        hover:bg-yellow-500 transition
      "
    >
      View Full Menu →
    </button>
  </div>

</section>
      <GoogleReviews />
          <LocationMap />
          <BookingForm />
    </div>
  );
};

export default Home;