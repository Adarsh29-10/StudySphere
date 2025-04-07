import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const scheduleEvents = [
  {
    id: 1,
    title: "JavaScript Study Session",
    time: "2:00 PM - 3:30 PM",
    participants: 5,
    type: "Group Study"
  },
  {
    id: 2,
    title: "Algorithm Practice",
    time: "4:00 PM - 5:30 PM",
    participants: 3,
    type: "Practice"
  },
  {
    id: 3,
    title: "Project Discussion",
    time: "6:00 PM - 7:00 PM",
    participants: 4,
    type: "Discussion"
  }
];

function Schedule() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Study Schedule</h1>
          <p className="text-gray-600 mt-1">Manage your upcoming study sessions</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Schedule Session
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          {scheduleEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  {event.type}
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;