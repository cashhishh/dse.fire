import React, { useEffect, useRef, useState } from "react";

const AnimatedTextDiv = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full h-[50vh] bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
        isVisible ? "bg-red-500" : ""
      }`}
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20230705/pngtree-3d-rendering-of-fire-extinguisher-against-flames-image_3811146.jpg')",
      }}
    >
      <div
        className={`absolute inset-0 ${
          isVisible ? "bg-red-500 opacity-40" : "bg-transparent"
        } transition-all duration-1000`}
      />

      <div
        ref={textRef}
        className={`absolute top-1/2 left-1/4 transform -translate-x-1/2 transition-transform duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
        }`}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold ">ABOUT US</h1>
      </div>
    </div>
  );
};

export default AnimatedTextDiv;
