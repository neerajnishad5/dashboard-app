import { useState } from "react";
import WorkAllocatedCard from "./WorkAllocatedCard";

export default function WorkAllocatedTabs() {
  const [activeTab, setActiveTab] = useState("Tasks");

  const tabsData = {
    Tasks: [
      {
        id: 3789,
        title: "How to Manage Stock",
        date: "22 June, 2025",
        status: "Ongoing",
        location: "Inventory",
        priority: true,
        time: "11:00 am",
      },
      {
        id: 6047,
        title: "Tool for Managing Reservations",
        date: "22 June, 2025",
        status: "Ongoing",
        location: "Inventory",
        priority: false,
        time: "11:00 am",
      },
      {
        id: 4820,
        title: "Coordinating Employee Shifts",
        date: "12 October, 2025",
        status: "Ongoing",
        location: "Inventory",
        priority: false,
        time: "11:00 am",
      },
      {
        id: 7123,
        title: "Restocking Strategy Overview",
        date: "18 July, 2025",
        status: "Pending",
        location: "Inventory",
        priority: true,
        time: "9:30 am",
      },
      {
        id: 8345,
        title: "Vendor Contract Review",
        date: "5 August, 2025",
        status: "In Review",
        location: "Procurement",
        priority: false,
        time: "2:15 pm",
      },
      {
        id: 9261,
        title: "Inventory Audit Preparation",
        date: "29 September, 2025",
        status: "Scheduled",
        location: "Audit",
        priority: true,
        time: "4:00 pm",
      },
      {
        id: 8345,
        title: "Vendor Contract Review",
        date: "5 August, 2025",
        status: "In Review",
        location: "Procurement",
        priority: false,
        time: "2:15 pm",
      },
      {
        id: 9261,
        title: "Inventory Audit Preparation",
        date: "29 September, 2025",
        status: "Scheduled",
        location: "Audit",
        priority: true,
        time: "4:00 pm",
      },
    ],
    Issues: [
      {
        id: 3789,
        title: "Server Downtime",
        date: "3 April, 2025",
        status: "Open",
        location: "IT",
        priority: true,
        time: "11:00 am",
      },
      {
        id: 7182,
        title: "Bug in Payment System",
        date: "12 October, 2025",
        status: "In Progress",
        location: "Development",
        priority: true,
        time: "11:00 am",
      },
    ],
    Forms: [
      {
        id: 6047,
        title: "Employee Feedback Form",
        date: "22 June, 2025",
        status: "Submitted",
        location: "HR",
        priority: false,
        time: "11:00 am",
      },
      {
        id: 4820,
        title: "Expense Report",
        date: "3 April, 2025",
        status: "Draft",
        location: "Finance",
        priority: false,
        time: "11:00 am",
      },
    ],
  };

  return (
    <div className="mt-4 border-[#eaebea] border rounded-2xl p-2 m-4">
      <div className="flex justify-between items-center mb-2">
         <p className="text-lg font-semibold mb-2 text-[14px] flex items-center gap-2">
           Work Allocated
        </p>
        
        <select className="p-1 rounded-md text-sm bg-[#f6f8fb] h-[32px]">
          <option>Select Employee</option>
          <option>Employee 1</option>
          <option>Employee 2</option>
        </select>
      </div>

      <div className="flex space-x-4 mb-4 text-[12px] overflow-x-auto scrollbar-custom scroll-smooth">
        {["Tasks", "Issues", "Forms"].map((tab) => (
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

      <div className="overflow-y-auto max-h-44 scrollbar-custom scroll-smooth">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
          {tabsData[activeTab].map((item, index) => (
            <WorkAllocatedCard
              key={index}
              id={item.id}
              title={item.title}
              date={item.date}
              status={item.status}
              location={item.location}
              priority={item.priority}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
