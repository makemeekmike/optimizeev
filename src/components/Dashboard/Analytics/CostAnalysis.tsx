import React, { useState } from 'react';
import { 
  DollarSign,
  Calendar,
  Download,
  Filter,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Battery,
  Settings
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const CostAnalysis = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,250",
      change: "+12%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Operating Costs",
      value: "$12,450",
      change: "-5%",
      trend: "down",
      icon: Settings
    },
    {
      title: "Energy Costs",
      value: "$8,920",
      change: "+3%",
      trend: "up",
      icon: Zap
    },
    {
      title: "Net Profit",
      value: "$23,880",
      change: "+15%",
      trend: "up",
      icon: TrendingUp
    }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 38000, costs: 15000 },
    { month: 'Feb', revenue: 42000, costs: 16500 },
    { month: 'Mar', revenue: 45250, costs: 17200 },
    { month: 'Apr', revenue: 41000, costs: 16000 },
    { month: 'May', revenue: 43500, costs: 16800 },
    { month: 'Jun', revenue: 47000, costs: 17500 }
  ];

  const costBreakdown = [
    { name: 'Energy', value: 45 },
    { name: 'Maintenance', value: 25 },
    { name: 'Operations', value: 20 },
    { name: 'Other', value: 10 }
  ];

  const COLORS = ['#0ea5e9', '#10b981', '#6366f1', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Cost Analysis</h1>
          <p className="text-secondary-600">Track revenue, costs, and profitability</p>
        </div>
        <div className="flex space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white rounded-lg shadow-sm border-0"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
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

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="bg-primary-100 p-3 rounded-xl">
                <metric.icon className="h-6 w-6 text-primary-600" />
              </div>
              <span className={`flex items-center text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                )}
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
        {/* Revenue vs Costs */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Revenue vs Costs
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#0ea5e9" name="Revenue" />
                <Bar dataKey="costs" fill="#ef4444" name="Costs" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">
            Cost Breakdown
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {costBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {costBreakdown.map((item, index) => (
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

      {/* Cost Optimization Suggestions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">
          Cost Optimization Suggestions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Energy Usage Optimization",
              description: "Implement smart load balancing to reduce peak energy costs",
              potential: "Potential savings: $2,500/month"
            },
            {
              title: "Maintenance Schedule",
              description: "Optimize maintenance intervals based on usage patterns",
              potential: "Potential savings: $1,200/month"
            },
            {
              title: "Dynamic Pricing",
              description: "Adjust pricing based on demand and energy costs",
              potential: "Potential revenue increase: $3,000/month"
            }
          ].map((suggestion) => (
            <div
              key={suggestion.title}
              className="bg-secondary-50 rounded-lg p-4"
            >
              <h4 className="font-medium text-secondary-900">{suggestion.title}</h4>
              <p className="mt-1 text-sm text-secondary-600">{suggestion.description}</p>
              <p className="mt-2 text-sm text-green-600">{suggestion.potential}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostAnalysis;