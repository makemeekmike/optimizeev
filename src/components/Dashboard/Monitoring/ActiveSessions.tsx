import React, { useState } from 'react';
import { 
  Zap,
  Clock,
  Battery,
  DollarSign,
  Search,
  Filter,
  RefreshCw,
  MapPin,
  ChevronDown
} from 'lucide-react';

const ActiveSessions = () => {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const sessions = [
    {
      id: "CS-001",
      stationId: "A-15",
      startTime: "2024-03-01T14:30:00Z",
      duration: "45 min",
      powerDelivered: "35.5 kWh",
      cost: "$12.50",
      status: "charging",
      user: "John Smith",
      vehicle: "Tesla Model 3"
    },
    {
      id: "CS-002",
      stationId: "B-22",
      startTime: "2024-03-01T14:15:00Z",
      duration: "30 min",
      powerDelivered: "22.3 kWh",
      cost: "$8.20",
      status: "charging",
      user: "Sarah Chen",
      vehicle: "Chevrolet Bolt"
    },
    {
      id: "CS-003",
      stationId: "C-08",
      startTime: "2024-03-01T14:00:00Z",
      duration: "15 min",
      powerDelivered: "12.8 kWh",
      cost: "$4.50",
      status: "charging",
      user: "Mike Johnson",
      vehicle: "Ford Mustang Mach-E"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Active Sessions</h1>
          <p className="text-secondary-600">Monitor ongoing charging sessions</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <RefreshCw className="h-5 w-5 text-secondary-600 mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
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
              placeholder="Search sessions..."
              className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Stations</option>
            <option>Group A</option>
            <option>Group B</option>
          </select>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Vehicles</option>
            <option>Tesla</option>
            <option>Chevrolet</option>
            <option>Ford</option>
          </select>
        </div>
      </div>

      {/* Sessions List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Station
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Power
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {sessions.map((session) => (
                <tr
                  key={session.id}
                  className={`hover:bg-secondary-50 cursor-pointer ${
                    selectedSession === session.id ? 'bg-secondary-50' : ''
                  }`}
                  onClick={() => setSelectedSession(session.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-secondary-900">{session.stationId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-secondary-900">
                    {session.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-secondary-900">
                    {session.vehicle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{session.duration}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{session.powerDelivered}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{session.cost}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Session Details */}
      {selectedSession && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Session Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-secondary-900">Location</span>
                </div>
                <span className="text-secondary-600">Downtown Station</span>
              </div>
            </div>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Battery className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-secondary-900">Charge Rate</span>
                </div>
                <span className="text-secondary-600">50 kW</span>
              </div>
            </div>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-secondary-900">Est. Completion</span>
                </div>
                <span className="text-secondary-600">30 min</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveSessions;