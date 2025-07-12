import { useState } from "react";

export default function PersonalNotepad({ tasks }) {
  const [expandedTasks, setExpandedTasks] = useState([]);

  const handleNoteClick = (index) => {
    setExpandedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="border-[#eaebea] border rounded-2xl p-2 m-3 ml-4 min-h-11/12">
      <div className="flex justify-between items-center mb-2 border-b border-[#eaebea]">
        <h3 className="text-lg font-semibold mb-2 text-[14px] flex items-center gap-2">
          Personal Notepad
        </h3>
        <div className="input-icons flex items-center justify-center gap-2">
          <img
            src="../../public/assets/icons/hyperlink.svg"
            alt="hyperlink-icon"
            className="h-9 w-[32px] object-contain"
          />

          <img
            src="../../public/assets/icons/three-dots.svg"
            alt="three-dots"
            className="h-9 w-[32px] object-contain"
          />
        </div>
      </div>

      <div className="overflow-y-scroll h-[17.3rem] my-4 mx-2 scrollbar-custom scroll-smooth">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`rounded-lg p-1 mr-5 hover:bg-[#f6f8fb]  ${
              expandedTasks.includes(index) ? "bg-[#f6f9fa]" : ""
            } cursor-pointer`}
          >
            <div
              className="cursor-pointer"
              onClick={() => handleNoteClick(index)}
            >
              <div className="flex items-center">
                <span className="text-green-600 mr-2 w-4 h-4 flex items-center justify-center border border-green-600 rounded-full">
                  {expandedTasks.includes(index) && "✓"}
                </span>
                <p
                  className={`text-sm font-medium p-1 ${
                    expandedTasks.includes(index) ? "bg-[#fff] rounded-xl" : ""
                  }`}
                >
                  {task.title}
                </p>
              </div>
              <p
                className={`text-xs text-gray-600 p-2 ml-5 ${
                  expandedTasks.includes(index)
                    ? "bg-[#fff] rounded-xl p-4 mt-2"
                    : ""
                }`}
              >
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
