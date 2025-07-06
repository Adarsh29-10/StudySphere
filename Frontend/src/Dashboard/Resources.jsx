import React from 'react';
import { BookOpen, Download, Share2 } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    type: "PDF Guide",
    size: "2.4 MB",
    downloads: 156
  },
  {
    id: 2,
    title: "Data Structures Cheat Sheet",
    type: "PDF Document",
    size: "1.8 MB",
    downloads: 89
  },
  {
    id: 3,
    title: "Algorithm Visualization Tools",
    type: "Web Resource",
    size: "N/A",
    downloads: 234
  }
];

function Resources() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Study Resources</h1>
          <p className="text-gray-600 mt-1">Access and share study materials</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Upload Resource
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{resource.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;