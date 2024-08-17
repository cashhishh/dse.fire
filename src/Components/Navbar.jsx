import React from "react";

function Navbar() {
  return (
    <div>
      <nav className=" p-4  fixed top-0 left-0 w-full flex bg-white justify-between items-center shadow-lg">
        <div className="text-BLACK text-lg font-bold flex flex-row items-center gap-2 mr-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfwYgZ_vQ7uPHCjSZWTSHdM0UIMDPJDgZ6BiVjj3Tf2KQuBNGrCTFX2XhXegm8GWEYUo&usqp=CAU"
            className="h-14 p-2 ml-2"
          />
          <span className="text-black text-lg lg:text-xl font-sans">
            DS Engineers
          </span>
        </div>

        <div className="space-x-2 lg:space-x-5  max-x-50 mr-4 font-sans text-md flex flex-row text-sm md:text-md ">
          <a
            href="#home"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2 "
          >
            HOME
          </a>
          <a
            href="#home"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
          >
            ABOUT US
          </a>
          <a
            href="#about"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
          >
            PROJECTS
          </a>
          <a
            href="#services"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
          >
            SERVICES
          </a>
          <a
            href="#home"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
          >
            INDUSTRY WE SERVE
          </a>
          <a
            href="#contact"
            className="text-black font-semibold hover:text-red-700 hover:bg-gray-100 rounded-lg p-2"
          >
            CONTACT US
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
