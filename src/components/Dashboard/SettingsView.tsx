import React, { useState } from 'react';
import { 
  Settings,
  Users,
  Shield,
  Bell,
  Globe,
  Palette,
  Key,
  Mail,
  Smartphone,
  Lock,
  Building2,
  CreditCard,
  ChevronRight
} from 'lucide-react';

const SettingsView = () => {
  const [activeSection, setActiveSection] = useState('general');

  const settingsSections = [
    {
      id: 'general',
      name: 'General Settings',
      icon: Settings,
      description: 'Basic configuration and preferences'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      description: 'Security settings and authentication'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: Bell,
      description: 'Alert and notification preferences'
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: Globe,
      description: 'Third-party service connections'
    },
    {
      id: 'appearance',
      name: 'Appearance',
      icon: Palette,
      description: 'Customize the interface'
    },
    {
      id: 'billing',
      name: 'Billing',
      icon: CreditCard,
      description: 'Subscription and payment settings'
    }
  ];

  const organizationSettings = {
    name: "FleetCo Inc.",
    email: "admin@fleetco.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fleet Street, Detroit, MI 48201",
    timezone: "America/Detroit",
    dateFormat: "MM/DD/YYYY",
    language: "English (US)"
  };

  const securitySettings = {
    mfaEnabled: true,
    lastPasswordChange: "2024-02-15",
    sessionTimeout: "4 hours",
    ipWhitelist: ["192.168.1.0/24"],
    apiKeys: [
      { name: "Production API", created: "2024-01-15", lastUsed: "2024-03-01" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Settings</h1>
          <p className="text-secondary-600">Manage your account and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm">
            <nav className="space-y-1 p-4">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-secondary-600 hover:bg-secondary-50'
                  }`}
                >
                  <section.icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Organization Profile */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-secondary-900">
                  Organization Profile
                </h2>
                <p className="text-secondary-500">
                  Manage your organization's information
                </p>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700">
                  Organization Name
                </label>
                <input
                  type="text"
                  value={organizationSettings.name}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={organizationSettings.email}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={organizationSettings.phone}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700">
                  Address
                </label>
                <input
                  type="text"
                  value={organizationSettings.address}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-900"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-secondary-900">
                  Security Settings
                </h2>
                <p className="text-secondary-500">
                  Manage your security preferences
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-secondary-900 font-medium">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {securitySettings.mfaEnabled ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Configure
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center">
                  <Key className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-secondary-900 font-medium">
                      API Keys
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {securitySettings.apiKeys.length} active keys
                    </p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Manage
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-secondary-900 font-medium">
                      IP Whitelist
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {securitySettings.ipWhitelist.length} addresses configured
                    </p>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  Configure
                </button>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-secondary-900">
                  Notification Preferences
                </h2>
                <p className="text-secondary-500">
                  Manage how you receive notifications
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-secondary-900 font-medium">
                      Email Notifications
                    </h3>
                    <p className="text-sm text-secondary-500">
                      Receive updates via email
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-secondary-900 font-medium">
                      Mobile Notifications
                    </h3>
                    <p className="text-sm text-secondary-500">
                      Receive updates via mobile app
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;