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
  XCircle,
  ArrowLeft,
  Save,
  X,
  Edit,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [showOrderForm, setShowOrderForm] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    station: '',
    priority: 'normal',
    status: 'pending',
    assignedTo: '',
    scheduledDate: '',
    estimatedDuration: '',
    description: '',
    parts: [] as string[]
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newPart, setNewPart] = useState('');

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

  const stationOptions = [
    "Station A-15",
    "Station B-22",
    "Station C-08",
    "Station D-05",
    "Station E-12"
  ];

  const technicianOptions = [
    "John Smith",
    "Sarah Chen",
    "Mike Johnson",
    "David Wilson",
    "Emily Rodriguez"
  ];

  const partsOptions = [
    "DC Fast Charging Connector",
    "Mounting Hardware",
    "Coolant",
    "Temperature Sensor",
    "Circuit Board",
    "Display Panel",
    "Power Module",
    "Cable Assembly",
    "Network Interface Card"
  ];

  const handleCreateOrder = () => {
    setEditMode(false);
    setFormData({
      id: `WO-${String(workOrders.length + 1).padStart(3, '0')}`,
      title: '',
      station: '',
      priority: 'normal',
      status: 'pending',
      assignedTo: '',
      scheduledDate: new Date().toISOString().split('T')[0],
      estimatedDuration: '',
      description: '',
      parts: []
    });
    setShowOrderForm(true);
    setSelectedOrder(null);
  };

  const handleEditOrder = () => {
    if (!selectedOrder) return;
    
    const order = workOrders.find(o => o.id === selectedOrder);
    if (order) {
      setFormData({
        ...order
      });
      setEditMode(true);
      setShowOrderForm(true);
    }
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddPart = () => {
    if (newPart.trim() !== '') {
      setFormData(prev => ({
        ...prev,
        parts: [...prev.parts, newPart.trim()]
      }));
      setNewPart('');
    }
  };

  const handleRemovePart = (index: number) => {
    setFormData(prev => ({
      ...prev,
      parts: prev.parts.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it and close the form
    console.log('Submitting work order:', formData);
    
    // Close the form
    setShowOrderForm(false);
    
    // If we were editing, select the order again to show details
    if (editMode) {
      setSelectedOrder(formData.id);
    }
  };

  const filteredOrders = workOrders.filter(order => 
    order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.station.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Work Orders Form View
  if (showOrderForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center text-secondary-600 hover:text-primary-600"
            onClick={() => {
              handleCloseForm();
              navigate('/dashboard/maintenance/orders');
            }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Work Orders
          </button>
          <h1 className="text-xl font-bold text-secondary-900">
            {editMode ? 'Edit Work Order' : 'Create New Work Order'}
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">
                  Work Order Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter work order title"
                />
              </div>
              
              <div>
                <label htmlFor="station" className="block text-sm font-medium text-secondary-700 mb-1">
                  Station
                </label>
                <select
                  id="station"
                  name="station"
                  value={formData.station}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select a station</option>
                  {stationOptions.map(station => (
                    <option key={station} value={station}>{station}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-secondary-700 mb-1">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-secondary-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="assignedTo" className="block text-sm font-medium text-secondary-700 mb-1">
                  Assigned Technician
                </label>
                <select
                  id="assignedTo"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select a technician</option>
                  {technicianOptions.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="scheduledDate" className="block text-sm font-medium text-secondary-700 mb-1">
                  Scheduled Date
                </label>
                <input
                  type="date"
                  id="scheduledDate"
                  name="scheduledDate"
                  value={formData.scheduledDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="estimatedDuration" className="block text-sm font-medium text-secondary-700 mb-1">
                  Estimated Duration
                </label>
                <input
                  type="text"
                  id="estimatedDuration"
                  name="estimatedDuration"
                  value={formData.estimatedDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g. 2 hours"
                />
              </div>
            </div>
          </div>
          
          {/* Description - Full Width */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Detailed description of the work to be performed"
            ></textarea>
          </div>
          
          {/* Parts Selection */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-1">
              Required Parts
            </label>
            <div className="flex space-x-2 mb-2">
              <select
                value={newPart}
                onChange={(e) => setNewPart(e.target.value)}
                className="flex-1 px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select a part</option>
                {partsOptions.map(part => (
                  <option key={part} value={part}>{part}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddPart}
                className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            
            {/* Parts List */}
            <div className="bg-secondary-50 rounded-lg p-3">
              {formData.parts.length === 0 ? (
                <p className="text-secondary-500 text-sm">No parts added yet</p>
              ) : (
                <ul className="space-y-2">
                  {formData.parts.map((part, index) => (
                    <li key={index} className="flex justify-between items-center bg-white p-2 rounded-md">
                      <div className="flex items-center">
                        <Wrench className="h-4 w-4 text-secondary-400 mr-2" />
                        <span className="text-secondary-700">{part}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemovePart(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Submit Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-secondary-200">
            <button
              type="button"
              onClick={() => {
                handleCloseForm();
                navigate('/dashboard/maintenance/orders');
              }}
              className="px-4 py-2 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              <Save className="h-5 w-5 mr-2" />
              {editMode ? 'Update Work Order' : 'Create Work Order'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Work Orders List View
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
          <button 
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            onClick={handleCreateOrder}
          >
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              {filteredOrders.map((order) => (
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-secondary-900">
              Work Order Details
            </h3>
            <div className="flex space-x-2">
              <button 
                className="flex items-center px-3 py-1.5 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100"
                onClick={handleEditOrder}
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
              <button className="flex items-center px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
          
          {workOrders.find(order => order.id === selectedOrder) && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-secondary-50 p-4 rounded-lg">
                <div>
                  <p className="text-xs text-secondary-500 mb-1">Work Order ID</p>
                  <p className="text-secondary-900 font-medium">
                    {workOrders.find(order => order.id === selectedOrder)?.id}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 mb-1">Estimated Duration</p>
                  <p className="text-secondary-900 font-medium">
                    {workOrders.find(order => order.id === selectedOrder)?.estimatedDuration}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 mb-1">Status</p>
                  <div className="flex items-center">
                    {workOrders.find(order => order.id === selectedOrder)?.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : workOrders.find(order => order.id === selectedOrder)?.status === 'in_progress' ? (
                      <Clock className="h-4 w-4 text-amber-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-blue-500 mr-2" />
                    )}
                    <span className="capitalize text-secondary-900">
                      {workOrders.find(order => order.id === selectedOrder)?.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Description</h4>
                  <p className="text-secondary-600 bg-white p-4 rounded-lg border border-secondary-200">
                    {workOrders.find(order => order.id === selectedOrder)?.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Required Parts</h4>
                  <div className="bg-white p-4 rounded-lg border border-secondary-200">
                    {workOrders.find(order => order.id === selectedOrder)?.parts.length === 0 ? (
                      <p className="text-secondary-500 italic">No parts required</p>
                    ) : (
                      <ul className="space-y-2">
                        {workOrders.find(order => order.id === selectedOrder)?.parts.map((part) => (
                          <li key={part} className="flex items-center text-secondary-600">
                            <Wrench className="h-4 w-4 text-secondary-400 mr-2" />
                            {part}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-secondary-200">
                <h4 className="font-medium text-secondary-900 mb-3">Timeline</h4>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="h-full w-0.5 bg-secondary-200"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Work Order Created</p>
                      <p className="text-xs text-secondary-500">2024-03-01 09:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-amber-600" />
                      </div>
                      <div className="h-full w-0.5 bg-secondary-200"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">Assigned to {workOrders.find(order => order.id === selectedOrder)?.assignedTo}</p>
                      <p className="text-xs text-secondary-500">2024-03-02 11:15 AM</p>
                    </div>
                  </div>
                  
                  {workOrders.find(order => order.id === selectedOrder)?.status === 'in_progress' && (
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="h-full w-0.5 bg-secondary-200"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">Work Started</p>
                        <p className="text-xs text-secondary-500">2024-03-10 08:45 AM</p>
                      </div>
                    </div>
                  )}
                  
                  {workOrders.find(order => order.id === selectedOrder)?.status === 'completed' && (
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">Work Completed</p>
                        <p className="text-xs text-secondary-500">2024-03-05 14:20 PM</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkOrders;