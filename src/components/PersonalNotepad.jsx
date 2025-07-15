import { useState } from 'react';
import NotesList from './NotesList';

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
            src="/assets/icons/hyperlink.svg"
            alt="hyperlink-icon"
            className="h-9 w-[32px] object-contain"
          />

          <img
            src="/assets/icons/three-dots.svg"
            alt="three-dots"
            className="h-9 w-[32px] object-contain"
          />
        </div>
      </div>

      <NotesList
        tasks={tasks}
        expandedTasks={expandedTasks}
        handleNoteClick={handleNoteClick}
      />
    </div>
  );
}
