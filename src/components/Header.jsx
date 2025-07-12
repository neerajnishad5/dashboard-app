import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <div className="pet-pooja-logo">
              <div className="logo">
                <img src="/assets/icons/header-logo.svg" alt="Logo" className="h-8" />
              </div>
            </div>
            <div className="home-icon flex items-center ml-4 sm:ml-6">
              <img
                src="/assets/icons/home-black.svg"
                alt="Home Icon"
                className="w-5 h-5"
              />
              <p className="ml-2 text-sm hidden sm:inline">Home</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Elements */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
              <img src="/assets/icons/robot.svg" alt="Robot" className="w-6 h-6" />
              <img
                src="/assets/icons/Notification.svg"
                alt="Notifications"
                className="w-6 h-6"
              />
              <div className="relative inline-block">
                <input
                  type="date"
                  name="date-selector"
                  id="date-selector"
                  className="border px-2 py-1 rounded text-sm pr-8 appearance-none custom-date-input bg-[#f2f4f6] w-28 sm:w-32"
                  value={new Date().toISOString().split('T')[0]}
                />
                <img
                  src="/assets/icons/calendar-dotted.svg"
                  alt="Calendar"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
              </div>
              <div className="flex items-center border rounded px-2 py-1 space-x-2">
                <img
                  src="/assets/icons/building.svg"
                  alt="Building"
                  className="w-4 h-4"
                />
                <select
                  id="outlet-name"
                  name="outlet-name"
                  className="outline-none text-sm bg-transparent w-24 sm:w-32"
                >
                  <option value="default" disabled>
                    -- Select --
                  </option>
                  <option value="outlet-1">Outlet 1</option>
                  <option value="outlet-2">Outlet 2</option>
                </select>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <button className="bg-[#008745] px-3 py-1 text-white rounded-xl text-sm">
                + Create
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 focus:outline-none p-1"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white shadow-md">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#008745]' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#008745]' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Tasks
              </NavLink>
              <NavLink
                to="/issues"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#008745]' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Issues
              </NavLink>
              <NavLink
                to="/forms"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#008745]' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Forms
              </NavLink>
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-[#008745]' : 'text-gray-600 hover:text-blue-600'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Calendar
              </NavLink>
              <div className="px-3 py-2">
                <input
                  type="date"
                  name="date-selector-mobile"
                  id="date-selector-mobile"
                  className="border px-2 py-1 rounded text-sm pr-8 w-full bg-[#f2f4f6] mb-2"
                  value={new Date().toISOString().split('T')[0]}
                />
                <div className="flex items-center border rounded px-2 py-1 space-x-2 mb-2">
                  <img
                    src="/assets/icons/building.svg"
                    alt="Building"
                    className="w-4 h-4"
                  />
                  <select
                    id="outlet-name-mobile"
                    name="outlet-name-mobile"
                    className="outline-none text-sm bg-transparent w-full"
                  >
                    <option value="default" disabled>
                      -- Select --
                    </option>
                    <option value="outlet-1">Outlet 1</option>
                    <option value="outlet-2">Outlet 2</option>
                  </select>
                </div>
                <button className="bg-[#008745] w-full px-3 py-1 text-white rounded-xl text-sm">
                  + Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;