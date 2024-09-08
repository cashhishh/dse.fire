import React, { useState, useEffect } from "react";

const carouselItems = [
  {
    imgSrc:
      "https://www.bluestarindia.com/media/177961/fire-fighting-system.jpg",
    text: "Offers services in all facets of civil engineering",
  },
  {
    imgSrc:
      "https://www.ashfieldsolutions.com/wp-content/uploads/2020/12/8690FCD7-BAA1-469B-8605-BE417DDB9AD4-e1611666670621.jpeg",
    text: "An organization with sincere and responsible people",
  },
  {
    imgSrc:
      "https://t3.ftcdn.net/jpg/05/06/00/02/360_F_506000269_OiSKvLSAoPmRs6gMCex0yWsieIfSTBjH.jpg",
    text: "Aim to understand the priorities of the project",
  },
 
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden z-10 carousal-inner">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.imgSrc})` }}
        >
          <div
            className={`flex items-center justify-center w-full h-full transition-transform duration-1000 ease-in-out ${
              currentIndex === index ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <p className="text-white text-2xl font-bold">{item.text}</p>
            </div>
          </div>
        </div>
      ))}

      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-2 rounded-full "
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full "
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
