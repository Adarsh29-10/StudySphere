import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
const MyGroups = () => {
    const navigate = useNavigate()
    const {user} = useAuth0()
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Welcome, {user.name}🙋‍♂️</h2>
              <button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Create New Group
              </button>
            </div>

           {/* group template */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600">JS</span>
                    </div>
                    <div>
                      <h3 className="font-medium">JavaScript Masters</h3>
                      <p className="text-sm text-gray-600">12 members</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Weekly coding challenges and discussions</p>
                  <button onClick={() => {navigate('/group/group1')}} className="w-full bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                    View Group
                  </button>
                </div>
              </div>
            </div>
          
            
            
          </div>
    );
};

export default MyGroups;