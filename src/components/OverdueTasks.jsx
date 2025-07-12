export default function OverdueTasks({ data }) {
  const allTasks = [
    ...(data.Tasks || []).filter((task) => task.status === "Overdue"),
    ...(data.Issues || []).filter((task) => task.status === "Overdue"),
    ...(data.Workflows || []).filter((task) => task.status === "Overdue"),
  ];

  return (
    <div className="border-[#eaebea] border rounded-2xl p-2 m-3 ml-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold mb-2 text-[14px] flex items-center gap-2">
          Overdue Tasks
          <span className="bg-[#f2f5f7] text-black text-[12px] w-6 h-6 flex items-center justify-center rounded-full">
            {allTasks.length}
          </span>
        </h3>
        <div className="input-icons flex items-center justify-center gap-2">
          <img
            src="../../public/assets/icons/hyperlink.svg"
            alt="hyperlink-icon"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="../../public/assets/icons/three-dots.svg"
            alt="three-dots"
            className="h-[32px] w-[32px] object-contain"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-y-auto max-h-[215px] pr-2 scrollbar-custom scroll-smooth">
          <table className="w-full text-sm border-collapse text-[12px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-b border-[#eaebea] text-left">
                  Task Name
                </th>
                <th className="p-2 border-b border-[#eaebea] text-center">
                  Assigned to
                </th>
                <th className="p-2 border-b border-[#eaebea] text-center">
                  Status
                </th>
                <th className="p-2 border-b border-[#eaebea] text-center">
                  Due date
                </th>
                <th className="p-2 border-b border-[#eaebea] text-center">
                  Reassign
                </th>
              </tr>
            </thead>
            <tbody>
              {allTasks.map((task, index) => (
                <tr key={index} className="border-b border-[#eaebea]">
                  <td className="p-2">{task.name}</td>
                  <td className="p-2 text-center">{task.assignedTo}</td>
                  <td className="p-2 text-center">
                    <span className="text-[#fe6d01] bg-[#fef0e4] border-[#fe6d01] font-[12px] p-1 rounded-lg">
                      {task.status}
                    </span>
                  </td>
                  <td className="p-2 text-center">{task.dueDate}</td>
                  <td className="p-2 text-center flex justify-center items-center hover:cursor-pointer">
                    <img src="../../public/assets/icons/reassign.svg" alt="reassign" />
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
