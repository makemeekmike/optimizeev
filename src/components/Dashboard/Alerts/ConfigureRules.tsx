import React, { useState } from 'react';
import { 
  AlertTriangle,
  Plus,
  Settings,
  Edit,
  Trash2,
  Battery,
  Activity,
  Thermometer,
  Zap
} from 'lucide-react';

const ConfigureRules = () => {
  const [selectedRule, setSelectedRule] = useState<string | null>(null);

  const rules = [
    {
      id: "R1",
      name: "High Voltage Alert",
      description: "Trigger alert when voltage exceeds normal range",
      metric: "voltage",
      condition: "> 420V",
      duration: "5 minutes",
      priority: "high",
      status: "active"
    },
    {
      id: "R2",
      name: "Temperature Warning",
      description: "Monitor charging station temperature",
      metric: "temperature",
      condition: "> 75°C",
      duration: "2 minutes",
      priority: "critical",
      status: "active"
    },
    {
      id: "R3",
      name: "Low Efficiency Alert",
      description: "Alert when charging efficiency drops",
      metric: "efficiency",
      condition: "< 90%",
      duration: "10 minutes",
      priority: "medium",
      status: "active"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Alert Rules</h1>
          <p className="text-secondary-600">Configure and manage alert rules</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="h-5 w-5 mr-2" />
          Create Rule
        </button>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${
              selectedRule === rule.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onClick={() => setSelectedRule(rule.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-secondary-900">
                    {rule.name}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-secondary-400 hover:text-secondary-500">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-secondary-400 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-secondary-600 mb-4">{rule.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-500">Metric</span>
                  <span className="font-medium text-secondary-900">{rule.metric}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-500">Condition</span>
                  <span className="font-medium text-secondary-900">{rule.condition}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-500">Duration</span>
                  <span className="font-medium text-secondary-900">{rule.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-500">Priority</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rule.priority === 'critical' ? 'bg-red-100 text-red-800' :
                    rule.priority === 'high' ? 'bg-amber-100 text-amber-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {rule.priority.charAt(0).toUpperCase() + rule.priority.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-secondary-50 rounded-b-xl">
              <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700">
                <Settings className="h-4 w-4 mr-2" />
                Configure
              </button>
            </div>
          </div>
        ))}

        {/* Add New Rule Card */}
        <button className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-secondary-200 p-6 flex flex-col items-center justify-center text-secondary-400 hover:text-secondary-500">
          <Plus className="h-8 w-8 mb-2" />
          <span className="text-lg font-medium">Create New Rule</span>
        </button>
      </div>
    </div>
  );
};

export default ConfigureRules;