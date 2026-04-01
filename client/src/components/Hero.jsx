import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="
      relative w-full overflow-hidden
      h-[40svh]       /* mobile */
      md:h-[70vh]     /* tablet */
      lg:h-[70vh]     /* large screen */
    ">

      {/* VIDEO */}
      <video
        src="/virasatbg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-white font-semibold leading-tight 
          text-[20px] 
          sm:text-2xl 
          md:text-4xl 
          lg:text-5xl">

          Experience Luxury & Comfort <br />
          <span className="text-yellow-400">in Nature</span>
        </h1>

        <p className="mt-2 font-semibold text-yellow-100 
          text-xs 
          sm:text-sm 
          md:text-base">
          Book your stay with elegance
        </p>

        <button
          onClick={() => navigate("/rooms")}
          className="mt-4 
          bg-yellow-200 text-black 
          px-5 py-2.5 
          sm:px-6 sm:py-3 
          text-sm sm:text-base 
          rounded-full font-semibold 
          active:scale-95 hover:scale-105 transition"
        >
          Book Room
        </button>

      </div>
    </div>
  );
};

export default Hero;