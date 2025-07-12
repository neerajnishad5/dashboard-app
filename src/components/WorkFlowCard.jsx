export default function WorkFlowCard({ data }) {
  return (
    <div className="rounded-md p-4 border border-[#eaebea] hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-[12px] font-semibold text-gray-800">{data.title}</p>
        <img
          src="../../public/assets/icons/eye.svg"
          alt="eye"
          className="w-5 h-5"
        />
      </div>

      {/* Stats + Badge */}
      <div className="flex justify-between items-center">
        <div className="response-tasks flex gap-4 text-[12px] text-gray-600">
          <p>
            Responses <span className="text-black">{data.responseCount}</span>
          </p>
          <p>
            Tasks <span className="text-black">{data.taskCount}</span>
          </p>
        </div>
        <span className="bg-[#008745] text-white w-6 h-6 flex items-center justify-center rounded-full text-[12px] font-medium">
          {data.assignedTo?.charAt(0) || "?"}
        </span>
      </div>
    </div>
  );
}
