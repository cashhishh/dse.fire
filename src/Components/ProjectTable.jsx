import React from "react";

// Example data array
const projectData = [
  {
    serialNumber: "1",
    description: "Fire Hydrant System Wet Riser System ",
    projectNameAndLocation: "Gail Sahkari Awas Samiti Ltd. ",
    architectOrConsultant: "Client",
    valueInLacs: "26.00",
    status: "Completed 2016",
  },
  {
    serialNumber: "2",
    description: "Fire Hydrant, Yard Hydrant& Alarm System",
    projectNameAndLocation: "Creative Huts CGHS Ltd.  Faridabad ",
    architectOrConsultant: "Client",
    valueInLacs: "24.00",
    status: "Completed 2016",
  },
  {
    serialNumber: "3",
    description: "Fire Hydrant, Yard Hyd & Alarm System ",
    projectNameAndLocation: "Bigway Marketing P. Ltd.,Sec -60,Noida ",
    architectOrConsultant: "Client ",
    valueInLacs: "44.50",
    status: "Completed 2017",
  },
  {
    serialNumber: "4",
    description: "Fire Hydrant, Yard Hydrant & Alarm System ",
    projectNameAndLocation: "Creative Huts C.G.H.S. Ltd. 21 C, Faridabad ",
    architectOrConsultant: "Client",
    valueInLacs: "54.00",
    status: "Completed 2017",
  },
  {
    serialNumber: "5",
    description: "Fire Hydrant, Yard Hydrant& Alarm System ",
    projectNameAndLocation: "Kendriya Mantralya Emp.Wel.H.Org. Sec-56, Gurgaon",
    architectOrConsultant: "Client",
    valueInLacs: "32.95",
    status: "Completed 2017",
  },
  {
    serialNumber: 6,
    description:
      "Fire Hydrant, Ext. Yard Hyd., Aut. Sprinkler & Alarm System. ",
    projectNameAndLocation: "Rishabh Corporate Tower ",
    architectOrConsultant: "Client",
    valueInLacs: "32.50",
    status: "Completed 2018",
  },
  {
    serialNumber: "7",
    description: "Fire Hydrant, Automatic Sprinkler & Fire Alarm System ",
    projectNameAndLocation: "Nipun Corporate Tower, Kar Kar Dooma,Delhi ",
    architectOrConsultant: "Client",
    valueInLacs: "12.50",
    status: "Completed 2018",
  },
  {
    serialNumber: "8",
    description: "Fire Hydrant Automatic Sprinkler & Fire Alarm System  ",
    projectNameAndLocation: "Sachdeva Tower Kar Kar Dooma Delhi ",
    architectOrConsultant: "Client",
    valueInLacs: "22.50",
    status: "Completed 2018",
  },
  {
    serialNumber: "9",
    description: "Fire Hydrant, Ext. Yard Hydrant, Sprinkler & Alarm System",
    projectNameAndLocation: "Parmesh Tower I, II & III, Kar Kar Dooma Delh",
    architectOrConsultant: "Client",
    valueInLacs: "42.50",
    status: "Completed 2019",
  },
  {
    serialNumber: "10",
    description:
      "Fire Hydrant, Ext. Yard Hydrant, Automatic, Sprinklers & Fire Alarm ",
    projectNameAndLocation: "V-4 Tower Kar Kar Dooma, Delhi ",
    architectOrConsultant: "Architect/Consultant 1",
    valueInLacs: "22.50",
    status: "Completed 2019",
  },

  // Add more project objects here
  // ...
];

const ProjectTable = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Heading and Paragraph */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          EXECUTED PROJECTS
        </h2>

        <p className="text-md md:text-lg  max-w-5xl text-center text-zinc-500 mb-10">
          “Excellence in Performance” has resulted in our association with some
          of the leading Business Homes in the world like IHHR Group of Hotel,
          Fortis, Voltas Group, Punj Lloyd Group, DPS School, IT Engg .Pvt .Ltd.
          It may be detailed Engineering, Job Implementation or both, it is
          happening at D S Engineers Day-in and day-out since 2015.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto ">
        <div className="max-w-5xl">
          <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.NO.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DESCRIPTION
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PROJECT NAME AND LOCATION
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ARCHITECT/CONSULTANT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VALUE(IN LACS)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y  divide-gray-200">
              {projectData.map((project) => (
                <tr key={project.serialNumber}>
                  <td className="px-2 py-4 whitespace-nowrap">
                    {project.serialNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.projectNameAndLocation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.architectOrConsultant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.valueInLacs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
