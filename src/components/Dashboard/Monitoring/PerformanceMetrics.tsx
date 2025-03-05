import React from 'react';
import { 
  Activity,
  Battery,
  Calendar,
  Download,
  DollarSign,
  Filter,
  TrendingUp,
  Zap
} from 'lucide-react';
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

const PerformanceMetrics = () => {
  const metrics = {
    uptime: [
      { time: '00:00', value: 99.8 },
      { time: '04:00', value: 99.9 },
      { time: '08:00', value: 99.7 },
      { time: '12:00', value: 99.8 },
      { time: '16:00', value: 99.9 },
      { time: '20:00', value: 99.8 },
      { time: '23:59', value: 99.9 }
    ],
    utilization: [
      { time: '00:00', value: 45 },
      { time: '04:00', value: 30 },
      { time: '08:00', value: 65 },
      { time: '12:00', value: 85 },
      { time: '16:00', value: 75 },
      { time: '20:00', value: 55 },
      { time: '23:59', value: 40 }
    ],
    efficiency: [
      { time: '00:00', value: 92 },
      { time: '04:00', value: 94 },
      { time: '08:00', value: 91 },
      { time: '12:00', value: 93 },
      { time: '16:00', value: 95 },
      { time: '20:00', value: 92 },
      { time: '23:59', value: 93 }
    ]
  };

  const stats = [
    {
      title: "Average Uptime",
      value: "99.8%",
      change: "+0.2%",
      trend: "up",
      icon: Activity
    },
    {
      title: "Utilization Rate",
      value: "85%",
      change: "+5%",
      trend: "up",
      icon: Battery
    },
    {
      title: "Energy Efficiency",
      value: "93%",
      change: "+1%",
      trend: "up",
      icon: Zap
    },
    {
      title: "Revenue per Station",
      value: "$450",
      change: "+8%",
      trend: "up",
      icon: DollarSign
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Performance Metrics</h1>
          <p className="text-secondary-600">Detailed analysis of network performance</p>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Uptime Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Network Uptime
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics.uptime}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis domain={[99, 100]} />
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

        {/* Utilization Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Station Utilization
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics.utilization}>
                <defs>
                  <linearGradient id="colorUtilization" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="value"
                  stroke="#0ea5e9"
                  fillOpacity={1}
                  fill="url(#colorUtilization)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Energy Efficiency
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics.efficiency}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Performance Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Optimal', value: 75 },
                    { name: 'Good', value: 20 },
                    { name: 'Fair', value: 5 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                >
                  <Cell fill="#0ea5e9" />
                  <Cell fill="#22c55e" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-2" />
                <span className="text-sm text-secondary-600">Optimal (75%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                <span className="text-sm text-secondary-600">Good (20%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2" />
                <span className="text-sm text-secondary-600">Fair (5%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;