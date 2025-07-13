import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "Icon.svg" },
  { to: "/tasks", label: "Tasks", icon: "task.svg" },
  { to: "/issues", label: "Issues", icon: "alert-circle.svg" },
  { to: "/forms", label: "Forms", icon: "form.svg" },
  { to: "/calendar", label: "Calendar", icon: "calendar-dotted.svg" },
  {
    to: "/browse-template",
    label: "Browser Template",
    icon: "browse-template.svg",
  },
  {
    to: "/template-library",
    label: "Template Library",
    icon: "template-lib.svg",
  },
  {
    to: "/user-management",
    label: "User Management",
    icon: "user-management.svg",
  },
  { to: "/reports", label: "Reports", icon: "reports.svg" },
  { to: "/settings", label: "Settings", icon: "settings.svg" },
  { to: "/logout", label: "Logout", icon: "logout.svg" },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [localIsCollapsed, setLocalIsCollapsed] = useState(isCollapsed);

  useEffect(() => {
    setLocalIsCollapsed(isCollapsed);
  }, [isCollapsed]);

  const toggleSidebar = () => {
    setLocalIsCollapsed(!localIsCollapsed);
    if (setIsCollapsed) setIsCollapsed(!localIsCollapsed);
  };

  return (
   <div
  className={`hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] p-4 transition-all duration-300 ease-in-out ${
    localIsCollapsed ? "w-16" : "w-60"
  } flex flex-col`}
>

      <nav className="space-y-2 mt-8">
        {navItems.map(({ to, label, icon }, index) => (
          <div className="relative" key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-1 rounded text-[12px] ${
                  isActive
                    ? "bg-[#eaf6ed] text-[#008745]"
                    : "text-black hover:bg-gray-200"
                } ${localIsCollapsed ? "justify-center" : ""}`
              }
            >
              <img
                src={`/assets/icons/${icon}`}
                alt={`${label} Icon`}
                className="w-5 h-5"
              />
              {!localIsCollapsed && label}
            </NavLink>

            {/* Show toggle button only for first item */}
            {index === 0 && (
              <button
                onClick={toggleSidebar}
                className="ml-2 w-6 h-6 flex items-center justify-center rounded-full 
            bg-[#018744] text-white 
            hover:bg-white hover:text-[#018744]
            border border-[#018744]
            transition-colors absolute top-1/2 -right-4 transform -translate-y-1/2"
              >
                {localIsCollapsed ? ">" : "<"}
              </button>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-[45%]">
        <div className="chat flex flex-col justify-start p-2 rounded shadow-sm mb-2">
          <p className="text-[12px]">
            <span className="flex items-center gap-2">
              <img
                src="/assets/icons/chat.svg"
                alt="chat.svg"
                className="w-4 h-4"
              />
              {!localIsCollapsed && "Chat"}
            </span>
          </p>
        </div>

        <div className="bottom-sidebar flex items-center gap-3 p-2 bg-[#f6f8fb] rounded-md">
          <div className="image">
            <p className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium">
              A
            </p>
          </div>
          {!localIsCollapsed && (
            <div className="user flex flex-col leading-tight text-sm">
              <p className="font-semibold text-gray-800 text-[12px]">Neeraj</p>
              <p className="text-gray-500 text-[12px]">Manager</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
