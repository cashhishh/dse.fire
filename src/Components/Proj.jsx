import React from "react";
import Card from "./Card";

import { useState } from "react";

function Proj() {
  const [cards, setCards] = useState([
    {
      id: 1,
      imgSrc:
        "https://newprojects.99acres.com/projects/ska_realtech/ska_metro_ville/images/cxtmdc3_1690976083_437274304_med.jpg",
      title: "Eeta-|| Greater Noida",
      description:
        "Fire Hydrant System & Sprinkler system. Consultant(Misgun Group)",
    },
    {
      id: 2,
      imgSrc:
        "https://cf-cdn.cityinfoservices.com/public/uploads/projectBanner/large/Godrej%20GCR%20-%20Gurgaon__1869660668.jpg",
      title: "Godrej & Boyce Gurgaon sec-42",
      description: "Fire Hydrant System & Sprinkler system. ",
    },
    {
      id: 3,
      imgSrc:
        "https://media.biltrax.com/wp-content/uploads/2023/04/Monthly-Summary-Cover-47.png",
      title: "VIVO plant Greater Noida sec-24",
      description: "Fire Hydrant,Ext. Yard Hydrant,Automatic,Sprinklers",
    },
  ]);
  return (
    <div>
      {" "}
      <div className="p-20  w-full bg-red-50 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <p className="text-gray-600 mb-10 text-md md:text-lg  text-center">
          “Excellence in Performance” has resulted in our association with some
          of the leading Business Homes in the world like, IHHR Group of Hotel,
          Fortis, Voltas Group, Punj Lloyd Group, DPS School, IT Engg .Pvt .Ltd,
          It may be detailed Engineering, Job Implementation or both, it is
          happening at D S Engineers Day-in and day-out since 2015.
        </p>
        <div className="flex justify-center gap-4 mb-8 mt-10 flex-col md:flex-row  ">
          <button className="bg-red-600 text-white py-2  mx-10 md:mx-0  md:px-20 rounded hover:bg-red-500">
            PROJECTS COMPLETED
          </button>
          <button className="bg-white text-black  border-black border py-2 mx-10 md:mx-0  px-6 md:px-20 rounded hover:bg-black hover:first-line:text-white">
            ONGOING PROJECTS
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mb-8 mt-10 flex-col md:flex-row  ">
          <button className="bg-white text-red-500 text-lg border border-red-600 py-2    md:px-20 rounded hover:bg-red-500 hover:first-line:text-white">
            Check All Completed Projects→
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proj;
