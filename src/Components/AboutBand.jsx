import React from "react";
import { NavLink } from "react-router-dom";

function AboutBand() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center px-4 gap-2 md:gap-20 pb-2 mt-2 font-semibold shadow-lg">
      <NavLink
        to="/company-profile" // Path for Company Profile
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        COMPANY PROFILE
      </NavLink>

      <NavLink
        to="/mission" // Path for Our Mission
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        OUR MISSION
      </NavLink>

      <NavLink
        to="/our-team" // Path for Our Team
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        OUR TEAM
      </NavLink>

      <NavLink
        to="/certifications" // Path for Certifications
        className={({ isActive }) =>
          `text-black p-2 transition-colors duration-300 rounded-lg text-sm md:text-base ${
            isActive
              ? "bg-red-400 text-white"
              : "hover:bg-red-400 hover:text-white"
          }`
        }
      >
        CERTIFICATIONS
      </NavLink>
    </div>
  );
}

export default AboutBand;
