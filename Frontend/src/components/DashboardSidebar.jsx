import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Layout, Users, Calendar, BookMarked, Coins, Settings } from 'lucide-react';

function DashboardSidebar() {
  const navigate = useNavigate();
  const menuItems = [
    { icon: Layout, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'My Groups', path: '/dashboard/groups' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: BookMarked, label: 'Resources', path: '/dashboard/resources' },
    { icon: Coins, label: 'Rewards', path: '/dashboard/rewards' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold">StudyDAO</span>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default DashboardSidebar;