import React, { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    // script load (only once)
    if (!document.getElementById("sociablekit-script")) {
      const script = document.createElement("script");
      script.id = "sociablekit-script";
      script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full px-4 py-8 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          What Our Guests Say ⭐
        </h2>
        <p className="text-xs text-gray-500">
          Real reviews from our happy customers
        </p>
      </div>

      {/* Reviews Widget */}
      <div className="bg-white rounded-2xl p-3 shadow-sm">
        <div
          className="sk-ww-google-reviews"
          data-embed-id="25668176"
        ></div>
      </div>

    </section>
  );
};

export default GoogleReviews;