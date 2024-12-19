import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function HomeDropdownRooms(){

  // Define the type of options as a string array
  const options: string[] = ["2 Rooms", "3 Rooms", "4 Rooms"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Rooms");
    
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    
  // Handle option selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
    
  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null);
    
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
    


  return (<>

    <motion.div ref={dropdownRef} className="relative flex flex-col w-full z-10 transition-all duration-1000 ease-in-out"
    
    
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
        },
      }}
    
    >
      {/* Dropdown trigger */}
      <div
        className="flex items-center justify-between border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em] cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
          {selectedOption}
        </p>
        <img
          src="/home-dropdown.svg"
          alt=""
          width={14}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute bottom-0 left-0 transform translate-y-full w-full border bg-white border-gray-300 rounded-b-md shadow-md">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-[0.9375rem] font-open-sans text-[rgba(16,34,29,0.60)] cursor-pointer hover:bg-gray-200 "
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
    
    
    
    
  </>)
}