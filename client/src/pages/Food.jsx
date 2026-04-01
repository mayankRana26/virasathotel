import React from "react";

const foodItems = [
  { id: 1, name: "Chilli Potato", img: "/food/chilli-potato.jpeg" },
  { id: 2, name: "Kadhayi Paneer", img: "/food/kadhayi-paneer.png" },
  { id: 3, name: "Manchurian", img: "/food/manchuriyan.jpeg" },
  { id: 4, name: "Mix Veg", img: "/food/mix-veg.png" },
  { id: 5, name: "Noodles", img: "/food/noodles.jpeg" },
  { id: 6, name: "Paneer Chingari", img: "/food/paneer-chingari.jpeg" },
  { id: 7, name: "Veg Fried Rice", img: "/food/veg-fried-rice.jpeg" },
  { id: 8, name: "Veg Kadhayi", img: "/food/veg-kadhayi.jpeg" },
];

const Food = ({ limit }) => {
  const displayItems = limit ? foodItems.slice(0, limit) : foodItems;

  return (
    <div className="w-full mt-10 md:mt-15 px-4 py-6 bg-gray-100">
      
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Our Menu 🍴
        </h1>
      </div>

      {/* Food List */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md active:scale-[0.98] transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-50 object-cover"
            />

            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Food;