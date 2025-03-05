import React, { useState } from 'react';
import { 
  Wifi,
  WifiOff,
  RefreshCw,
  Search,
  Filter,
  AlertTriangle,
  Clock,
  Activity,
  Signal
} from 'lucide-react';

const ConnectionStatus = () => {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  const stations = [
    {
      id: "A-15",
      name: "Downtown Station A-15",
      status: "connected",
      signalStrength: 85,
      lastPing: "2s ago",
      uptime: "99.9%",
      latency: "45ms"
    },
    {
      id: "B-22",
      name: "Midtown Station B-22",
      status: "weak",
      signalStrength: 45,
      lastPing: "5s ago",
      uptime: "98.5%",
      latency: "120ms"
    },
    {
      id: "C-08",
      name: "Westside Station C-08",
      status: "disconnected",
      signalStrength: 0,
      lastPing: "5min ago",
      uptime: "95.5%",
      latency: "---"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Connection Status</h1>
          <p className="text-secondary-600">Monitor station connectivity and network health</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <RefreshCw className="h-5 w-5 mr-2" />
            Refresh All
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="relative max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stations..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Connection Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((station) => (
          <div
            key={station.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
              selectedStation === station.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onClick={() => setSelectedStation(station.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {station.status === 'connected' ? (
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Wifi className="h-5 w-5 text-green-600" />
                    </div>
                  ) : station.status === 'weak' ? (
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Signal className="h-5 w-5 text-amber-600" />
                    </div>
                  ) : (
                    <div className="bg-red-100 p-2 rounded-lg">
                      <WifiOff className="h-5 w-5 text-red-600" />
                    </div>
                  )}
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">
                      {station.name}
                    </h3>
                    <p className="text-sm text-secondary-500">ID: {station.id}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Activity className="h-4 w-4 mr-2" />
                    Signal Strength
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {station.signalStrength}%
                  </p>
                </div>

                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Last Ping
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {station.lastPing}
                  </p>
                </div>

                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Uptime
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {station.uptime}
                  </p>
                </div>

                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Activity className="h-4 w-4 mr-2" />
                    Latency
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {station.latency}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-secondary-50 rounded-b-xl">
              <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700">
                <RefreshCw className="h-4 w-4 mr-2" />
                Test Connection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionStatus;