import React, { useState } from 'react';
import { 
  Search,
  Book,
  Video,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  ExternalLink,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

const SupportView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      icon: Book,
      articles: [
        "Platform Overview",
        "First-time Setup Guide",
        "Basic Configuration",
        "User Management"
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      articles: [
        "Dashboard Navigation",
        "Station Management",
        "Report Generation",
        "Alert Configuration"
      ]
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      articles: [
        "Common Issues",
        "Error Messages",
        "Network Connectivity",
        "Station Offline"
      ]
    }
  ];

  const recentArticles = [
    {
      title: "Optimizing Station Performance",
      category: "Best Practices",
      views: 1250,
      lastUpdated: "2024-02-28"
    },
    {
      title: "Understanding Alert Thresholds",
      category: "Configuration",
      views: 980,
      lastUpdated: "2024-02-25"
    },
    {
      title: "Advanced Report Customization",
      category: "Reporting",
      views: 756,
      lastUpdated: "2024-02-20"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Support Center</h1>
          <p className="text-secondary-600">Find help and resources</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <MessageSquare className="h-5 w-5 mr-2" />
          Contact Support
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-secondary-900 text-center mb-2">
            How can we help you today?
          </h2>
          <p className="text-secondary-500 text-center mb-6">
            Search our knowledge base or browse categories below
          </p>
          <div className="relative">
            <Search className="h-5 w-5 text-secondary-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for articles, tutorials, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Help Categories */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-secondary-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="flex items-center text-secondary-600 hover:text-primary-600"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span className="text-sm">{article}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-6">
              Popular Articles
            </h2>
            <div className="space-y-4">
              {recentArticles.map((article) => (
                <div
                  key={article.title}
                  className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-secondary-900">
                      {article.title}
                    </h3>
                    <div className="flex items-center mt-1 text-sm text-secondary-500">
                      <span className="mr-4">{article.category}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Resources */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-6">
              Contact Support
            </h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-secondary-50 rounded-lg">
                <Phone className="h-5 w-5 text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900">Phone Support</h3>
                  <p className="text-sm text-secondary-500">
                    Available 24/7 for urgent issues
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center p-4 bg-secondary-50 rounded-lg">
                <Mail className="h-5 w-5 text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900">Email Support</h3>
                  <p className="text-sm text-secondary-500">
                    Response within 24 hours
                  </p>
                  <a
                    href="mailto:support@optimizeev.com"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    support@optimizeev.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-secondary-900 mb-6">
              Additional Resources
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Documentation</span>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">Video Library</span>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-secondary-900">API Reference</span>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportView;