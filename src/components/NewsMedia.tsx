import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  ArrowRight,
  ExternalLink,
  Tag,
  Globe,
  Award,
  FileText
} from 'lucide-react';

const NewsMedia = () => {
  const newsItems = [
    {
      title: "OptimizeEV Launches Revolutionary AI-Powered Predictive Maintenance",
      date: "March 1, 2024",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1696446702239-e76522785166?auto=format&fit=crop&q=80",
      excerpt: "Leading EV charging management platform introduces groundbreaking AI technology for predictive maintenance, reducing downtime by up to 66%."
    },
    {
      title: "Partnership Announcement: Major Fleet Operator Adopts OptimizeEV",
      date: "February 28, 2024",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1697554401944-bea57cc38c19?auto=format&fit=crop&q=80",
      excerpt: "One of North America's largest fleet operators selects OptimizeEV to manage their nationwide charging infrastructure."
    },
    {
      title: "OptimizeEV Named Top Innovator in EV Infrastructure",
      date: "February 15, 2024",
      category: "Award",
      image: "https://images.unsplash.com/photo-1698675145323-0d8c837c4116?auto=format&fit=crop&q=80",
      excerpt: "Industry recognition for revolutionary approach to EV charging station management and maintenance."
    }
  ];

  const pressReleases = [
    {
      title: "Q4 2023 Performance Report",
      date: "January 15, 2024",
      type: "Financial"
    },
    {
      title: "New Board Member Announcement",
      date: "January 10, 2024",
      type: "Corporate"
    },
    {
      title: "Expansion into European Markets",
      date: "December 20, 2023",
      type: "Business"
    }
  ];

  const mediaResources = [
    {
      title: "Brand Assets",
      description: "Logos, images, and brand guidelines",
      icon: FileText
    },
    {
      title: "Press Kit",
      description: "Company information and media resources",
      icon: Globe
    },
    {
      title: "Awards & Recognition",
      description: "Industry accolades and certifications",
      icon: Award
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
              News & Media
            </h1>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and media coverage
            </p>
          </motion.div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-secondary-900 mb-12"
          >
            Latest News
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-secondary-500">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {item.date}
                    </span>
                    <span className="text-sm text-primary-600">
                      <Tag className="h-4 w-4 inline mr-1" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{item.excerpt}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Press Releases & Media Resources */}
      <div className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Press Releases */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">
                Press Releases
              </h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <div
                    key={release.title}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-secondary-900">
                          {release.title}
                        </h3>
                        <p className="text-sm text-secondary-500 mt-1">
                          {release.date}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                        {release.type}
                      </span>
                    </div>
                    <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                      View Release
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Media Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">
                Media Resources
              </h2>
              <div className="space-y-6">
                {mediaResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <resource.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-secondary-900">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-secondary-500">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                      Download
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;