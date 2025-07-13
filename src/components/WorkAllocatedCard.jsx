export default function WorkAllocatedCard({
  id,
  title,
  date,
  status,
  location,
  priority,
  time,
}) {
  return (
    <div className="bg-white border-2 border-gray-200 shadow-sm mb-4 w-full h-[7.5rem] p-3 rounded-lg">
      <div className="flex flex-col h-full justify-between">
        {/* First Line: ID & Comment */}
        <div className="flex justify-between id-and-comment mb-1">
          <div className="id text-[#969796] text-[12px] font-medium flex items-center">
            <img
              src="/assets/icons/chevron-up.svg"
              alt="chevron"
              className="mr-1"
            />
            ID #{id}
          </div>
          <div className="comment text-xs text-gray-500 flex items-center">
            <img
              src="/assets/icons/msg-circle.svg"
              alt="msg"
              className="mr-1"
            />
            15
          </div>
        </div>

        {/* Second Line: Title */}
        <div className="title text-[12px] font-semibold">{title}</div>

        {/* Third Line: Date/Time */}
        <div className="flex justify-between date-time-user text-gray-600 mb-1">
          <div className="date-time flex space-x-4 items-center">
            {/* Calendar + Date */}
            <div className="flex items-center space-x-1">
              <img
                src="/assets/icons/calendar-dotted-card.svg"
                alt="calendar-icon"
                className="w-4 h-4"
              />
              <span className="text-[12px]">{date}</span>
            </div>

            {/* Clock + Time */}
            <div className="flex items-center space-x-1">
              <img
                src="/assets/icons/clock.svg"
                alt="clock-icon"
                className="h-4"
              />
              <span className="text-[12px]">{time}</span>
            </div>
          </div>
          <p className="bg-[#008745] text-white w-[20px] h-[20px] flex items-center justify-center rounded-full text-xs">
            A
          </p>
        </div>

        {/* Fourth Line: Status with Icon & location */}
        <div className="flex justify-between status-location text-xs text-gray-600 mt-1">
          {/* Status with book icon */}
          <div className="flex items-center space-x-1 text-gray-500">
            <img
              src="/assets/icons/book.svg"
              alt="book-icon"
              className="w-6"
            />
            <span className="border-[#d8a441] border-2 bg-[#fff8e5] px-2 py-[2px] rounded-lg">
              {status}
            </span>
          </div>

          {/* location */}
          <div className="location flex justify-center items-center bg-[#f2f4f6] rounded-full p-1">
            <img
              src="/assets/icons/briefcase.svg"
              alt="briefcase"
              className="mx-1 w-4 h-4"
            />
            <div className="status">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
