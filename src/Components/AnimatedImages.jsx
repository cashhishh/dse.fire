// src/AnimatedImages.jsx
import React from "react";
import UseIntersectionObserver from "./UseIntersectionObserver";
import "./AnimatedImages.css"; // Custom styles

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

const positions = [
  "top-left", // Image 1
  "top-center", // Image 2
  "top-right", // Image 3
  "bottom-left", // Image 4
  "bottom-center", // Image 5
  "bottom-right", // Image 6
];

const AnimatedImages = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-[100px] p-4 pr-20 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden transition-transform duration-1000 ease-in-out ${
            isIntersecting ? "transform translate-y-0" : `${positions[index]}`
          } img-container`}
        >
          <img src={image.src} alt={`Image ${index + 1}`} />
          <div className="img-text font-bold text-2xl">{image.text}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedImages;
