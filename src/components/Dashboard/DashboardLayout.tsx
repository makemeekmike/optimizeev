import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity,
  Map,
  Zap,
  AlertTriangle,
  Settings,
  Users,
  Bell,
  LogOut,
  ChevronDown,
  Search,
  Menu,
  Battery,
  MessageSquare,
  Wrench,
  FileText,
  Database,
  Shield,
  HelpCircle,
  Star,
  Clock,
  BarChart,
  UserCog,
  Key
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../Auth/AuthContext';

// Define navigation structure
const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    subItems: [
      { name: 'Overview', href: '/dashboard' },
      { name: 'Quick Actions', href: '/dashboard/quick-actions' },
      { name: 'Favorites', href: '/dashboard/favorites' },
      { name: 'Recent Views', href: '/dashboard/recent' }
    ]
  },
  {
    name: 'Monitoring',
    href: '/dashboard/monitoring',
    icon: Activity,
    subItems: [
      { name: 'Network Overview', href: '/dashboard/monitoring/overview' },
      { name: 'Station Map', href: '/dashboard/monitoring/map' },
      { name: 'Active Sessions', href: '/dashboard/monitoring/sessions' },
      { name: 'Real-time Alerts', href: '/dashboard/monitoring/alerts' },
      { name: 'Performance Metrics', href: '/dashboard/monitoring/metrics' }
    ]
  },
  {
    name: 'Stations',
    href: '/dashboard/stations',
    icon: Battery,
    subItems: [
      { name: 'Station Directory', href: '/dashboard/stations' },
      { name: 'Group Management', href: '/dashboard/stations/groups' },
      { name: 'Configuration Templates', href: '/dashboard/stations/templates' },
      { name: 'Maintenance Schedule', href: '/dashboard/stations/maintenance' },
      { name: 'Connection Status', href: '/dashboard/stations/status' }
    ]
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart,
    subItems: [
      { name: 'Performance Dashboard', href: '/dashboard/analytics' },
      { name: 'Custom Reports', href: '/dashboard/analytics/reports' },
      { name: 'Data Explorer', href: '/dashboard/analytics/explorer' },
      { name: 'Trends & Insights', href: '/dashboard/analytics/trends' },
      { name: 'Cost Analysis', href: '/dashboard/analytics/costs' }
    ]
  },
  {
    name: 'Maintenance',
    href: '/dashboard/maintenance',
    icon: Wrench,
    subItems: [
      { name: 'Predictive Alerts', href: '/dashboard/maintenance/alerts' },
      { name: 'Service History', href: '/dashboard/maintenance/history' },
      { name: 'Scheduled Maintenance', href: '/dashboard/maintenance/schedule' },
      { name: 'Component Health', href: '/dashboard/maintenance/health' },
      { name: 'Work Orders', href: '/dashboard/maintenance/orders' }
    ]
  },
  {
    name: 'Alerts',
    href: '/dashboard/alerts',
    icon: AlertTriangle,
    subItems: [
      { name: 'Active Alerts', href: '/dashboard/alerts' },
      { name: 'Alert History', href: '/dashboard/alerts/history' },
      { name: 'Configure Rules', href: '/dashboard/alerts/rules' },
      { name: 'Notification Settings', href: '/dashboard/alerts/settings' },
      { name: 'Escalation Policies', href: '/dashboard/alerts/escalation' }
    ]
  },
  {
    name: 'Administration',
    href: '/dashboard/admin',
    icon: Settings,
    subItems: [
      { name: 'User Management', href: '/dashboard/admin/users' },
      { name: 'Role Configuration', href: '/dashboard/admin/roles' },
      { name: 'Security Settings', href: '/dashboard/admin/security' },
      { name: 'API Keys', href: '/dashboard/admin/api-keys' },
      { name: 'Integration Setup', href: '/dashboard/admin/integrations' }
    ]
  }
];

// Quick access items
const quickAccessItems = [
  { name: 'Pinned Items', icon: Star },
  { name: 'Recent Views', icon: Clock },
  { name: 'Saved Searches', icon: Search },
  { name: 'Favorites', icon: Star }
];

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [userDisplayName, setUserDisplayName] = useState('');

  useEffect(() => {
    // Get user's name or use email as fallback
    if (user) {
      // Check if we can get name from user metadata
      const metadata = user.user_metadata;
      if (metadata && (metadata.first_name || metadata.full_name || metadata.name)) {
        setUserDisplayName(metadata.full_name || metadata.name || metadata.first_name);
      } else {
        // Extract username from email (remove @domain.com part)
        const emailName = user.email ? user.email.split('@')[0] : '';
        // Format the email name (capitalize first letter of each word)
        const formattedName = emailName
          .split(/[._-]/)
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        
        setUserDisplayName(formattedName);
      }
    }
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const notifications = [
    {
      id: 1,
      title: "Station A-15 Maintenance Required",
      description: "Predicted voltage fluctuation within 48 hours",
      time: "10 minutes ago",
      type: "warning"
    },
    {
      id: 2,
      title: "New Firmware Update Available",
      description: "Version 2.4.0 ready for deployment",
      time: "1 hour ago",
      type: "info"
    },
    {
      id: 3,
      title: "Station B-22 Offline",
      description: "Connection lost - investigating cause",
      time: "2 hours ago",
      type: "error"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-all duration-300 z-30 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 border-b border-secondary-200">
          <div className="flex items-center">
            <Battery className="h-8 w-8 text-primary-600" />
            {isSidebarOpen && (
              <span className="ml-2 text-xl font-bold text-primary-600">OptimizeEV</span>
            )}
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setExpandedSection(
                    expandedSection === item.name ? null : item.name
                  )}
                  className={`w-full flex items-center justify-between p-3 text-secondary-600 hover:bg-primary-50 rounded-lg transition-colors ${
                    expandedSection === item.name ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 text-primary-600" />
                    {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                  </div>
                  {isSidebarOpen && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedSection === item.name ? 'transform rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {isSidebarOpen && expandedSection === item.name && (
                  <div className="ml-9 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 px-3 text-sm text-secondary-600 hover:text-primary-600 rounded-lg"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          {isSidebarOpen && (
            <div className="mt-6 pt-6 border-t border-secondary-200">
              <h3 className="px-3 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
                Quick Access
              </h3>
              <div className="mt-2 space-y-1">
                {quickAccessItems.map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center px-3 py-2 text-sm text-secondary-600 hover:bg-primary-50 rounded-lg"
                  >
                    <item.icon className="h-4 w-4 text-secondary-500 mr-3" />
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
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
              <div className="flex-1 flex items-center justify-end">
                <div className="hidden md:block mr-4">
                  <span className="text-secondary-700">
                    Welcome, <span className="font-medium">{userDisplayName}</span>
                  </span>
                </div>
              </div>

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
                      <h3 className="text-sm font-semibold text-secondary-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 hover:bg-secondary-50 cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-secondary-900">
                              {notification.title}
                            </p>
                            <span className="text-xs text-secondary-500">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-sm text-secondary-600 mt-1">
                            {notification.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="p-2 text-secondary-400 hover:text-secondary-500">
                <MessageSquare className="h-5 w-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
                    {userDisplayName.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-secondary-700">{userDisplayName || user?.email || 'User'}</span>
                  <ChevronDown className="h-4 w-4 text-secondary-400" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      Your Profile
                    </a>
                    <a
                      href="/settings"
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
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;