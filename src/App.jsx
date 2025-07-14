import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Calendar from './pages/Calendar';
import Tasks from './pages/Tasks';
import Forms from './pages/Forms';
import { useState, useEffect } from 'react';

export default function App() {
  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  const [isCollapsed, setIsCollapsed] = useState(() => {
    const isSidebarCollapsed = localStorage.getItem("sidebarCollapsed");
    return isSidebarCollapsed ? JSON.parse(isSidebarCollapsed) : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
         <main
            className={`flex-1 m-4 mt-16 transition-all duration-300 ${
              isCollapsed ? "md:ml-16" : "md:ml-60"
            }`}
          >
            <p className="font-inter font-semibold text-[18px] leading-[100%] tracking-[0%] mb-2 mt-6 ml-5">
              {getGreeting()} ! Neeraj
            </p>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/forms" element={<Forms />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
