import React from "react";
import MainNav from "../Components/MainNav";
import ServicesAnimatedDiv from "../Components/ServicesAnimatedDiv";
import ServiceBand from "../Components/ServiceBand";

function Firefighting() {
  const images = [
    // Replace with your image URLs
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_1.png",
      text: "Fire Pumps & Ancillary Works",
    },

    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_3.png",
      text: "Automatic Water Based Sprinkler System",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_4.png",
      text: "Automatic Convention & Intelligent Fire Alarm System",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_5.png",
      text: "Gas Flooding System",
    },

    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_7.png",
      text: "Wet Riser Systems",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_8.png",
      text: "High Velocity Water Spray Systems",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_9.png",
      text: "Medium Velocity Water Spray Systems",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_11.png",
      text: "Water Curtain Systems",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_12.png",
      text: "FM 200 Gas Suppression Systems",
    },
    {
      src: "https://www.omfiresafety.com/assets/img/services/services_1/icon_13.png",
      text: "Passive Fire Systems",
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
            Fire Fighting
          </h2>
          <p className="text-gray-600 md:text-md lg:text-lg mb-10 text-center max-w-3xl pr-10 text-wrap mt-10">
            Safety from fire is one of the biggest concerns for any developer or
            promoter. Not only it poses a direct threat on hundreds of lives but
            can also damage the property beyond repairs. At Om Fire Safety, we
            understand that very well. That’s why we act as a one-stop-shop for
            all fire safety related services. With us, you can expect everything
            that is needed for complete safety of your project and to secure
            lives.
          </p>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/1bed22_fc894469e1cf45abadd8f259c7dceb72~mv2.jpg/v1/fill/w_613,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bed22_fc894469e1cf45abadd8f259c7dceb72~mv2.jpg"
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

export default Firefighting;
