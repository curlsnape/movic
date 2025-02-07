import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
function Dropdown({ options, label, func }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || "Select an option");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    func(option);
  };
  return (
    <div className="relative inline-block w-64">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-xs justify-between w-full bg-zinc-800 rounded-sm px-4 py-2 text-white uppercase shadow-sm focus:outline-none "
      >
        <span>{selected}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-gray-700 text-xs cursor-pointer uppercase hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;