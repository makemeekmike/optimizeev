import React from 'react';
import { 
  Battery, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Activity,
  Users,
  Zap,
  BarChart,
  Calendar,
  MapPin,
  Settings,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const DashboardHome = () => {
  const stats = [
    {
      title: "Active Stations",
      value: "156/160",
      change: "+3%",
      trend: "up",
      icon: Battery,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Current Uptime",
      value: "97.8%",
      change: "+0.5%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Sessions",
      value: "42",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Alerts",
      value: "3",
      change: "-25%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    }
  ];

  const chartData = [
    { time: '00:00', value: 30 },
    { time: '04:00', value: 25 },
    { time: '08:00', value: 45 },
    { time: '12:00', value: 65 },
    { time: '16:00', value: 55 },
    { time: '20:00', value: 40 },
    { time: '23:59', value: 35 },
  ];

  const usageData = [
    { time: '00:00', usage: 20, capacity: 40 },
    { time: '04:00', usage: 15, capacity: 40 },
    { time: '08:00', usage: 35, capacity: 40 },
    { time: '12:00', usage: 40, capacity: 40 },
    { time: '16:00', usage: 30, capacity: 40 },
    { time: '20:00', usage: 25, capacity: 40 },
    { time: '23:59', usage: 20, capacity: 40 },
  ];

  const alerts = [
    {
      station: "Station A-15",
      issue: "Voltage Fluctuation",
      probability: "89%",
      timeframe: "48h",
      severity: "high"
    },
    {
      station: "Station B-22",
      issue: "Connector Wear",
      probability: "75%",
      timeframe: "72h",
      severity: "medium"
    },
    {
      station: "Station C-08",
      issue: "Temperature Anomaly",
      probability: "92%",
      timeframe: "24h",
      severity: "critical"
    }
  ];

  const upcomingMaintenance = [
    {
      station: "Station D-05",
      type: "Routine Check",
      date: "Mar 25, 2024",
      status: "scheduled"
    },
    {
      station: "Station A-12",
      type: "Firmware Update",
      date: "Mar 26, 2024",
      status: "pending"
    },
    {
      station: "Station B-18",
      type: "Hardware Inspection",
      date: "Mar 28, 2024",
      status: "confirmed"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className={`${stat.bgColor} p-3 rounded-xl`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
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
            <h3 className="mt-4 text-2xl font-semibold text-secondary-900">
              {stat.value}
            </h3>
            <p className="text-secondary-600">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Consumption Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-secondary-900">
              Energy Consumption
            </h3>
            <select className="bg-secondary-50 border-0 rounded-lg px-3 py-2 text-sm">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="usage"
                  stroke="#0ea5e9"
                  fillOpacity={1}
                  fill="url(#colorUsage)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Station Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-secondary-900">
              Station Performance
            </h3>
            <select className="bg-secondary-50 border-0 rounded-lg px-3 py-2 text-sm">
              <option>All Stations</option>
              <option>Group A</option>
              <option>Group B</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Predictive Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Predictive Alerts
          </h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.station}
                className="flex items-center justify-between p-4 bg-secondary-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    alert.severity === 'critical' ? 'bg-red-100' :
                    alert.severity === 'high' ? 'bg-amber-100' :
                    'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`h-5 w-5 ${
                      alert.severity === 'critical' ? 'text-red-600' :
                      alert.severity === 'high' ? 'text-amber-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      {alert.station}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {alert.issue}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-secondary-900">
                    {alert.probability}
                  </p>
                  <p className="text-sm text-secondary-600">
                    within {alert.timeframe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Maintenance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Upcoming Maintenance
          </h3>
          <div className="space-y-4">
            {upcomingMaintenance.map((maintenance) => (
              <div
                key={maintenance.station}
                className="flex items-center justify-between p-4 bg-secondary-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      {maintenance.station}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {maintenance.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-secondary-900">
                    {maintenance.date}
                  </p>
                  <p className={`text-sm ${
                    maintenance.status === 'confirmed' ? 'text-green-600' :
                    maintenance.status === 'scheduled' ? 'text-blue-600' :
                    'text-amber-600'
                  }`}>
                    {maintenance.status.charAt(0).toUpperCase() + maintenance.status.slice(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;