import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gauge, 
  Brain, 
  Clock, 
  Bell, 
  BarChart, 
  Shield 
} from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: "97% Uptime Guarantee",
    description: "Industry-leading uptime through predictive maintenance and real-time monitoring."
  },
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Advanced machine learning algorithms predict and prevent failures before they occur."
  },
  {
    icon: Clock,
    title: "Rapid Diagnostics",
    description: "Reduce diagnostic time from hours to minutes with intelligent system analysis."
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications for critical issues and maintenance requirements."
  },
  {
    icon: BarChart,
    title: "Fleet Analytics",
    description: "Comprehensive analytics and insights for optimal fleet management."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your infrastructure data."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Powerful Features for Modern EV Infrastructure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Everything you need to manage and optimize your EV charging network.
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-6 left-6 bg-primary-100 rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-secondary-900">{feature.title}</h3>
                  <p className="mt-2 text-secondary-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;