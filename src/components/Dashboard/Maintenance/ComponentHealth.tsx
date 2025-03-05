import React, { useState } from 'react';
import { 
  Settings,
  AlertTriangle,
  Battery,
  Thermometer,
  Zap,
  Clock,
  Calendar,
  Filter,
  Download,
  ChevronRight
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

const ComponentHealth = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const components = [
    {
      id: "C1",
      name: "Power Module",
      station: "Station A-15",
      health: 92,
      status: "good",
      lastCheck: "2024-03-01",
      nextCheck: "2024-04-01",
      metrics: {
        temperature: "65°C",
        voltage: "400V",
        current: "125A",
        efficiency: "95%"
      },
      history: [
        { date: '2024-01', health: 98 },
        { date: '2024-02', health: 95 },
        { date: '2024-03', health: 92 }
      ]
    },
    {
      id: "C2",
      name: "Charging Connector",
      station: "Station B-22",
      health: 78,
      status: "warning",
      lastCheck: "2024-02-15",
      nextCheck: "2024-03-15",
      metrics: {
        temperature: "45°C",
        voltage: "400V",
        current: "120A",
        efficiency: "92%"
      },
      history: [
        { date: '2024-01', health: 95 },
        { date: '2024-02', health: 85 },
        { date: '2024-03', health: 78 }
      ]
    },
    {
      id: "C3",
      name: "Cooling System",
      station: "Station C-08",
      health: 65,
      status: "critical",
      lastCheck: "2024-02-28",
      nextCheck: "2024-03-07",
      metrics: {
        temperature: "85°C",
        voltage: "400V",
        current: "115A",
        efficiency: "88%"
      },
      history: [
        { date: '2024-01', health: 90 },
        { date: '2024-02', health: 75 },
        { date: '2024-03', health: 65 }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Component Health</h1>
          <p className="text-secondary-600">Monitor and analyze component performance</p>
        </div>
        <div className="flex space-x-4">
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

      {/* Component Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <div
            key={component.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
              selectedComponent === component.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onClick={() => setSelectedComponent(component.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    component.status === 'good' ? 'bg-green-100' :
                    component.status === 'warning' ? 'bg-amber-100' :
                    'bg-red-100'
                  }`}>
                    <Settings className={`h-5 w-5 ${
                      component.status === 'good' ? 'text-green-600' :
                      component.status === 'warning' ? 'text-amber-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">
                      {component.name}
                    </h3>
                    <p className="text-sm text-secondary-500">{component.station}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary-900">
                    {component.health}%
                  </div>
                  <div className="text-sm text-secondary-500">Health Score</div>
                </div>
              </div>

              <div className="h-32 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={component.history}>
                    <Line
                      type="monotone"
                      dataKey="health"
                      stroke={
                        component.status === 'good' ? '#10B981' :
                        component.status === 'warning' ? '#F59E0B' :
                        '#EF4444'
                      }
                      strokeWidth={2}
                      dot={false}
                    />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} hide />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Thermometer className="h-4 w-4 mr-2" />
                    Temperature
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {component.metrics.temperature}
                  </p>
                </div>

                <div className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-secondary-600">
                    <Zap className="h-4 w-4 mr-2" />
                    Efficiency
                  </div>
                  <p className="mt-1 text-lg font-medium text-secondary-900">
                    {component.metrics.efficiency}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-secondary-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Last check: {component.lastCheck}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Next check: {component.nextCheck}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-secondary-50 rounded-b-xl">
              <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700">
                View Details
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentHealth;