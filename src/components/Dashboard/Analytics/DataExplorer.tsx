import React, { useState } from 'react';
import { 
  Database,
  Filter,
  Download,
  Search,
  BarChart,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Table,
  Play,
  Save,
  Share
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const DataExplorer = () => {
  const [queryInput, setQueryInput] = useState('');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [visualizationType, setVisualizationType] = useState('line');

  const sampleData = [
    { timestamp: '2024-03-01', value: 65 },
    { timestamp: '2024-03-02', value: 72 },
    { timestamp: '2024-03-03', value: 68 },
    { timestamp: '2024-03-04', value: 75 },
    { timestamp: '2024-03-05', value: 80 },
    { timestamp: '2024-03-06', value: 85 },
    { timestamp: '2024-03-07', value: 82 }
  ];

  const availableMetrics = [
    { id: 'energy_delivered', name: 'Energy Delivered (kWh)' },
    { id: 'peak_power', name: 'Peak Power (kW)' },
    { id: 'charging_duration', name: 'Charging Duration (min)' },
    { id: 'utilization_rate', name: 'Utilization Rate (%)' },
    { id: 'revenue', name: 'Revenue ($)' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Data Explorer</h1>
          <p className="text-secondary-600">Analyze and visualize your charging network data</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Save className="h-5 w-5 text-secondary-600 mr-2" />
            Save Query
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Share className="h-5 w-5 mr-2" />
            Share
          </button>
        </div>
      </div>

      {/* Query Builder */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Select Metrics
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {availableMetrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetrics(prev => 
                    prev.includes(metric.id) 
                      ? prev.filter(id => id !== metric.id)
                      : [...prev, metric.id]
                  )}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    selectedMetrics.includes(metric.id)
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                      : 'bg-secondary-50 text-secondary-700 border-2 border-transparent'
                  }`}
                >
                  {metric.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Query Input
            </label>
            <div className="flex space-x-4">
              <textarea
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Enter your query or use the visual query builder..."
                className="flex-1 p-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={4}
              />
              <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                <Play className="h-5 w-5 mr-2" />
                Run Query
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visualization Options */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-secondary-900">
            Visualization
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setVisualizationType('line')}
              className={`p-2 rounded-lg ${
                visualizationType === 'line'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-secondary-400 hover:text-secondary-600'
              }`}
            >
              <LineChartIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setVisualizationType('bar')}
              className={`p-2 rounded-lg ${
                visualizationType === 'bar'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-secondary-400 hover:text-secondary-600'
              }`}
            >
              <BarChart className="h-5 w-5" />
            </button>
            <button
              onClick={() => setVisualizationType('pie')}
              className={`p-2 rounded-lg ${
                visualizationType === 'pie'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-secondary-400 hover:text-secondary-600'
              }`}
            >
              <PieChartIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setVisualizationType('table')}
              className={`p-2 rounded-lg ${
                visualizationType === 'table'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-secondary-400 hover:text-secondary-600'
              }`}
            >
              <Table className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="timestamp" />
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

      {/* Export Options */}
      <div className="flex justify-end space-x-4">
        <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
          <Download className="h-5 w-5 text-secondary-600 mr-2" />
          Export Data
        </button>
        <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
          <Download className="h-5 w-5 text-secondary-600 mr-2" />
          Export Chart
        </button>
      </div>
    </div>
  );
};

export default DataExplorer;