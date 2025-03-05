import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity,
  Battery,
  AlertTriangle,
  Clock,
  TrendingUp,
  BarChart3,
  Settings,
  Zap
} from 'lucide-react';

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    overview: [
      { label: "Active Stations", value: "156/160", icon: Battery, trend: "+3%" },
      { label: "Current Uptime", value: "97.8%", icon: Activity, trend: "+0.5%" },
      { label: "Active Sessions", value: "42", icon: Zap, trend: "+12%" },
      { label: "Alerts", value: "3", icon: AlertTriangle, trend: "-25%" }
    ],
    predictions: [
      { station: "Station A-15", issue: "Potential voltage fluctuation", probability: "89%", timeframe: "48h" },
      { station: "Station B-22", issue: "Connector wear", probability: "75%", timeframe: "72h" },
      { station: "Station C-08", issue: "Temperature anomaly", probability: "92%", timeframe: "24h" }
    ]
  };

  return (
    <section id="dashboard-demo" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Interactive Dashboard Demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Experience the power of AI-driven charging station management
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="border-b border-secondary-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {['overview', 'predictions', 'analytics', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.overview.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-secondary-200 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <stat.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className={`text-sm font-medium ${
                        stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.trend}
                      </span>
                    </div>
                    <p className="mt-4 text-2xl font-semibold text-secondary-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-secondary-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'predictions' && (
              <div className="space-y-4">
                {stats.predictions.map((prediction) => (
                  <div
                    key={prediction.station}
                    className="bg-white rounded-xl border border-secondary-200 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                        <h4 className="text-lg font-medium text-secondary-900">
                          {prediction.station}
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-primary-600">
                        Probability: {prediction.probability}
                      </span>
                    </div>
                    <p className="mt-2 text-secondary-600">{prediction.issue}</p>
                    <div className="mt-4 flex items-center text-sm text-secondary-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Expected within {prediction.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardDemo;