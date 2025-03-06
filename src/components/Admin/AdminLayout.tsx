import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Shield,
  Bell, 
  LogOut,
  ChevronDown,
  Search,
  Menu,
  Battery,
  MessageSquare,
  Building2,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const systemAlerts = [
    {
      id: 1,
      title: "High System Load Detected",
      description: "System load exceeded 80% threshold",
      time: "5 minutes ago",
      type: "warning"
    },
    {
      id: 2,
      title: "New Client Organization Added",
      description: "FleetCo Inc. has been onboarded",
      time: "30 minutes ago",
      type: "info"
    },
    {
      id: 3,
      title: "Database Backup Completed",
      description: "Daily backup completed successfully",
      time: "1 hour ago",
      type: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-secondary-900 text-white transition-all duration-300 z-30 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 border-b border-secondary-700">
          <div className="flex items-center">
            <Battery className="h-8 w-8 text-primary-500" />
            {isSidebarOpen && (
              <span className="ml-2 text-xl font-bold text-white">Admin Portal</span>
            )}
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a 
                href="/admin" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/organizations" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <Building2 className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Organizations</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/users" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <Users className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Users</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/security" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <Shield className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Security</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/alerts" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <AlertTriangle className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">System Alerts</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/logs" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <FileText className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">System Logs</span>}
              </a>
            </li>
            <li>
              <a 
                href="/admin/settings" 
                className="flex items-center p-3 text-secondary-300 hover:bg-secondary-800 rounded-xl group transition-colors"
              >
                <Settings className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm fixed right-0 left-0 z-20" style={{ left: isSidebarOpen ? '16rem' : '5rem' }}>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg text-secondary-400 hover:bg-secondary-100"
              >
                {isSidebarOpen ? <ChevronDown className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              <div className="ml-4 relative">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-secondary-400 absolute left-3" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-secondary-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-secondary-400 hover:text-secondary-500 relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-secondary-200">
                      <h3 className="text-sm font-semibold text-secondary-900">System Alerts</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {systemAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className="px-4 py-3 hover:bg-secondary-50 cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-secondary-900">
                              {alert.title}
                            </p>
                            <span className="text-xs text-secondary-500">
                              {alert.time}
                            </span>
                          </div>
                          <p className="text-sm text-secondary-600 mt-1">
                            {alert.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-secondary-700">Admin</span>
                  <ChevronDown className="h-4 w-4 text-secondary-400" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
                    <a
                      href="/admin/profile"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      Your Profile
                    </a>
                    <a
                      href="/admin/settings"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      Settings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-secondary-50"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="pt-20 p-6">
          {children || <div className="p-8 text-center text-lg text-secondary-600">Admin Dashboard Home</div>}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;