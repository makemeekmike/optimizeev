import React, { useState } from 'react';
import { 
  AlertTriangle,
  Bell,
  CheckCircle,
  Clock,
  Filter,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  BarChart,
  Users,
  Settings
} from 'lucide-react';

const AlertsView = () => {
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
      status: "active",
      assignedTo: "John Smith",
      predictedImpact: "Medium",
      recommendedAction: "Schedule diagnostic check within 48 hours"
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
      assignedTo: "Sarah Chen",
      predictedImpact: "High",
      recommendedAction: "Immediate investigation required"
    },
    {
      id: "ALT-003",
      stationId: "C-08",
      type: "info",
      title: "Maintenance Due",
      description: "Scheduled maintenance approaching in 5 days",
      timestamp: "2024-03-01T16:00:00Z",
      priority: "low",
      status: "pending",
      assignedTo: "Mike Johnson",
      predictedImpact: "Low",
      recommendedAction: "Review maintenance schedule"
    }
  ];

  const alertStats = [
    {
      title: "Active Alerts",
      value: "24",
      change: "+12%",
      trend: "up"
    },
    {
      title: "Average Response Time",
      value: "15 min",
      change: "-25%",
      trend: "down"
    },
    {
      title: "Resolution Rate",
      value: "94%",
      change: "+5%",
      trend: "up"
    },
    {
      title: "Critical Issues",
      value: "3",
      change: "-33%",
      trend: "down"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Alert Management</h1>
          <p className="text-secondary-600">Monitor and manage system alerts</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Settings className="h-5 w-5 mr-2" />
            Configure Alerts
          </button>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {alertStats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-secondary-600">{stat.title}</h3>
              <span className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                )}
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-secondary-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Alert List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-secondary-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-secondary-900">Active Alerts</h2>
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  className="pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Priorities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-secondary-200">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="p-6 hover:bg-secondary-50 cursor-pointer"
              onClick={() => setSelectedAlert(alert.id)}
            >
              <div className="flex items-center justify-between">
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
                    <h3 className="text-lg font-medium text-secondary-900">
                      {alert.title}
                    </h3>
                    <p className="text-sm text-secondary-500">
                      Station {alert.stationId}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-secondary-400 mr-1" />
                      <span className="text-sm text-secondary-500">
                        {new Date(alert.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 text-secondary-400 mr-1" />
                      <span className="text-sm text-secondary-500">
                        {alert.assignedTo}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    alert.priority === 'critical' ? 'bg-red-100 text-red-800' :
                    alert.priority === 'high' ? 'bg-amber-100 text-amber-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-secondary-600">{alert.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <BarChart className="h-4 w-4 text-secondary-400 mr-1" />
                      <span className="text-sm text-secondary-600">
                        Impact: {alert.predictedImpact}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Bell className="h-4 w-4 text-secondary-400 mr-1" />
                      <span className="text-sm text-secondary-600">
                        Status: {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsView;