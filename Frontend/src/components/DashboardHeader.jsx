import React from 'react';
import { Bell, LogOut, Search } from 'lucide-react';

function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-64 h-16 flex items-center px-6 z-10">
      <div className="flex-1 flex items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;