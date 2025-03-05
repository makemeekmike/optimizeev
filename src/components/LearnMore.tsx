import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Shield, BarChart as ChartBar, Settings, Users, Clock, Cpu, LineChart, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Intelligence",
      description: "Our advanced machine learning algorithms analyze real-time data to predict and prevent failures before they occur."
    },
    {
      icon: Activity,
      title: "Predictive Maintenance",
      description: "Reduce downtime by up to 66% with proactive maintenance scheduling and early issue detection."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Comprehensive analytics dashboard providing insights into station performance, usage patterns, and revenue."
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts",
      description: "Real-time notifications for critical issues, maintenance requirements, and system updates."
    }
  ];

  const benefits = [
    {
      title: "Increased Uptime",
      value: "97%",
      description: "Average station uptime achieved by our clients"
    },
    {
      title: "Cost Reduction",
      value: "35%",
      description: "Average maintenance cost reduction"
    },
    {
      title: "Response Time",
      value: "< 15min",
      description: "Average issue detection and response time"
    },
    {
      title: "ROI Timeline",
      value: "6 months",
      description: "Average time to achieve positive ROI"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-secondary-900 sm:text-5xl">
              Transform Your EV Charging Operations
            </h1>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover how OptimizeEV's AI-driven platform revolutionizes charging station management
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900">
              Intelligent Management Platform
            </h2>
            <p className="mt-4 text-xl text-secondary-600">
              Our comprehensive solution combines AI, real-time monitoring, and predictive analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-secondary-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits & Stats */}
      <div className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900">
              Proven Results
            </h2>
            <p className="mt-4 text-xl text-secondary-600">
              Real impact for charging network operators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <p className="text-4xl font-bold text-primary-600">{benefit.value}</p>
                <h3 className="mt-2 text-lg font-medium text-secondary-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-secondary-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-secondary-900">
              Simple Implementation
            </h2>
            <p className="mt-4 text-xl text-secondary-600">
              Get started in four easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: 1,
                title: "Initial Setup",
                description: "Quick integration with your existing infrastructure"
              },
              {
                step: 2,
                title: "Data Collection",
                description: "Begin gathering real-time performance data"
              },
              {
                step: 3,
                title: "AI Training",
                description: "Our AI learns your specific operational patterns"
              },
              {
                step: 4,
                title: "Full Deployment",
                description: "Complete system rollout and team training"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-secondary-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white">
              Ready to Transform Your EV Charging Operations?
            </h2>
            <p className="mt-4 text-xl text-white/80">
              Schedule a personalized demo to see OptimizeEV in action
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/request-demo"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;