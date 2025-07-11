import React, { useState } from 'react';
import {
  BookOpen, Layout, Users, Calendar, BookMarked, Coins, Settings,
  Bell, LogOut, Search, Clock, UserCircle, TrendingUp, ChevronDown, Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import MyGroups from './MyGroups';
import ExploreGroups from './ExploreGroups';

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mygroups');
  const [notifications] = useState(69);
  const [showDropdown, setShowDropdown] = useState(false);

  const {logout} = useAuth0();


  const menuItems = [
    // { icon: Layout, label: 'Dashboard', path: 'dashboard' },
    { icon: Users, label: 'My Groups', path: 'mygroups' },
    { icon: Users, label: 'Explore Groups', path: 'exploregroups' },
    { icon: Calendar, label: 'Schedule', path: 'schedule' },
    { icon: BookMarked, label: 'Resources', path: 'resources' },
    // { icon: Coins, label: 'Rewards', path: 'rewards' },
    // { icon: Settings, label: 'Settings', path: 'settings' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      // case 'dashboard':
        // return (
        //   <div className="space-y-6">
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //       {/* <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        //         <div className="flex items-center justify-between mb-4">
        //           <h3 className="text-lg font-semibold">Progress Tracker</h3>
        //           <TrendingUp className="text-indigo-600" />
        //         </div>
        //         <p className="text-gray-600 mb-4">📚 You've attended 5 sessions this week!</p>
        //         <div className="space-y-2">
        //           <div className="flex justify-between text-sm text-gray-600">
        //             <span>Weekly Progress</span>
        //             <span>10%</span>
        //           </div>
        //           <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        //             <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500" style={{ width: '10%' }} />
        //           </div>
        //         </div>
        //       </div> */}
        //       {/* <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        //         <div className="flex items-center justify-between mb-4">
        //           <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
        //           <Clock className="text-indigo-600" />
        //         </div>
        //         <div className="space-y-3">
        //           <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
        //             <p className="font-medium text-indigo-900">JavaScript Study</p>
        //             <p className="text-sm text-indigo-600">Today, 6 PM</p>
        //           </div>
        //           <div className="p-4 bg-gray-50 rounded-lg">
        //             <p className="font-medium">React Workshop</p>
        //             <p className="text-sm text-gray-600">Tomorrow, 3 PM</p>
        //           </div>
        //         </div>
        //       </div> */}
        //       {/* <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        //         <div className="flex items-center justify-between mb-4">
        //           <h3 className="text-lg font-semibold">Latest Group Activity</h3>
        //           <Users className="text-indigo-600" />
        //         </div>
        //         <div className="space-y-3">
        //           <div className="flex items-center gap-2 text-sm text-gray-600">
        //             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
        //               <span className="text-indigo-600">👥</span>
        //             </div>
        //             <span>3 new members joined your group</span>
        //           </div>
        //           <div className="flex items-center gap-2 text-sm text-gray-600">
        //             <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
        //               <span className="text-purple-600">📁</span>
        //             </div>
        //             <span>1 new PDF added</span>
        //           </div>
        //         </div>
        //       </div> */}
        //     </div>

        //     {/* quick actions */}
        //     <div className="bg-white p-6 rounded-xl shadow-sm">
        //       <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        //         <button className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
        //           <span className="block text-indigo-600 font-medium">Join Session</span>
        //         </button>
        //         <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
        //           <span className="block text-purple-600 font-medium">Create Group</span>
        //         </button>
        //         <button className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300">
        //           <span className="block text-pink-600 font-medium">Share Notes</span>
        //         </button>
        //         <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
        //           <span className="block text-green-600 font-medium">View Resources</span>
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // );

      case 'mygroups':
        return (
          <MyGroups />
        );
      
      case 'exploregroups':
        return(
          <ExploreGroups />
        )
      
      case 'schedule':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Study Schedule</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Add Session
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100">
                <div>
                  <p className="font-medium text-indigo-900">DSA Practice</p>
                  <p className="text-sm text-indigo-600">Today, 4 PM</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Resources</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Upload Resource
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600">📄</span>
                  </div>
                  <div>
                    <h3 className="font-medium">React Hooks Guide</h3>
                    <p className="text-sm text-gray-600">PDF Document</p>
                  </div>
                </div>
                <button className="w-full bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                  Download
                </button>
              </div>
            </div>
          </div>
        );

      // case 'rewards':
      //   return (
      //     <div className="bg-white p-6 rounded-xl shadow-sm">
      //       <div className="flex justify-between items-center mb-6">
      //         <h2 className="text-xl font-semibold">Your Rewards</h2>
      //         <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
      //           View History
      //         </button>
      //       </div>
      //       <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white">
      //         <div className="flex items-center justify-between mb-4">
      //           <h3 className="text-lg font-semibold">Total Tokens</h3>
      //           <Coins className="h-6 w-6" />
      //         </div>
      //         <p className="text-3xl font-bold">2,450</p>
      //         <p className="text-indigo-100 mt-2">Keep learning to earn more rewards!</p>
      //       </div>
      //     </div>
      //   );

      // case 'settings':
      //   return (
      //     <div className="bg-white p-6 rounded-xl shadow-sm">
      //       <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      //       <div className="space-y-6">
      //         <div>
      //           <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      //           <input
      //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
      //             placeholder="example@email.com"
      //           />
      //         </div>
      //         <div>
      //           <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
      //           <input
      //             type="password"
      //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
      //             placeholder="••••••••"
      //           />
      //         </div>
      //         <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
      //           Save Changes
      //         </button>
      //       </div>
      //     </div>
      //   );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="text-gray-700 h-6 w-6" />
          <span className="text-xl font-bold text-black ">StudySphere</span>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.path)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                activeTab === item.path
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`h-5 w-5 ${activeTab === item.path ? 'text-indigo-600' : 'text-gray-500'}`} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center bg-white px-6 py-4 border-b">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
              <Bell className="text-gray-600 h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {notifications}
                </span>
              )}
            </button>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <UserCircle className="text-gray-700 h-7 w-7" />
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-10 overflow-hidden">
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-300">Profile</button>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-300">Settings</button>
                  <button 
                    onClick={()=> logout({
                      logoutParams: {returnTo: window.location.origin}
                     })}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-300 text-red-600">Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default Dashboard;
