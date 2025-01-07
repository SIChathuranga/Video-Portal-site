import React from 'react';

const Navbar = ({ onToggleTheme, isDarkMode }) => {
  return (
    <nav className={`p-4 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Site Logo" className="h-10" />
          <h1 className="ml-2 text-2xl font-bold">Video Hub</h1>
        </div>
        <button
          onClick={onToggleTheme}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
