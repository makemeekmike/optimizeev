import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [stations, setStations] = useState(10);
  const [downtime, setDowntime] = useState(5);
  const [revenue, setRevenue] = useState(100);

  const calculateSavings = () => {
    const currentLoss = (stations * downtime * revenue * 12) * 0.03; // Current 3% downtime
    const optimizedLoss = (stations * downtime * revenue * 12) * 0.01; // Improved 1% downtime
    return Math.round(currentLoss - optimizedLoss);
  };

  const annualSavings = calculateSavings();

  return (
    <section id="roi-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Calculate Your ROI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            See how much you could save with OptimizeEV
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 bg-secondary-50">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700">
                    Number of Charging Stations
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={stations}
                    onChange={(e) => setStations(parseInt(e.target.value))}
                    className="mt-2 w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-1 text-secondary-900 font-medium">{stations} stations</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700">
                    Average Daily Revenue per Station ($)
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={revenue}
                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                    className="mt-2 w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-1 text-secondary-900 font-medium">${revenue}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700">
                    Average Hours of Daily Operation
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={downtime}
                    onChange={(e) => setDowntime(parseInt(e.target.value))}
                    className="mt-2 w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-1 text-secondary-900 font-medium">{downtime} hours</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white">
              <div className="h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 rounded-lg p-3">
                      <DollarSign className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Estimated Annual Savings</p>
                      <p className="text-3xl font-bold text-secondary-900">${annualSavings.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary-600" />
                      <span className="text-secondary-600">Reduce downtime by up to 66%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-primary-600" />
                      <span className="text-secondary-600">Improve charging efficiency by 35%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calculator className="h-5 w-5 text-primary-600" />
                      <span className="text-secondary-600">ROI within 6 months</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Get Detailed ROI Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;