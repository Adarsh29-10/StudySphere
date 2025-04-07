import React from 'react';
import { Award, TrendingUp, Gift } from 'lucide-react';

const rewardHistory = [
  {
    id: 1,
    activity: "Group Study Session",
    tokens: 50,
    date: "2024-03-15"
  },
  {
    id: 2,
    activity: "Resource Contribution",
    tokens: 100,
    date: "2024-03-14"
  },
  {
    id: 3,
    activity: "Perfect Attendance",
    tokens: 75,
    date: "2024-03-13"
  }
];

function Rewards() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Rewards Dashboard</h1>
        <p className="text-gray-600 mt-1">Track your earnings and redeem rewards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Total Tokens</h3>
          <p className="text-3xl font-bold">2,450</p>
          <div className="flex items-center gap-1 text-indigo-100 mt-2">
            <TrendingUp className="h-4 w-4" />
            <span>+150 this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Rank</h3>
          <p className="text-3xl font-bold text-gray-900">Gold</p>
          <p className="text-gray-500 mt-2">Top 10% of users</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Next Milestone</h3>
          <p className="text-3xl font-bold text-gray-900">550</p>
          <p className="text-gray-500 mt-2">tokens until Platinum</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {rewardHistory.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{activity.activity}</h3>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-indigo-600">+{activity.tokens}</span>
                <Gift className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;