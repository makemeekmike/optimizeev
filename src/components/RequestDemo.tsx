import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Building2, 
  Send,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';

const RequestDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-secondary-900 mb-6">
              Transform Your EV Charging Operations
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Experience how OptimizeEV can revolutionize your charging infrastructure with our personalized demo.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    30-Minute Personalized Demo
                  </h3>
                  <p className="text-secondary-600">
                    See our platform in action with your specific use cases
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    Expert Consultation
                  </h3>
                  <p className="text-secondary-600">
                    Discuss your challenges with our EV infrastructure specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    Custom Solution Design
                  </h3>
                  <p className="text-secondary-600">
                    Get a tailored implementation plan for your organization
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Platform overview and feature demonstration",
                  "ROI and savings calculation",
                  "Implementation timeline and process",
                  "Q&A session with our experts",
                  "Custom pricing proposal"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Replace form with Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Schedule Your Demo
            </h2>
            
            <InlineWidget 
              url="https://calendly.com/optimizeev" 
              styles={{
                height: '630px'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;