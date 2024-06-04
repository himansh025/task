import React, { useState } from 'react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  <>
      <button
        onClick={toggleDropdown}
        className="hover:text-blue-400 relative w-fit focus:outline-none"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2  bg-white border rounded shadow-md">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
