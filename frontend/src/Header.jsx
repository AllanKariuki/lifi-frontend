import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-50 p-4 flex items-center justify-between shadow-sm">
      {/* Left Side - Logo and Search */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-1 rounded-full">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
            {/* Placeholder for logo icon */}
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.5 9.5A6.5 6.5 0 119 16a6.5 6.5 0 01-6.5-6.5z" />
              <path d="M8.5 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" />
            </svg>
          </div>
          <span className="font-semibold">AGRONEST</span>
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white rounded-full px-4 py-2 pl-10 shadow-inner text-gray-700 focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 105.292 14.708l4.292 4.292 1.416-1.416-4.292-4.292A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side - User Info and Icons */}
      <div className="flex items-center space-x-6">
        {/* User Info */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-user-avatar.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold">Jerome Bell</div>
            <div className="text-xs text-gray-500">Agronomist</div>
          </div>
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.993.883L11 4v8l4.293-4.293a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-6 6a1 1 0 01-1.32.083l-.094-.083-6-6a1 1 0 011.32-1.497l.094.083L9 12.585V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        
        {/* Notification and Settings Icons */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 00-7 7v5l-1 1v1h16v-1l-1-1V9a7 7 0 00-7-7zM5 18h14v2H5v-2z" />
            </svg>
          </button>
          
          {/* Settings Icon */}
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a1 1 0 01.993.883L13 3v1.257a5.496 5.496 0 013.732 2.46l.883-.445a1 1 0 01.97 1.757l-.883.445a5.497 5.497 0 010 5.074l.883.445a1 1 0 01-.97 1.757l-.883-.445a5.496 5.496 0 01-3.732 2.46V21a1 1 0 01-1.993.117L11 21v-1.257a5.496 5.496 0 01-3.732-2.46l-.883.445a1 1 0 01-.97-1.757l.883-.445a5.497 5.497 0 010-5.074l-.883-.445a1 1 0 01.97-1.757l.883.445a5.496 5.496 0 013.732-2.46V3a1 1 0 011-1zm0 5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

