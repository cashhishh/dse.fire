import React from "react";

function CompanyProfile() {
  return (
    <div>
      <div className="flex lg:flex-row  flex-col items-center justify-center px-4 py-8 mx-auto  bg-red-50 w-full ">
        <div className="flex flex-col items-center">
          {" "}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center mt-20">
            Company Profile
          </h2>
          <p className="text-gray-600 md:text-md lg:text-lg mb-10 text-center max-w-7xl text-wrap mt-10">
            D S Engineers offers services in all facets of civil engineering
            from conceptualizations to commissioning & after sales service. D S
            Engineers. is an organization with sincere and responsible people
            who are committed for successful completion of assignments to the
            satisfaction of clients. D S Engineers is aim to understand the
            priorities of the project, and build mutual trust by executing the
            work that meets the construction schedules and required quality. We
            always strive to offer our clients a reliable service of excellence,
            integrity and quality. EXPERIENCE D S Engineers has been varied
            project, range of which includes industrial, residential,
            commercial, interior works and communication facilities. The range
            of projects completed or in hand aptly demonstrates that we are able
            to achieve the flexibility and proficiency to meet any challenge a
            project puts forth.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-base md:text-lg hover:bg-red-800 transition duration-300">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://5.imimg.com/data5/WY/LF/MY-6040557/plumbing-and-fire-fighting-systems-500x500.jpg"
            className="max-w-sm md:max-w-xl h-auto p-6  mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
