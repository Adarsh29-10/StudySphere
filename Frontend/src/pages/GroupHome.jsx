import React, { useState } from "react";
import { FaMicrophone, FaUserFriends, FaStar, FaCalendarAlt, FaTasks } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const GroupHome = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case "chat":
        return (
          <div className="p-6">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">A</div>
                <div>
                  <p className="font-medium">Adarsh</p>
                  <p className="text-gray-600">Hello everyone! How's the project going?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">S</div>
                <div>
                  <p className="font-medium">Sanya</p>
                  <p className="text-gray-600">Great! Just finished the UI components.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message..."
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        );
      case "audio":
        return (
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-2">🎧 Audio Room</h2>
              <p className="text-blue-100">Join the live discussion with your team members</p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <FaMicrophone /> Join Audio
              </button>
              <button className="flex-1 bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                ✋ Raise Hand
              </button>
            </div>
          </div>
        );
      case "resources":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">📁 Resource Library</h2>
            <div className="grid gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  📘
                </div>
                <div>
                  <p className="font-medium">React Basics.pdf</p>
                  <p className="text-sm text-gray-500">Uploaded 2 days ago</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  🔗
                </div>
                <div>
                  <p className="font-medium">https://useful-link.dev</p>
                  <p className="text-sm text-gray-500">Added yesterday</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "poll":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">🗳️ Vote for Session Time</h2>
            <div className="grid grid-cols-2 gap-4">
              {["1 PM", "5 PM"].map((time) => (
                <div key={time} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer text-center">
                  <span className="text-3xl mb-2">🕒</span>
                  <p className="text-xl font-medium">{time}</p>
                  <p className="text-sm text-gray-500 mt-2">12 votes</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "notes":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">📝 Shared Notes</h2>
            <textarea
              rows="8"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write collaborative notes here..."
            />
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );
      case "tasks":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">📋 Task Board</h2>
            <div className="grid grid-cols-3 gap-6">
              {["To Do", "Doing", "Done"].map((col, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-center">{col}</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="font-medium">Task 1</p>
                      <p className="text-sm text-gray-500">Due tomorrow</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="font-medium">Task 2</p>
                      <p className="text-sm text-gray-500">Due in 3 days</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleJoinMeeting = () => {
    navigate(`/meeting/groupId`); // Assuming groupId is available in the component
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 shadow-sm">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaUserFriends className="text-blue-500" /> Members
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">A</div>
              <span>Adarsh - Admin</span>
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">S</div>
              <span>Sanya - Mentor</span>
            </li>
            <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">R</div>
              <span>Ravi - Learner</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> Rules
          </h3>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">3 absences = auto kick</p>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> Calendar
          </h3>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">3 sessions this week</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <MdEmojiEvents className="text-yellow-500" /> Leaderboard
          </h3>
          <ol className="space-y-2">
            <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="font-medium">Adarsh</span>
              <span className="text-yellow-500 font-bold">120 pts</span>
            </li>
            <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="font-medium">Sanya</span>
              <span className="text-yellow-500 font-bold">90 pts</span>
            </li>
          </ol>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">🚀JavaScript Masters
              </h1>
              <p className="text-gray-600 flex items-center gap-3">
                <BsFillPeopleFill className="text-blue-500" /> 12 Members
                <FaStar className="text-yellow-500" /> 4.8
              </p>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Invite Members
            </button>
          </div>
        </header>

        {/* Live Status */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">📅 Session Live</p>
              <p className="text-green-100">Started at 11 AM </p>
            </div>
            <button 
              onClick={handleJoinMeeting}
              className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <nav className="flex gap-2 mb-6 bg-white p-2 rounded-lg shadow-sm">
          {[
            { id: "chat", icon: "💬", label: "Chat" },
            { id: "audio", icon: "🎧", label: "Audio Room" },
            { id: "resources", icon: "📁", label: "Resources" },
            { id: "poll", icon: "📊", label: "Poll" },
            { id: "notes", icon: "📝", label: "Notes" },
            { id: "tasks", icon: <FaTasks />, label: "Tasks" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          {renderTabContent()}
        </section>
      </main>
    </div>
  );
};

export default GroupHome;
