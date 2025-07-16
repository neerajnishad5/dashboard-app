import WorkFlowCard from "./WorkFlowCard";

export default function Workflows({ data }) {
  return (
    <div className="border-[#eaebea] border rounded-2xl p-3 m-3 mr-4">
      <div className="header flex justify-between items-center border-b border-[#eaebea]">
        <p className="text-[14px] font-semibold  pb-4">Workflows</p>
        <div className="images flex justify-center ">
          <img src="/assets/icons/hyperlink.svg" alt="hyper-link" />
          <img src="/assets/icons/three-dots.svg" alt="three-dots" />
        </div>
      </div>

      {/* Grid layout for responsive cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 overflow-y-scroll max-h-48 scrollbar-custom scroll-smooth">
        {data?.map((item, index) => (
          <WorkFlowCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
