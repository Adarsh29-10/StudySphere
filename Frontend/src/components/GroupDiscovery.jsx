import React from 'react';
import { Users } from 'lucide-react';

const studyGroups = [
  {
    id: 1,
    title: "Video Editing",
    description: "Learn video editing techniques and collaborate on creative projects",
  },
  {
    id: 2,
    title: "Programming in JS",
    description: "Master JavaScript fundamentals and modern frameworks together",
  },
  {
    id: 3,
    title: "Data Science Basics",
    description: "Explore data analysis and visualization techniques",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Study user interface design principles and best practices",
  }
];

function GroupCard({ group }) {
  const handleJoin = () => {
    alert(`You have joined the ${group.title} group!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.title}</h3>
      <p className="text-gray-600 mb-6">{group.description}</p>
      <button
        onClick={handleJoin}
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
      >
        <Users className="h-5 w-5" />
        Join Group
      </button>
    </div>
  );
}

export default function GroupDiscovery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Discover Study Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studyGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}