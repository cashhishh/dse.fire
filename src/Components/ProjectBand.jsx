import React from "react";
import { NavLink } from "react-router-dom";

function ProjectBand() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center px-4 gap-2 md:gap-20 pb-2 mt-2 font-semibold shadow-lg">
      <NavLink
        to="/ExecutedProject" // Path for Executed Projects
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        EXECUTED PROJECTS
      </NavLink>

      <NavLink
        to="/OngoingProject" // Path for Ongoing Projects
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        ONGOING PROJECTS
      </NavLink>
    </div>
  );
}

export default ProjectBand;
