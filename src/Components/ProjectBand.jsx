import React from "react";

function ProjectBand() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center px-4 gap-2 md:gap-20 pb-2 mt-2 font-semibold shadow-lg ">
      <span className="text-black hover:bg-red-400 p-2 transition-colors duration-300 rounded-lg hover:text-white text-sm md:text-base">
        EXECUTED PROJECTS
      </span>

      <span className="text-black hover:bg-red-400 p-2 transition-colors duration-300 rounded-lg hover:text-white text-sm md:text-base">
        ONGOING PROJECTS
      </span>
    </div>
  );
}

export default ProjectBand;
