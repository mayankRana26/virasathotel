import React from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  return (
    <div className="pt-15 px-4 md:px-8 border-4 ">

      {/* HEADING */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">
        Our Rooms
      </h1>

      {/* GRID */}
      <div className="
        grid gap-5
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
      ">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

    </div>
  );
};

export default Rooms;