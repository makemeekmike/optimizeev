import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  BarChart, 
  Download,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const resources = [
  {
    category: "Educational Content",
    items: [
      {
        title: "EV Charging Best Practices Guide",
        type: "Guide",
        icon: BookOpen,
        description: "Comprehensive guide to optimize your EV charging operations"
      },
      {
        title: "AI in Predictive Maintenance",
        type: "Whitepaper",
        icon: FileText,
        description: "Deep dive into AI-driven maintenance strategies"
      },
      {
        title: "ROI of Smart Charging",
        type: "Report",
        icon: BarChart,
        description: "Analysis of cost savings with intelligent charging systems"
      }
    ]
  },
  {
    category: "Video Content",
    items: [
      {
        title: "Platform Demo",
        type: "Video",
        icon: Video,
        description: "See OptimizeEV in action"
      },
      {
        title: "Customer Success Stories",
        type: "Video Series",
        icon: Video,
        description: "Real-world implementation examples"
      },
      {
        title: "Feature Walkthroughs",
        type: "Tutorial Series",
        icon: Video,
        description: "Step-by-step guides to key features"
      }
    ]
  }
];

const upcomingWebinars = [
  {
    title: "Maximizing EV Fleet Efficiency",
    date: "March 28, 2024",
    time: "11:00 AM EST"
  },
  {
    title: "AI-Driven Predictive Maintenance",
    date: "April 4, 2024",
    time: "2:00 PM EST"
  },
  {
    title: "Optimizing Charging Networks",
    date: "April 11, 2024",
    time: "1:00 PM EST"
  }
];

const Resources = () => {
  return (
    <div id="resources" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Resources & Learning Center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Expand your knowledge with our comprehensive resource library
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex + itemIndex) * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-100 p-3 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-secondary-900">
                            {item.title}
                          </h4>
                          <span className="text-sm text-primary-600">{item.type}</span>
                        </div>
                      </div>
                      <p className="text-secondary-600 mb-4">{item.description}</p>
                      <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
                        <Download className="h-5 w-5 mr-2" />
                        Download Now
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-secondary-900 mb-6">
              Upcoming Webinars
            </h3>
            <div className="space-y-6">
              {upcomingWebinars.map((webinar) => (
                <div
                  key={webinar.title}
                  className="border-b border-secondary-100 last:border-0 pb-4 last:pb-0"
                >
                  <h4 className="text-lg font-medium text-secondary-900">
                    {webinar.title}
                  </h4>
                  <p className="text-secondary-500 mb-2">
                    {webinar.date} at {webinar.time}
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    Register Now
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="text-lg font-medium text-secondary-900 mb-2">
                Newsletter Signup
              </h4>
              <p className="text-secondary-600 mb-4">
                Get the latest updates and insights delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-secondary-200 mb-3"
              />
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resources;