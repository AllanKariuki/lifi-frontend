import React from 'react';
import { BellIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-gray-50 p-4 flex items-center justify-between shadow-sm">
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
        <div className={`px-3 py-1 rounded ${
          status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </div>
        {/* User Icon */}
        <UserIcon className="w-10 h-10 text-gray-600 bg-gray-100 rounded-full p-2" />
        {/* User Info */}
        <div className="flex items-center space-x-2">
          <div>
            <div className="text-sm font-semibold">Jerome Bell</div>
            <div className="text-xs text-gray-500">Agronomist</div>
          </div>
        </div>
        
        
        {/* Notification Bell Icon */}
        <BellIcon className="w-10 h-10 text-gray-600 bg-gray-100 rounded-full p-2" />
        
        {/* Settings Icon */}
        <Cog6ToothIcon className="w-10 h-10 text-gray-600 bg-gray-100 rounded-full p-2" />
        
      </div>
    </header>
  );
};

export default Header;