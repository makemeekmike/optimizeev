import React, { useState } from 'react';
import { 
  Settings,
  Plus,
  Copy,
  Trash2,
  Edit,
  Download,
  Upload,
  Search,
  Filter
} from 'lucide-react';

const ConfigTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: "T1",
      name: "Standard DC Fast Charging",
      description: "Default configuration for DC fast charging stations",
      lastModified: "2024-03-01",
      author: "System Admin",
      stationsUsing: 45
    },
    {
      id: "T2",
      name: "Level 2 Commercial",
      description: "Configuration for Level 2 commercial locations",
      lastModified: "2024-02-28",
      author: "System Admin",
      stationsUsing: 32
    },
    {
      id: "T3",
      name: "High Power Custom",
      description: "Custom configuration for high-power charging hubs",
      lastModified: "2024-02-25",
      author: "System Admin",
      stationsUsing: 12
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Configuration Templates</h1>
          <p className="text-secondary-600">Manage and deploy station configuration templates</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Upload className="h-5 w-5 text-secondary-600 mr-2" />
            Import
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            New Template
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-secondary-200 rounded-lg hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Templates List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Template Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Stations Using
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {templates.map((template) => (
                <tr
                  key={template.id}
                  className={`hover:bg-secondary-50 cursor-pointer ${
                    selectedTemplate === template.id ? 'bg-secondary-50' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-secondary-900">{template.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-secondary-600">{template.description}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-secondary-600">
                    {template.lastModified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-secondary-600">
                    {template.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-secondary-600">
                    {template.stationsUsing} stations
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="p-1 text-secondary-400 hover:text-secondary-500">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-secondary-400 hover:text-secondary-500">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-secondary-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-secondary-400 hover:text-secondary-500">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConfigTemplates;