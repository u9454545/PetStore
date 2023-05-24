import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="absolute hidden mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Option 1
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Option 2
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Option 3
      </a>
    </div>
  );
};

export default DropdownMenu;