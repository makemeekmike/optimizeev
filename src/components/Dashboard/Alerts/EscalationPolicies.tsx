import React, { useState } from 'react';
import { 
  AlertTriangle,
  Plus,
  Clock,
  Users,
  Mail,
  Phone,
  Trash2,
  Edit,
  Save,
  Check,
  ChevronRight
} from 'lucide-react';

const EscalationPolicies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const policies = [
    {
      id: "EP-001",
      name: "Critical System Alerts",
      description: "Escalation policy for critical system failures",
      triggers: ["System Offline", "Power Failure", "Security Breach"],
      steps: [
        {
          level: 1,
          responders: ["Primary On-Call Engineer"],
          waitTime: "5 minutes",
          channels: ["SMS", "Email"]
        },
        {
          level: 2,
          responders: ["Secondary On-Call Engineer", "Team Lead"],
          waitTime: "10 minutes",
          channels: ["SMS", "Email", "Phone"]
        },
        {
          level: 3,
          responders: ["Operations Manager", "System Administrator"],
          waitTime: "15 minutes",
          channels: ["SMS", "Email", "Phone"]
        }
      ]
    },
    {
      id: "EP-002",
      name: "Maintenance Alerts",
      description: "Escalation for maintenance-related issues",
      triggers: ["Component Failure", "Performance Degradation"],
      steps: [
        {
          level: 1,
          responders: ["Maintenance Team"],
          waitTime: "15 minutes",
          channels: ["Email"]
        },
        {
          level: 2,
          responders: ["Senior Technician"],
          waitTime: "30 minutes",
          channels: ["SMS", "Email"]
        }
      ]
    },
    {
      id: "EP-003",
      name: "Network Issues",
      description: "Escalation for network connectivity problems",
      triggers: ["Connection Loss", "High Latency"],
      steps: [
        {
          level: 1,
          responders: ["Network Engineer"],
          waitTime: "10 minutes",
          channels: ["Email", "SMS"]
        },
        {
          level: 2,
          responders: ["Network Operations Team"],
          waitTime: "20 minutes",
          channels: ["SMS", "Email", "Phone"]
        }
      ]
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
          <h1 className="text-2xl font-bold text-secondary-900">Escalation Policies</h1>
          <p className="text-secondary-600">Configure alert escalation rules and workflows</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
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
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            New Policy
          </button>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className={`bg-white rounded-xl shadow-sm ${
              selectedPolicy === policy.id ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-secondary-900">
                      {policy.name}
                    </h3>
                    <p className="text-sm text-secondary-500">{policy.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-secondary-400 hover:text-secondary-500 rounded-lg">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-secondary-400 hover:text-red-500 rounded-lg">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Triggers */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-secondary-900 mb-3">
                  Triggers
                </h4>
                <div className="flex flex-wrap gap-2">
                  {policy.triggers.map((trigger) => (
                    <span
                      key={trigger}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>

              {/* Escalation Steps */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-secondary-900">
                  Escalation Steps
                </h4>
                {policy.steps.map((step) => (
                  <div
                    key={step.level}
                    className="bg-secondary-50 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-secondary-900">
                        Level {step.level}
                      </span>
                      <div className="flex items-center text-sm text-secondary-500">
                        <Clock className="h-4 w-4 mr-1" />
                        Wait {step.waitTime}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center text-sm text-secondary-500 mb-2">
                          <Users className="h-4 w-4 mr-1" />
                          Responders
                        </div>
                        <div className="space-y-1">
                          {step.responders.map((responder) => (
                            <div
                              key={responder}
                              className="text-sm text-secondary-700"
                            >
                              {responder}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center text-sm text-secondary-500 mb-2">
                          <Mail className="h-4 w-4 mr-1" />
                          Notification Channels
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.channels.map((channel) => (
                            <span
                              key={channel}
                              className="px-2 py-1 bg-white text-secondary-700 rounded-lg text-sm"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-secondary-50 rounded-b-xl">
              <button
                onClick={() => setSelectedPolicy(policy.id)}
                className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700"
              >
                Configure Policy
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscalationPolicies;