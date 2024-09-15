import React from "react";
import { NavLink } from "react-router-dom";

function ServiceBand() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center px-4 gap-2 md:gap-20 pb-2 mt-2 font-semibold shadow-lg">
      <NavLink
        to="/fire-fighting"
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        FIRE FIGHTING
      </NavLink>

      <NavLink
        to="/sanitoryWork"
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        SANITORY AND PLUMBING WORKS
      </NavLink>
    </div>
  );
}

export default ServiceBand;
