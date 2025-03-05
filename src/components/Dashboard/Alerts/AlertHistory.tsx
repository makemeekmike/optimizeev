import React, { useState } from 'react';
import { 
  AlertTriangle,
  Calendar,
  Download,
  Filter,
  Search,
  Clock,
  Battery,
  CheckCircle,
  XCircle,
  ChevronRight
} from 'lucide-react';

const AlertHistory = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const alerts = [
    {
      id: "ALT-001",
      stationId: "A-15",
      type: "warning",
      title: "Voltage Fluctuation Detected",
      description: "Station experiencing voltage variations outside normal range",
      timestamp: "2024-03-01T14:30:00Z",
      priority: "high",
      status: "resolved",
      resolvedBy: "John Smith",
      resolvedAt: "2024-03-01T15:00:00Z",
      metrics: {
        voltage: "380V-420V",
        duration: "30 minutes",
        impact: "Medium"
      }
    },
    {
      id: "ALT-002",
      stationId: "B-22",
      type: "critical",
      title: "Communication Loss",
      description: "Station offline - Connection interrupted",
      timestamp: "2024-03-01T15:15:00Z",
      priority: "critical",
      status: "active",
      metrics: {
        lastContact: "15 minutes ago",
        attempts: "3 failed",
        impact: "High"
      }
    },
    {
      id: "ALT-003",
      stationId: "C-08",
      type: "info",
      title: "Maintenance Due",
      description: "Scheduled maintenance approaching in 5 days",
      timestamp: "2024-03-01T16:00:00Z",
      priority: "low",
      status: "acknowledged",
      acknowledgedBy: "Sarah Chen",
      metrics: {
        dueDate: "2024-03-06",
        lastService: "2024-02-06",
        impact: "Low"
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Alert History</h1>
          <p className="text-secondary-600">View and manage system alerts</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Calendar className="h-5 w-5 text-secondary-600 mr-2" />
            Date Range
          </button>
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Download className="h-5 w-5 mr-2" />
            Export
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
              placeholder="Search alerts..."
              className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Acknowledged</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Alert
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Station
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {alerts.map((alert) => (
                <tr
                  key={alert.id}
                  className={`hover:bg-secondary-50 cursor-pointer ${
                    selectedAlert === alert.id ? 'bg-secondary-50' : ''
                  }`}
                  onClick={() => setSelectedAlert(alert.id)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${
                        alert.type === 'critical' ? 'bg-red-100' :
                        alert.type === 'warning' ? 'bg-amber-100' :
                        'bg-blue-100'
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${
                          alert.type === 'critical' ? 'text-red-600' :
                          alert.type === 'warning' ? 'text-amber-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-secondary-900">{alert.title}</div>
                        <div className="text-sm text-secondary-500">{alert.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Battery className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{alert.stationId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      alert.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      alert.priority === 'high' ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {alert.status === 'resolved' ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : alert.status === 'acknowledged' ? (
                        <Clock className="h-5 w-5 text-amber-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="capitalize text-secondary-900">
                        {alert.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">
                        {new Date(alert.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 hover:text-primary-700">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Alert Details */}
      {selectedAlert && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Alert Details
          </h3>
          {alerts.find(alert => alert.id === selectedAlert) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(
                alerts.find(alert => alert.id === selectedAlert)?.metrics || {}
              ).map(([key, value]) => (
                <div key={key} className="bg-secondary-50 p-4 rounded-lg">
                  <div className="capitalize text-sm font-medium text-secondary-900 mb-1">
                    {key}
                  </div>
                  <div className="text-secondary-600">{value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlertHistory;