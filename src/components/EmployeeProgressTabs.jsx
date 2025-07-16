import { useState } from "react";

function EmployeeProgressTabs({ data }) {
  const [activeTab, setActiveTab] = useState("Tasks");

  const tabsData = {
    Tasks: data.Tasks || [],
    Issues: data.Issues || [],
    Workflows: data.Workflows || [],
  };

  return (
    <div className="mt-4 border-[#eaebea] border rounded-2xl p-2 m-4">
      <div className="flex justify-between items-center mb-2 overflow-x-auto scrollbar-custom scroll-smooth">
        <p className="text-lg font-semibold mx-2 my-1 text-[14px]">
          Employee wise progress
        </p>
        <div className="input-icons flex items-center justify-center gap-2">
          <select className="p-1 rounded-md text-sm bg-[#f6f8fb] h-[32px]">
            <option>Select Employee</option>
            <option>Employee 1</option>
            <option>Employee 2</option>
          </select>

          <img
            src="/assets/icons/hyperlink.svg"
            alt="hyperlink-icon"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/assets/icons/three-dots.svg"
            alt="three-dots"
            className="h-[32px] w-[32px] object-contain"
          />
        </div>
      </div>
      <div className="flex space-x-4 text-[12px] overflow-x-auto scrollbar-custom scroll-smooth">
        {["Tasks", "Issues", "Workflows"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-3 py-1 rounded flex items-center gap-2 cursor-pointer ${
              activeTab === tab
                ? "bg-white text-[#008745]"
                : "text-black hover:bg-[#f2f4f6]"
            }`}
          >
            <span>{tab}</span>
            <span className="bg-[#eaf6ed] text-sm w-6 h-6 flex items-center justify-center rounded-full">
              {tabsData[tab].length}
            </span>

            {/* This div only shows on active tab */}
            {activeTab === tab && <div className="custom-border" />}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-y-auto max-h-[173px] pr-2 scrollbar-custom scroll-smooth">
            <table className="w-full text-sm border-collapse text-[12px]">
            <thead>
              <tr className="bg-gray-100 text-[12px] text-[#212121]">
                <th className="p-2 text-left w-1/6">Name</th>
                <th className="p-2 text-left w-1/6">Department</th>
                <th className="p-2 text-center w-1/6">Assigned</th>
                <th className="p-2 text-center w-1/6">Ongoing</th>
                <th className="p-2 text-center w-1/6">Overdue</th>
                <th className="p-2 text-center w-1/6">Completed</th>
              </tr>
            </thead>
            <tbody>
              {tabsData[activeTab].map((employee, index) => (
                <tr
                  key={index}
                  className="border-b border-[#eaebea] text-[12px]"
                >
                  <td className="p-2 w-1/6">{employee.name}</td>
                  <td className="p-2 w-1/6">{employee.department}</td>
                  <td className="p-2 text-center w-1/6">{employee.assigned}</td>
                  <td className="p-2 text-center w-1/6">{employee.ongoing}</td>
                  <td className="p-2 text-center w-1/6">{employee.overdue}</td>
                  <td className="p-2 text-center w-1/6">
                    {employee.completed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProgressTabs;
