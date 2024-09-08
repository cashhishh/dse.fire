import React from "react";

function Mission() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-cover overflow-y-hidden bg-bottom bg-zinc-50 md:bg-[url('https://www.omfiresafety.com/assets/img/aboutus/1/back2.png')]">
      {/* First div with heading and list items */}
      <div className="flex-1 pl-15 md:ml-20 mt-10 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-20">OUR MISSION</h2>
        <ul className=" ml-4 list-none space-y-8 mb-20">
          <li className="flex items-center space-x-2">
            <img
              src="https://www.omfiresafety.com/assets/img/aboutus/1/icon_5.png"
              alt="Icon 1"
              className="w-30  h-auto"
            />
            <span className=" pl-6 text-zinc-600 text-wrap max-w-sm">
              To have a complete understanding of our clients and their needs
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              src="https://www.omfiresafety.com/assets/img/aboutus/1/icon_6.png"
              alt="Icon 2"
              className="w-33 h-auto"
            />
            <span className=" pl-6 text-zinc-600 text-wrap max-w-sm">
              To always achieve our targets by providing exceptional services
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              src="https://www.omfiresafety.com/assets/img/aboutus/1/icon_7.png"
              alt="Icon 3"
              className="w-30 h-auto"
            />
            <span className=" pl-6 text-zinc-600 text-wrap max-w-sm">
              To create an impact with big ideas and perfect execution
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              src="https://www.omfiresafety.com/assets/img/aboutus/1/icon_8.png"
              alt="Icon 3"
              className="w-30 h-auto"
            />
            <span className=" pl-6 text-zinc-600 text-wrap max-w-sm">
              To take every project as a challenge and overcome it
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <img
              src="https://www.omfiresafety.com/assets/img/aboutus/1/icon_9.png"
              alt="Icon 3"
              className="w-30 h-auto"
            />
            <span className=" pl-6 text-zinc-600 text-wrap max-w-sm">
              To enable our clients to keep pace with the trends and help them
              grow in a highly competitive market
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mission;
