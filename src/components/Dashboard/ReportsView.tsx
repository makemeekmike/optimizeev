import React, { useState } from 'react';
import { 
  FileText,
  Download,
  Calendar,
  Filter,
  Plus,
  Clock,
  BarChart,
  PieChart,
  LineChart,
  Table,
  ChevronRight,
  Settings
} from 'lucide-react';

const ReportsView = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reportTemplates = [
    {
      id: "RT-001",
      name: "Network Performance Summary",
      description: "Overview of charging network performance metrics",
      type: "Performance",
      lastGenerated: "2024-03-01T14:30:00Z",
      schedule: "Daily",
      format: "PDF"
    },
    {
      id: "RT-002",
      name: "Revenue Analysis",
      description: "Detailed breakdown of revenue streams and trends",
      type: "Financial",
      lastGenerated: "2024-03-01T15:00:00Z",
      schedule: "Weekly",
      format: "Excel"
    },
    {
      id: "RT-003",
      name: "Maintenance History",
      description: "Complete maintenance records and upcoming schedule",
      type: "Maintenance",
      lastGenerated: "2024-03-01T12:00:00Z",
      schedule: "Monthly",
      format: "PDF"
    }
  ];

  const scheduledReports = [
    {
      id: "SR-001",
      template: "Network Performance Summary",
      frequency: "Daily",
      nextRun: "2024-03-02T06:00:00Z",
      recipients: ["operations@example.com"],
      format: "PDF"
    },
    {
      id: "SR-002",
      template: "Revenue Analysis",
      frequency: "Weekly",
      nextRun: "2024-03-07T06:00:00Z",
      recipients: ["finance@example.com"],
      format: "Excel"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Reports</h1>
          <p className="text-secondary-600">Generate and manage reports</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-secondary-50">
            <Filter className="h-5 w-5 text-secondary-600 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Templates */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-6">Report Templates</h2>
            <div className="space-y-4">
              {reportTemplates.map((template) => (
                <div
                  key={template.id}
                  className="border border-secondary-200 rounded-lg p-4 hover:bg-secondary-50 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <FileText className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-secondary-900">
                          {template.name}
                        </h3>
                        <p className="text-sm text-secondary-500">
                          {template.description}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700">
                      <Download className="h-5 w-5 mr-2" />
                      Generate
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-secondary-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Last generated: {new Date(template.lastGenerated).toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {template.schedule}
                      </span>
                    </div>
                    <span className="bg-secondary-100 px-2 py-1 rounded">
                      {template.format}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Visualization Options */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-6">
              Data Visualization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50">
                <BarChart className="h-6 w-6 text-primary-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-medium text-secondary-900">Bar Charts</h3>
                  <p className="text-sm text-secondary-500">Compare data points</p>
                </div>
              </button>
              <button className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50">
                <LineChart className="h-6 w-6 text-primary-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-medium text-secondary-900">Line Charts</h3>
                  <p className="text-sm text-secondary-500">Track trends over time</p>
                </div>
              </button>
              <button className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50">
                <PieChart className="h-6 w-6 text-primary-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-medium text-secondary-900">Pie Charts</h3>
                  <p className="text-sm text-secondary-500">Show proportions</p>
                </div>
              </button>
              <button className="flex items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50">
                <Table className="h-6 w-6 text-primary-600 mr-3" />
                <div className="text-left">
                  <h3 className="font-medium text-secondary-900">Tables</h3>
                  <p className="text-sm text-secondary-500">Display raw data</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scheduled Reports & Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-secondary-900">
                Scheduled Reports
              </h2>
              <button className="text-primary-600 hover:text-primary-700">
                Manage Schedule
              </button>
            </div>
            <div className="space-y-4">
              {scheduledReports.map((report) => (
                <div
                  key={report.id}
                  className="border border-secondary-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-secondary-900">
                      {report.template}
                    </h3>
                    <span className="text-sm text-secondary-500">
                      {report.frequency}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    <div className="flex items-center mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      Next run: {new Date(report.nextRun).toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      Format: {report.format}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Report Settings</span>
                </div>
                <ChevronRight className="h-5 w-5 text-secondary-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Export All Data</span>
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

export default ReportsView;