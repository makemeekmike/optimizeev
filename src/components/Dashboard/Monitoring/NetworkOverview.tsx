import React from 'react';
import { 
  Activity,
  Battery,
  Users,
  AlertTriangle,
  Clock,
  MapPin,
  TrendingUp,
  Zap
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const NetworkOverview = () => {
  const stats = [
    {
      title: "Network Health",
      value: "98.5%",
      change: "+0.5%",
      trend: "up",
      icon: Activity
    },
    {
      title: "Active Stations",
      value: "156/160",
      change: "+3%",
      trend: "up",
      icon: Battery
    },
    {
      title: "Current Users",
      value: "42",
      change: "+12%",
      trend: "up",
      icon: Users
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "-25%",
      trend: "down",
      icon: AlertTriangle
    }
  ];

  const performanceData = [
    { time: '00:00', value: 98.2 },
    { time: '04:00', value: 98.5 },
    { time: '08:00', value: 98.8 },
    { time: '12:00', value: 98.4 },
    { time: '16:00', value: 98.6 },
    { time: '20:00', value: 98.9 },
    { time: '23:59', value: 98.7 }
  ];

  const usageData = [
    { time: '00:00', usage: 20, capacity: 40 },
    { time: '04:00', usage: 15, capacity: 40 },
    { time: '08:00', usage: 35, capacity: 40 },
    { time: '12:00', usage: 40, capacity: 40 },
    { time: '16:00', usage: 30, capacity: 40 },
    { time: '20:00', usage: 25, capacity: 40 },
    { time: '23:59', usage: 20, capacity: 40 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Network Overview</h1>
          <p className="text-secondary-600">Real-time monitoring of your charging network</p>
        </div>
        <div className="flex space-x-4">
          <select className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="bg-primary-100 p-3 rounded-xl">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <span className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                <TrendingUp className="h-4 w-4 ml-1" />
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
        {/* Network Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Network Performance
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis domain={[98, 100]} />
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

        {/* Network Usage */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Network Usage
          </h3>
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
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              event: "Station B-22 Started Charging Session",
              time: "2 minutes ago",
              icon: Zap,
              color: "text-green-600",
              bgColor: "bg-green-100"
            },
            {
              event: "Maintenance Alert for Station A-15",
              time: "15 minutes ago",
              icon: AlertTriangle,
              color: "text-amber-600",
              bgColor: "bg-amber-100"
            },
            {
              event: "New Station Added to Network",
              time: "1 hour ago",
              icon: Battery,
              color: "text-blue-600",
              bgColor: "bg-blue-100"
            }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg"
            >
              <div className="flex items-center">
                <div className={`${activity.bgColor} p-2 rounded-lg`}>
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-secondary-900">{activity.event}</p>
                  <p className="text-sm text-secondary-500">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkOverview;