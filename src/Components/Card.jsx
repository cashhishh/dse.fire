import React from "react";

function Card({ imgSrc, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden pb-6">
      <img
        src={imgSrc}
        alt="Placeholder"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 bg-red-600 text-white p-2 rounded-lg">
          {title}
        </h3>
        <p className="text-gray-950 mb-36">{description}</p>
      </div>
    </div>
  );
}
export default Card;
