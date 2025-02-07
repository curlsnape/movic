import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dropdown = ({ title, func, options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    func(value);
    setIsOpen(false);
  };

  return (
    <div className="w-64 flex flex-col gap-2 font-[figtree]">
      <div className="relative w-full">
        <div 
          className="w-full px-4 py-2 bg-zinc-800 outline-none rounded capitalize font-semibold text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            {isOpen ? (
              <ChevronUp size={20} className="text-gray-500" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </div>
        </div>

        {isOpen && (
          <ul className="absolute w-full capitalize mt-1 bg-zinc-800 rounded-md max-h-60 overflow-auto text-white">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-zinc-700"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
