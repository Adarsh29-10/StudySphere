import React from 'react';
import { Users, Clock } from 'lucide-react';

const studyGroups = [
  {
    id: 1,
    title: "Programming in JavaScript",
    description: "Master modern JavaScript concepts and frameworks",
    members: 24,
    schedule: "Tue, Thu 7PM EST"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Learn essential computer science concepts",
    members: 18,
    schedule: "Mon, Wed 6PM EST"
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    description: "Introduction to AI and ML concepts",
    members: 32,
    schedule: "Sat 2PM EST"
  }
];

function GroupCard({ group }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.title}</h3>
      <p className="text-gray-600 mb-4">{group.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{group.members} members</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{group.schedule}</span>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
        <Users className="h-5 w-5" />
        Join Group
      </button>
    </div>
  );
}

function Groups() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Study Groups</h1>
          <p className="text-gray-600 mt-1">Manage your study groups and find new ones</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Create New Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

export default Groups;