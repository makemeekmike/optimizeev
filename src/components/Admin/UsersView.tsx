import React, { useState } from 'react';
import { 
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  Shield,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';

const UsersView = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const users = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@fleetco.com",
      organization: "FleetCo Inc.",
      role: "Admin",
      status: "active",
      lastActive: "5 minutes ago",
      phone: "+1 (555) 123-4567",
      joinDate: "Jan 15, 2024"
    },
    {
      id: "2",
      name: "Sarah Chen",
      email: "sarah.chen@greencharge.com",
      organization: "GreenCharge Networks",
      role: "Manager",
      status: "active",
      lastActive: "2 hours ago",
      phone: "+1 (555) 234-5678",
      joinDate: "Dec 1, 2023"
    },
    {
      id: "3",
      name: "Michael Johnson",
      email: "m.johnson@metro.gov",
      organization: "Metro Transit Authority",
      role: "Operator",
      status: "inactive",
      lastActive: "2 days ago",
      phone: "+1 (555) 345-6789",
      joinDate: "Feb 1, 2024"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Users</h1>
          <p className="text-secondary-600">Manage system users and their permissions</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="relative max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary-200">
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">User</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Organization</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Role</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Last Active</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr 
                  key={user.id}
                  className="border-b border-secondary-100 hover:bg-secondary-50 cursor-pointer"
                  onClick={() => setSelectedUser(user.id)}
                >
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-600 font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-secondary-900">{user.name}</div>
                        <div className="text-sm text-secondary-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-secondary-600">{user.organization}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-secondary-900">{user.role}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-secondary-600">{user.lastActive}</td>
                  <td className="p-4">
                    <button className="p-2 hover:bg-secondary-100 rounded-lg">
                      <MoreVertical className="h-5 w-5 text-secondary-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected User Details */}
      {selectedUser && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-secondary-900 mb-6">
            User Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {users
              .find(user => user.id === selectedUser)
              ?.email && (
              <div className="p-4 bg-secondary-50 rounded-xl">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-secondary-900">Email</span>
                </div>
                <p className="mt-2 text-secondary-600">
                  {users.find(user => user.id === selectedUser)?.email}
                </p>
              </div>
            )}
            <div className="p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-secondary-900">Phone</span>
              </div>
              <p className="mt-2 text-secondary-600">
                {users.find(user => user.id === selectedUser)?.phone}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-secondary-900">Join Date</span>
              </div>
              <p className="mt-2 text-secondary-600">
                {users.find(user => user.id === selectedUser)?.joinDate}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center">
                {users.find(user => user.id === selectedUser)?.status === 'active' ? (
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 mr-2" />
                )}
                <span className="text-sm font-medium text-secondary-900">Account Status</span>
              </div>
              <p className="mt-2 text-secondary-600">
                {users.find(user => user.id === selectedUser)?.status.charAt(0).toUpperCase() + 
                 users.find(user => user.id === selectedUser)?.status.slice(1)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersView;