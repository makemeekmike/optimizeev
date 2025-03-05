import React, { useState } from 'react';
import { 
  FolderPlus,
  Edit,
  Trash2,
  Plus,
  Battery,
  MapPin,
  Settings,
  Filter,
  Search
} from 'lucide-react';

const GroupManagement = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const groups = [
    {
      id: "G1",
      name: "Downtown Stations",
      description: "All charging stations in the downtown area",
      stationCount: 45,
      locations: ["Main Street", "City Center", "Business District"],
      status: "active"
    },
    {
      id: "G2",
      name: "Shopping Centers",
      description: "Charging stations at major shopping locations",
      stationCount: 32,
      locations: ["Mall Plaza", "Retail Park", "Market Square"],
      status: "active"
    },
    {
      id: "G3",
      name: "Residential Areas",
      description: "Residential neighborhood charging stations",
      stationCount: 28,
      locations: ["North Side", "West End", "East Village"],
      status: "active"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Group Management</h1>
          <p className="text-secondary-600">Organize and manage station groups</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <FolderPlus className="h-5 w-5 mr-2" />
            Create Group
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="relative max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search groups..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
              selectedGroup === group.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onClick={() => setSelectedGroup(group.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Battery className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-secondary-900">
                    {group.name}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-secondary-400 hover:text-secondary-500">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-secondary-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-secondary-600 mb-4">{group.description}</p>

              <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                <div className="flex items-center">
                  <Battery className="h-4 w-4 mr-1" />
                  <span>{group.stationCount} Stations</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{group.locations.length} Locations</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.locations.map((location) => (
                  <span
                    key={location}
                    className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-lg text-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-secondary-50 rounded-b-xl">
              <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700">
                <Settings className="h-4 w-4 mr-2" />
                Manage Stations
              </button>
            </div>
          </div>
        ))}

        {/* Add New Group Card */}
        <button className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-secondary-200 p-6 flex flex-col items-center justify-center text-secondary-400 hover:text-secondary-500">
          <Plus className="h-8 w-8 mb-2" />
          <span className="text-lg font-medium">Create New Group</span>
        </button>
      </div>
    </div>
  );
};

export default GroupManagement;