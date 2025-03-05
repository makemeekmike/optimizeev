import React, { useState } from 'react';
import { PenTool as Tool, Calendar, AlertTriangle, Clock, CheckCircle, Filter, Plus, Search, Settings, BarChart, Package, FileText } from 'lucide-react';

const MaintenanceView = () => {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  const maintenanceSchedule = [
    {
      id: "M-001",
      stationId: "A-15",
      type: "Preventive",
      description: "Routine inspection and component check",
      scheduledDate: "2024-03-15",
      priority: "medium",
      status: "scheduled",
      healthScore: 85,
      components: [
        { name: "Connector", status: "good", nextCheck: "2024-03-15" },
        { name: "Power Module", status: "attention", nextCheck: "2024-03-10" },
        { name: "Display", status: "good", nextCheck: "2024-04-01" }
      ]
    },
    {
      id: "M-002",
      stationId: "B-22",
      type: "Predictive",
      description: "Power module replacement recommended",
      scheduledDate: "2024-03-10",
      priority: "high",
      status: "pending",
      healthScore: 72,
      components: [
        { name: "Connector", status: "good", nextCheck: "2024-03-20" },
        { name: "Power Module", status: "warning", nextCheck: "2024-03-10" },
        { name: "Display", status: "good", nextCheck: "2024-03-25" }
      ]
    },
    {
      id: "M-003",
      stationId: "C-08",
      type: "Corrective",
      description: "Connector repair needed",
      scheduledDate: "2024-03-05",
      priority: "critical",
      status: "in-progress",
      healthScore: 65,
      components: [
        { name: "Connector", status: "critical", nextCheck: "2024-03-05" },
        { name: "Power Module", status: "good", nextCheck: "2024-03-15" },
        { name: "Display", status: "good", nextCheck: "2024-03-20" }
      ]
    }
  ];

  const partsInventory = [
    { name: "DC Fast Charging Connector", stock: 5, reorderPoint: 3 },
    { name: "Power Module", stock: 2, reorderPoint: 2 },
    { name: "Display Unit", stock: 3, reorderPoint: 2 },
    { name: "Circuit Breaker", stock: 8, reorderPoint: 5 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Maintenance Management</h1>
          <p className="text-secondary-600">Predictive maintenance and service tracking</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Schedule Maintenance
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search maintenance records..."
              className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Types</option>
            <option>Preventive</option>
            <option>Predictive</option>
            <option>Corrective</option>
          </select>
          <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Stations</option>
            <option>Active Stations</option>
            <option>Maintenance Required</option>
          </select>
        </div>
      </div>

      {/* Maintenance Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Maintenance */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-secondary-900">Maintenance Schedule</h2>
          {maintenanceSchedule.map((maintenance) => (
            <div
              key={maintenance.id}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    maintenance.priority === 'critical' ? 'bg-red-100' :
                    maintenance.priority === 'high' ? 'bg-amber-100' :
                    'bg-blue-100'
                  }`}>
                    <Tool className={`h-5 w-5 ${
                      maintenance.priority === 'critical' ? 'text-red-600' :
                      maintenance.priority === 'high' ? 'text-amber-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-secondary-900">
                      Station {maintenance.stationId}
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {maintenance.type} Maintenance
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-secondary-400 mr-2" />
                  <span className="text-secondary-600">{maintenance.scheduledDate}</span>
                </div>
              </div>

              <p className="text-secondary-600 mb-4">{maintenance.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {maintenance.components.map((component) => (
                  <div
                    key={component.name}
                    className="bg-secondary-50 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-secondary-900">
                        {component.name}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        component.status === 'good' ? 'bg-green-500' :
                        component.status === 'attention' ? 'bg-amber-500' :
                        component.status === 'warning' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`} />
                    </div>
                    <div className="flex items-center text-xs text-secondary-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {component.nextCheck}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                <div className="flex items-center">
                  <div className="w-full bg-secondary-200 rounded-full h-2 mr-2">
                    <div
                      className={`h-2 rounded-full ${
                        maintenance.healthScore >= 80 ? 'bg-green-500' :
                        maintenance.healthScore >= 60 ? 'bg-amber-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${maintenance.healthScore}%` }}
                    />
                  </div>
                  <span className="text-sm text-secondary-600">
                    Health Score: {maintenance.healthScore}%
                  </span>
                </div>
                <button className="flex items-center text-primary-600 hover:text-primary-700">
                  <Settings className="h-4 w-4 mr-1" />
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Parts Inventory */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-secondary-900">Parts Inventory</h2>
              <button className="text-primary-600 hover:text-primary-700">
                Manage Inventory
              </button>
            </div>
            <div className="space-y-4">
              {partsInventory.map((part) => (
                <div
                  key={part.name}
                  className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-secondary-400 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">{part.name}</p>
                      <p className="text-xs text-secondary-500">
                        Reorder Point: {part.reorderPoint}
                      </p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-sm ${
                    part.stock > part.reorderPoint
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {part.stock} in stock
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Generate Report</span>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Schedule Service</span>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Order Parts</span>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceView;