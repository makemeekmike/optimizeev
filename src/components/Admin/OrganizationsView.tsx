import React, { useState } from 'react';
import { 
  Building2,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Users,
  Battery,
  TrendingUp,
  Calendar,
  ChevronRight
} from 'lucide-react';

const OrganizationsView = () => {
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

  const organizations = [
    {
      id: "1",
      name: "FleetCo Inc.",
      type: "Fleet Operator",
      stations: 45,
      users: 120,
      status: "active",
      uptime: "98.5%",
      lastActive: "2 minutes ago",
      subscription: "Enterprise",
      revenue: "$45,000"
    },
    {
      id: "2",
      name: "GreenCharge Networks",
      type: "Network Provider",
      stations: 156,
      users: 280,
      status: "active",
      uptime: "99.1%",
      lastActive: "5 minutes ago",
      subscription: "Enterprise",
      revenue: "$125,000"
    },
    {
      id: "3",
      name: "Metro Transit Authority",
      type: "Public Transit",
      stations: 89,
      users: 150,
      status: "warning",
      uptime: "95.8%",
      lastActive: "12 minutes ago",
      subscription: "Professional",
      revenue: "$78,000"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Organizations</h1>
          <p className="text-secondary-600">Manage client organizations and their resources</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Add Organization
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="relative max-w-md">
          <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search organizations..."
            className="pl-10 pr-4 py-2 w-full border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Organizations List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary-200">
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Organization</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Type</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Stations</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Users</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Status</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Revenue</th>
                <th className="text-left p-4 text-sm font-semibold text-secondary-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <tr 
                  key={org.id}
                  className="border-b border-secondary-100 hover:bg-secondary-50 cursor-pointer"
                  onClick={() => setSelectedOrg(org.id)}
                >
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-secondary-900">{org.name}</div>
                        <div className="text-sm text-secondary-500">Last active {org.lastActive}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-secondary-600">{org.type}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Battery className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-secondary-900">{org.stations}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-secondary-900">{org.users}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      org.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {org.status.charAt(0).toUpperCase() + org.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-secondary-900">{org.revenue}</td>
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

      {/* Selected Organization Details */}
      {selectedOrg && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-secondary-900 mb-6">
            Organization Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizations
              .find(org => org.id === selectedOrg)
              ?.subscription && (
              <div className="p-4 bg-secondary-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-secondary-900">Subscription</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-secondary-400" />
                </div>
                <p className="mt-2 text-2xl font-semibold text-secondary-900">
                  {organizations.find(org => org.id === selectedOrg)?.subscription}
                </p>
              </div>
            )}
            <div className="p-4 bg-secondary-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-secondary-900">Uptime</span>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-secondary-900">
                {organizations.find(org => org.id === selectedOrg)?.uptime}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationsView;