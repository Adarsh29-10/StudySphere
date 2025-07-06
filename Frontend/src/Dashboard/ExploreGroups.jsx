import { Search, Users } from 'lucide-react';
import React from 'react';

const ExploreGroups = () => {
    return (
        <div className="space-y-6">
            {/* Search and Filter */}
            <div className="mb-6">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search groups..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">All Categories</option>
                        <option value="programming">Programming</option>
                        <option value="design">Design</option>
                        <option value="business">Business</option>
                        <option value="language">Language Learning</option>
                    </select>
                </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <button className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                            <span className="text-indigo-600">💻</span>
                        </div>
                        <span className="text-sm font-medium text-indigo-600">Programming</span>
                    </div>
                </button>
                <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                            <span className="text-purple-600">🎨</span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">Design</span>
                    </div>
                </button>
                <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                            <span className="text-green-600">💼</span>
                        </div>
                        <span className="text-sm font-medium text-green-600">Business</span>
                    </div>
                </button>
                <button className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                            <span className="text-pink-600">🌐</span>
                        </div>
                        <span className="text-sm font-medium text-pink-600">Languages</span>
                    </div>
                </button>
            </div>

            {/* Group Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Group */}
                <div className="border rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600">PY</span>
                        </div>
                        <div>
                            <h3 className="font-medium">Python Developers</h3>
                            <p className="text-sm text-gray-600">45 members</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Learn Python and build projects together
                    </p>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                            Join Group
                        </button>
                        <button className="bg-indigo-50 text-indigo-600 p-2 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                            <Users className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Design Group */}
                <div className="border rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600">UI</span>
                        </div>
                        <div>
                            <h3 className="font-medium">UI/UX Designers</h3>
                            <p className="text-sm text-gray-600">32 members</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Share design resources and get feedback
                    </p>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                            Join Group
                        </button>
                        <button className="bg-purple-50 text-purple-600 p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                            <Users className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Language Learning Group */}
                <div className="border rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                            <span className="text-pink-600">ES</span>
                        </div>
                        <div>
                            <h3 className="font-medium">Spanish Learners</h3>
                            <p className="text-sm text-gray-600">28 members</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Practice Spanish with native speakers
                    </p>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                            Join Group
                        </button>
                        <button className="bg-pink-50 text-pink-600 p-2 rounded-lg hover:bg-pink-100 transition-colors duration-300">
                            <Users className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreGroups;
