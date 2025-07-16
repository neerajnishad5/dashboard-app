import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DepartmentWiseAllocation({ data }) {
  const [activeTab, setActiveTab] = useState("Tasks");

  // Normalize input into percentage values for each tab
  const prepareChartData = (tabData) => {
    return tabData.map((dept) => {
      const { department, assigned = 0, overdue = 0, total = 0 } = dept;
      const percentAssigned = total > 0 ? (assigned / total) * 100 : 0;
      const percentOverdue = total > 0 ? (overdue / total) * 100 : 0;
      return {
        department,
        assigned: +percentAssigned.toFixed(2),
        overdue: +percentOverdue.toFixed(2),
      };
    });
  };

  const chartData = {
    Tasks: prepareChartData(data.Tasks || []),
    Issues: prepareChartData(data.Issues || []),
    Forms: prepareChartData(data.Forms || []),
  };

  return (
   <div className="border-[#eaebea] border rounded-2xl p-2 m-3 ml-4 min-h-11/12">
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-semibold mb-2 text-[14px] flex items-center gap-2">
          Department Wise Allocation
        </p>

        <div className="input-icons flex items-center justify-center gap-2">
          <img
            src="/assets/icons/three-dots.svg"
            alt="three-dots"
            className="h-[32px] w-[32px] object-contain"
          />
        </div>
      </div>
      <div className="flex space-x-4 mb-4 text-[12px] border-[#eaebea] border-b pb-1 mt-1 overflow-x-auto scrollbar-custom scroll-smooth">
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
            <span className="bg-[#eaf6ed] text-[12px] w-6 h-6 flex items-center justify-center rounded-full">
              {tab.length}
            </span>

            {activeTab === tab && <div className="custom-border" />}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={230} className="m-0">
        <BarChart data={chartData[activeTab]}>
          <XAxis dataKey="department" tick={false} axisLine={false} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            wrapperStyle={{
              color: "#656564 !important",
              fontSize: "12px",
            }}
            formatter={(value) => `${value.toFixed(1)}%`}
          />
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            wrapperStyle={{ paddingBottom: 10, fontSize: "12px" }}
            iconType="circle"
          />
          <Bar
            dataKey="overdue"
            name="Overdue Tasks"
            stackId="a"
            fill="#d8a441"
            radius={[4, 4, 0, 0]}
            barSize={40}
            activeBar={false}
          />
          <Bar
            dataKey="assigned"
            name="Assigned Tasks"
            stackId="a"
            fill="#008745"
            radius={[4, 4, 0, 0]}
            barSize={40}
            activeBar={false}
          />
          <text
            x="50%"
            y={280}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
            fill="#555"
          >
            Departments
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
