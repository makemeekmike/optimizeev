import React, { useState } from 'react';
import { 
  Wrench,
  Calendar,
  Clock,
  User,
  MapPin,
  Plus,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const WorkOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const workOrders = [
    {
      id: "WO-001",
      title: "Connector Replacement",
      station: "Station A-15",
      priority: "high",
      status: "pending",
      assignedTo: "John Smith",
      scheduledDate: "2024-03-15",
      estimatedDuration: "2 hours",
      description: "Replace charging connector showing signs of wear",
      parts: ["DC Fast Charging Connector", "Mounting Hardware"]
    },
    {
      id: "WO-002",
      title: "Cooling System Maintenance",
      station: "Station B-22",
      priority: "critical",
      status: "in_progress",
      assignedTo: "Sarah Chen",
      scheduledDate: "2024-03-10",
      estimatedDuration: "3 hours",
      description: "Investigate and repair cooling system malfunction",
      parts: ["Coolant", "Temperature Sensor"]
    },
    {
      id: "WO-003",
      title: "Routine Inspection",
      station: "Station C-08",
      priority: "normal",
      status: "completed",
      assignedTo: "Mike Johnson",
      scheduledDate: "2024-03-05",
      estimatedDuration: "1 hour",
      description: "Perform quarterly maintenance inspection",
      parts: []
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Work Orders</h1>
          <p className="text-secondary-600">Manage maintenance tasks and assignments</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Order
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="relative max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search work orders..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Work Orders List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Work Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Station
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Scheduled Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {workOrders.map((order) => (
                <tr
                  key={order.id}
                  className={`hover:bg-secondary-50 cursor-pointer ${
                    selectedOrder === order.id ? 'bg-secondary-50' : ''
                  }`}
                  onClick={() => setSelectedOrder(order.id)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Wrench className="h-5 w-5 text-primary-600 mr-2" />
                      <div>
                        <div className="font-medium text-secondary-900">{order.title}</div>
                        <div className="text-sm text-secondary-500">{order.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{order.station}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      order.priority === 'high' ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.priority.charAt(0).toUpperCase() + order.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {order.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : order.status === 'in_progress' ? (
                        <Clock className="h-5 w-5 text-amber-500 mr-2" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-blue-500 mr-2" />
                      )}
                      <span className="capitalize text-secondary-900">
                        {order.status.replace('_', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{order.assignedTo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary-400 mr-2" />
                      <span className="text-secondary-900">{order.scheduledDate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Work Order Details */}
      {selectedOrder && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">
            Work Order Details
          </h3>
          {workOrders.find(order => order.id === selectedOrder) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Description</h4>
                <p className="text-secondary-600">
                  {workOrders.find(order => order.id === selectedOrder)?.description}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Required Parts</h4>
                <ul className="space-y-2">
                  {workOrders.find(order => order.id === selectedOrder)?.parts.map((part) => (
                    <li key={part} className="flex items-center text-secondary-600">
                      <Wrench className="h-4 w-4 text-secondary-400 mr-2" />
                      {part}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkOrders;