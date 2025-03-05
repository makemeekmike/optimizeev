import React, { useState } from 'react';
import { 
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
  Slack,
  Save,
  Plus,
  Trash2,
  Check
} from 'lucide-react';

const NotificationSettings = () => {
  const [saved, setSaved] = useState(false);

  const channels = [
    {
      id: 'email',
      name: 'Email Notifications',
      icon: Mail,
      enabled: true,
      recipients: ['admin@example.com', 'operations@example.com'],
      settings: {
        critical: true,
        high: true,
        medium: true,
        low: false
      }
    },
    {
      id: 'sms',
      name: 'SMS Notifications',
      icon: Smartphone,
      enabled: true,
      recipients: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      settings: {
        critical: true,
        high: true,
        medium: false,
        low: false
      }
    },
    {
      id: 'slack',
      name: 'Slack Integration',
      icon: Slack,
      enabled: false,
      recipients: ['#alerts', '#operations'],
      settings: {
        critical: true,
        high: true,
        medium: true,
        low: true
      }
    },
    {
      id: 'inapp',
      name: 'In-App Notifications',
      icon: Bell,
      enabled: true,
      recipients: [],
      settings: {
        critical: true,
        high: true,
        medium: true,
        low: true
      }
    }
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Notification Settings</h1>
          <p className="text-secondary-600">Configure how you receive alerts</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {saved ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              Saved!
            </>
          ) : (
            <>
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </>
          )}
        </button>
      </div>

      {/* Notification Channels */}
      <div className="grid grid-cols-1 gap-6">
        {channels.map((channel) => (
          <div key={channel.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <channel.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary-900">
                    {channel.name}
                  </h3>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={channel.enabled}
                />
                <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            {/* Priority Settings */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-secondary-900 mb-4">
                Alert Priorities
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(channel.settings).map(([priority, enabled]) => (
                  <label
                    key={priority}
                    className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      checked={enabled}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <span className="text-sm font-medium text-secondary-900 capitalize">
                      {priority}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Recipients */}
            {channel.id !== 'inapp' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-secondary-900">
                    Recipients
                  </h4>
                  <button className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Recipient
                  </button>
                </div>
                <div className="space-y-2">
                  {channel.recipients.map((recipient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                    >
                      <span className="text-secondary-900">{recipient}</span>
                      <button className="text-secondary-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Advanced Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-secondary-900 mb-6">
          Advanced Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-secondary-900">
                Quiet Hours
              </h4>
              <p className="text-sm text-secondary-500">
                Only receive critical alerts during specified hours
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-secondary-900">
                Digest Mode
              </h4>
              <p className="text-sm text-secondary-500">
                Group similar alerts into a single notification
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-secondary-900">
                Sound Alerts
              </h4>
              <p className="text-sm text-secondary-500">
                Play sound for critical alerts
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;