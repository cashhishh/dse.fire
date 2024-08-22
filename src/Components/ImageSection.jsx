import React from "react";

const ImageSection = () => {
  return (
    <div className="relative overflow-hidden h-[90vh] ">
      {/* Image */}
      <img
        src="https://img.freepik.com/premium-photo/silhouette-engineer-worker-checking-project-construction-site-sunset-generative-ai_61243-6507.jpg"
        alt="Background"
        className="w-full h-full object-cover animate-slide-in-image"
      />

      {/* Overlay text div */}
      <div className="absolute inset-0 flex md:items-start md:justify-start p-4 md:ml-[40%] mt-20 left-50% ">
        <div className="transition-transform duration-1000 transform -translate-x-full animate-slide-in-text ml-[50%] md:ml-0">
          <span className="text-3xl font-bold text-red-800 bg-red-50 p-6 rounded-e-full">
            WHY US?
          </span>

          {/* Grid Layout */}
          <div className="md:grid grid-cols-1  gap-4 w-full max-w-lg mt-10 flex flex-col items-center">
            <div className="bg-gray-50 p-6 rounded-lg rounded-e-full hover:bg-red-900 hover:first-line:text-red-200  ">
              <h3 className="text-xl  font-semibold  text-red-900">
                100% Inhouse Experts
              </h3>
            </div>
            <div className=" bg-gray-50 p-6 rounded-lg  rounded-e-full hover:bg-red-900 hover:first-line:text-red-200  ">
              <h3 className="text-xl font-semibold text-red-900">
                80% repeated clients
              </h3>
            </div>
            <div className=" bg-gray-50 p-6 rounded-lg  rounded-e-full hover:bg-red-900 hover:first-line:text-red-200  ">
              <h3 className="text-xl font-semibold text-red-900">
                Trained Workforceprojects and ongoing projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
