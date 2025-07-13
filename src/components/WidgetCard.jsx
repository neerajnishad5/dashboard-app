export default function WidgetCard({ logoPath, title, labels, values }) {
  const colors = [
    { bg: "bg-red-100", text: "text-red-600" },
    { bg: "bg-green-100", text: "text-green-600" },
    { bg: "bg-yellow-100", text: "text-yellow-600" },
    { bg: "bg-violet-100", text: "text-violet-600" },
  ];

  return (
    <div
      className="bg-white rounded-[12px] shadow-md border border-gray-200 w-full p-4 min-h-[6rem]
                 sm:min-h-[6rem] md:h-24"
      style={{
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
        <img
          src={logoPath}
          alt={`${title} logo`}
          className="h-6 w-6 shrink-0"
        />
        <h3 className="text-[14px] font-semibold">{title}</h3>
      </div>

      <div className="mt-2 flex gap-2 sm:gap-3">
        {labels.map((label, index) => {
          const color = colors[index % colors.length];
          return (
            <p
              key={label}
              className="font-normal text-[12px] leading-[100%] tracking-normal font-inter"
            >
              <span className="text-[#9f9f9e]">{label}</span>
              <span
                className={`${color.bg} ${color.text} rounded-full px-2 py-1 inline-block ml-1 whitespace-nowrap`}
              >
                {values[index]}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
