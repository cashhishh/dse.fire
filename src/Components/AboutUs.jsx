import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto  bg-red-50 w-full ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center mt-20">
          About Us
        </h2>
        <p className="text-gray-600 md:text-md lg:text-lg mb-10 text-center max-w-7xl text-wrap mt-10">
          D S Engineers can draw almost any skill or technology a projects
          demands. We respond to the client’s need with integrated package of
          technical and management skills to arrive at optimum solution to real
          world problems.We aim to understand the priorities of the project, and
          build mutual trust by executing the work that meets the construction
          schedules and required quality. We always strive to offer our clients
          a reliable service of excellence, integrity and quality. We offers
          services in all facets of civil engineering from conceptualizations to
          commissioning & after sales service.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-base md:text-lg hover:bg-red-800 transition duration-300">
          Learn More
        </button>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/08/08/40/89/360_F_808408937_J2P3A8Vt5ysKL2YE4493PItC0C38iiT5.jpg"
            className="max-w-sm md:max-w-xl h-auto p-6  mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
