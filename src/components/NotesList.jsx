export default function NotesList({ tasks, expandedTasks, handleNoteClick }) {
  return (
    <div className="overflow-y-scroll h-[17.3rem] my-4 mx-2 scrollbar-custom scroll-smooth">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`rounded-lg p-1 mr-5 hover:bg-[#f6f8fb] ${
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
              className={`text-xs text-gray-600 p-2 ml-5 ${expandedTasks.includes(index) ? "bg-[#fff] rounded-xl p-4 mt-2" : "" }`} >
              {task.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
