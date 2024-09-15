// src/AnimatedImages.jsx
import React from "react";

const images = [
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_1.jpg",
    text: "Housing Society",
  },
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_2.jpg",
    text: "IT Parks",
  },
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_3.jpg",
    text: "Hotels",
  },
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_4.jpg",
    text: "Factories",
  },
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_5.jpg",
    text: "Malls",
  },
  {
    src: "https://www.omfiresafety.com/assets/img/weserve/image_6.jpg",
    text: "Others",
  },
];

const AnimatedImages = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-2xl font-bold">
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedImages;
