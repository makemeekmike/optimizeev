import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code2, 
  FileText, 
  Video, 
  Search,
  ChevronRight
} from 'lucide-react';

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      "Quick Start Guide",
      "Installation Manual",
      "Basic Configuration",
      "First-time Setup"
    ]
  },
  {
    title: "API Reference",
    icon: Code2,
    items: [
      "Authentication",
      "Endpoints",
      "Rate Limits",
      "Error Handling"
    ]
  },
  {
    title: "User Guides",
    icon: FileText,
    items: [
      "Dashboard Overview",
      "Monitoring Setup",
      "Alert Configuration",
      "Report Generation"
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    items: [
      "Platform Overview",
      "Advanced Features",
      "Troubleshooting",
      "Best Practices"
    ]
  }
];

const Documentation = () => {
  return (
    <section id="documentation" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Technical Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Comprehensive guides and resources for seamless integration
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-secondary-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Search documentation..."
            />
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-secondary-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between group p-3 rounded-lg hover:bg-secondary-50"
                    >
                      <span className="text-secondary-700 group-hover:text-secondary-900">
                        {item}
                      </span>
                      <ChevronRight className="h-5 w-5 text-secondary-400 group-hover:text-primary-600" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#full-documentation"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <span>Browse Full Documentation</span>
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation;