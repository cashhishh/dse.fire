import React from "react";
import MainNav from "../Components/MainNav";
import ServicesAnimatedDiv from "../Components/ServicesAnimatedDiv";
import ServiceBand from "../Components/ServiceBand";

function PlumbingWork() {
  const images = [
    // Replace with your image URLs
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_1.png",
      text: "Sanitary Fixtures",
    },

    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_2.png",
      text: "Soil, Waste & Vent Pipes and Fittings",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_3.png",
      text: "Rain Water Piping",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_4.png",
      text: "Internal Water Supply",
    },

    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_5.png",
      text: "External Water Supply",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_6.png",
      text: "Garden Irrigation",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_7.png",
      text: "External Sewerage",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_8.png",
      text: "External Storm-water Drainage",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_9.png",
      text: "Water Supply & Drainage Pumps",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_2/icon_10.png",
      text: "Water Treatment Plant (STP/WTP/ETP)",
    },
  ];
  return (
    <div>
      <MainNav />
      <ServicesAnimatedDiv />
      <ServiceBand />

      <div className="flex lg:flex-row  flex-col items-center justify-center px-4 py-8 mx-auto  bg-red-50 w-full ">
        <div className="flex flex-col items-center">
          {" "}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center mt-20">
            Sanitary & Plumbing Works
          </h2>
          <p className="text-gray-600 md:text-md lg:text-lg mb-10 text-center max-w-3xl pr-10 text-wrap mt-10">
            Safety from fire is one of the biggest concerns for any developer or
            Every housing or business project comes with its own water treatment
            requirements. Water is an essential and valuable commodity and must
            be handled properly. We understand that and provide a complete
            bouquet of sanitary and plumbing services for all types of projects.
            From ensuring efficient water supply to making water harvesting
            possible, we do our best to empower a project to make the most of
            its water reservoir while caring for the environment.
          </p>
        </div>
        <div>
          <img
            src="https://www.omfiresafety.com/assets/img/services/services_2/image.png"
            className="max-w-sm md:max-w-xl h-auto p-6  mt-6"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8">
        {/* Heading Section */}
        <div className="md:w-1/4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-red-700 mb-6">
            OUR SERVICES INCLUDE :
          </h1>
        </div>

        {/* Image Grid Section */}
        <div className=" w-[50vh] md:w-full rounded-[50%] ml-16 gap-x-10  grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="md:w-full  flex items-center justify-center bg-gray-200">
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 p-2">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlumbingWork;
