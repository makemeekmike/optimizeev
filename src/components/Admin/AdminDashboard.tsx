import React from 'react';
import { 
  Users,
  Building2,
  Battery,
  AlertTriangle,
  TrendingUp,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Calendar
} from 'lucide-react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const AdminDashboard = () => {
  const platformStats = [
    {
      title: "Total Organizations",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Stations",
      value: "2,450",
      change: "+8%",
      trend: "up",
      icon: Battery,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "System Uptime",
      value: "99.99%",
      change: "+0.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Active Alerts",
      value: "24",
      change: "-15%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    }
  ];

  const systemData = [
    { time: '00:00', load: 45, errors: 2 },
    { time: '04:00', load: 40, errors: 1 },
    { time: '08:00', load: 65, errors: 3 },
    { time: '12:00', load: 85, errors: 4 },
    { time: '16:00', load: 75, errors: 2 },
    { time: '20:00', load: 55, errors: 1 },
    { time: '23:59', load: 50, errors: 2 }
  ];

  const clientHealth = [
    { name: 'Healthy', value: 85 },
    { name: 'Warning', value: 12 },
    { name: 'Critical', value: 3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">System Overview</h1>
          <p className="text-secondary-600">Platform-wide monitoring and management</p>
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
            Export Report
          </button>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat) => (
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

      {/* System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            System Load
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={systemData}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="load"
                  stroke="#0ea5e9"
                  fillOpacity={1}
                  fill="url(#colorLoad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Error Rate
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={systemData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="errors"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Client Activity
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={systemData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="load" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Client Health Distribution
          </h3>
          <div className="space-y-4">
            {clientHealth.map((status) => (
              <div key={status.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    status.name === 'Healthy' ? 'bg-green-500' :
                    status.name === 'Warning' ? 'bg-amber-500' :
                    'bg-red-500'
                  }`} />
                  <span className="text-secondary-900">{status.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-secondary-900">
                    {status.value}%
                  </span>
                  <div className="ml-4 w-24 h-2 bg-secondary-100 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        status.name === 'Healthy' ? 'bg-green-500' :
                        status.name === 'Warning' ? 'bg-amber-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${status.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;