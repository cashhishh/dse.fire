import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/008/945/188/non_2x/cartoon-character-of-engineer-man-holding-plan-paper-vector.jpg",
    title: "Public health Engineering ",
    description:
      "Plumbing and sanitary works are the heart of any property whether commercial or institutional, a bad system is always irreparable and causes immense frustration to the owner and damage to the property",
  },
  {
    imgSrc:
      "https://climatesmartwater.org/wp-content/themes/knowlege_platform_wp/images/opp_circle/Water_Abstraction.png",
    title: "Water Distribution.              ",
    description:
      "We had designed and installed a pressurized system (hydro pneumatic System) in the mid 90’s and since the have designed and installed many system. The entire operation is controlled and monitored through BMS.",
  },

  {
    imgSrc:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/393382177/DR/LR/JO/192096718/fire-extinguisher-refilling-service-500x500.jpg",
    title: "Fire Extinguisher Refilling",
    description:
      "Wet hydrant system is an automatic system under constant pressure, operation of Any hydrant valve would result in the automatic starting of the pumps.Dry hydrant system is a manual system.Designed and erect a well-balanced system",
  },
];

const OurServices = () => {
  return (
    <div className="py-12  w-full">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mx-auto max-w-7xl px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg mb-8 md:mb-0"
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full md:h-60 object-cover h-[50%] shadow-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center text-black underline">
              {service.title}
            </h3>
            <div className="bg-red-50 text-center pb-4">
              <p className=" text-base text-center text-gray-900 p-2 mt-4 rounded-md  ">
                {service.description}
              </p>
              <Link
                to="/services"
                className="bg-red-600 text-white  p-1 mt-2 rounded-md  hover:bg-red-700"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
