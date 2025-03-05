import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Battery, 
  Clock, 
  DollarSign,
  Download,
  Calendar,
  Filter
} from 'lucide-react';

const AnalyticsView = () => {
  const usageData = [
    { month: 'Jan', usage: 4200, revenue: 42000 },
    { month: 'Feb', usage: 4500, revenue: 45000 },
    { month: 'Mar', usage: 5100, revenue: 51000 },
    { month: 'Apr', usage: 4800, revenue: 48000 },
    { month: 'May', usage: 5300, revenue: 53000 },
    { month: 'Jun', usage: 5800, revenue: 58000 }
  ];

  const stationPerformance = [
    { name: 'Station A', value: 98.5 },
    { name: 'Station B', value: 97.2 },
    { name: 'Station C', value: 95.8 },
    { name: 'Station D', value: 99.1 }
  ];

  const COLORS = ['#0ea5e9', '#10b981', '#6366f1', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Analytics Dashboard</h1>
          <p className="text-secondary-600">Comprehensive insights into your charging network</p>
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: 'Total Energy Delivered',
            value: '125,420 kWh',
            change: '+12.5%',
            icon: Battery,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100'
          },
          {
            title: 'Average Session Duration',
            value: '45 mins',
            change: '+5.2%',
            icon: Clock,
            color: 'text-green-600',
            bgColor: 'bg-green-100'
          },
          {
            title: 'Revenue',
            value: '$297,500',
            change: '+15.3%',
            icon: DollarSign,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100'
          },
          {
            title: 'Growth Rate',
            value: '23.5%',
            change: '+2.1%',
            icon: TrendingUp,
            color: 'text-amber-600',
            bgColor: 'bg-amber-100'
          }
        ].map((metric) => (
          <div key={metric.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className={`${metric.bgColor} p-3 rounded-xl`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <span className="text-sm font-medium text-green-600">
                {metric.change}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-secondary-900">
              {metric.value}
            </h3>
            <p className="text-secondary-600">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usage Trends */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Usage Trends
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
                <XAxis dataKey="month" />
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

        {/* Revenue Analysis */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Revenue Analysis
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Station Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Station Performance
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stationPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stationPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stationPerformance.map((station, index) => (
              <div key={station.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-secondary-600">
                  {station.name}: {station.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Utilization Patterns */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Utilization Patterns
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="usage"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;