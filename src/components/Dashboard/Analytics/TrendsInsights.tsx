import React, { useState } from 'react';
import { 
  TrendingUp,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Battery,
  Clock,
  DollarSign
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const TrendsInsights = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const trends = [
    {
      title: "Usage Growth",
      value: "+23%",
      change: "8.5%",
      trend: "up",
      icon: TrendingUp
    },
    {
      title: "Active Users",
      value: "1,245",
      change: "12%",
      trend: "up",
      icon: Users
    },
    {
      title: "Avg Session Duration",
      value: "45 min",
      change: "-5%",
      trend: "down",
      icon: Clock
    },
    {
      title: "Revenue",
      value: "$12,450",
      change: "15%",
      trend: "up",
      icon: DollarSign
    }
  ];

  const usageData = [
    { date: '2024-03-01', value: 4200 },
    { date: '2024-03-02', value: 4500 },
    { date: '2024-03-03', value: 5100 },
    { date: '2024-03-04', value: 4800 },
    { date: '2024-03-05', value: 5300 },
    { date: '2024-03-06', value: 5800 },
    { date: '2024-03-07', value: 5500 }
  ];

  const sessionDistribution = [
    { name: 'Morning', value: 35 },
    { name: 'Afternoon', value: 40 },
    { name: 'Evening', value: 20 },
    { name: 'Night', value: 5 }
  ];

  const COLORS = ['#0ea5e9', '#10b981', '#6366f1', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Trends & Insights</h1>
          <p className="text-secondary-600">Discover patterns and insights in your charging data</p>
        </div>
        <div className="flex space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm border-0"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
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

      {/* Trend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trends.map((trend) => (
          <div key={trend.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="bg-primary-100 p-3 rounded-xl">
                <trend.icon className="h-6 w-6 text-primary-600" />
              </div>
              <span className={`flex items-center text-sm font-medium ${
                trend.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.change}
                {trend.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                )}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-secondary-900">
              {trend.value}
            </h3>
            <p className="text-secondary-600">{trend.title}</p>
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
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0ea5e9"
                  fillOpacity={1}
                  fill="url(#colorUsage)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Session Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Session Distribution
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sessionDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sessionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {sessionDistribution.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-secondary-600">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Key Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Peak Usage Times",
              description: "Highest utilization occurs between 2 PM and 4 PM",
              change: "+15% vs last period"
            },
            {
              title: "User Behavior",
              description: "Average user charges 2.3 times per week",
              change: "+5% vs last period"
            },
            {
              title: "Revenue Growth",
              description: "Monthly revenue increased by 23%",
              change: "+8% vs target"
            }
          ].map((insight) => (
            <div
              key={insight.title}
              className="bg-secondary-50 rounded-lg p-4"
            >
              <h4 className="font-medium text-secondary-900">{insight.title}</h4>
              <p className="mt-1 text-sm text-secondary-600">{insight.description}</p>
              <p className="mt-2 text-sm text-green-600">{insight.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsInsights;