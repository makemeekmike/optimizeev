import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Clock,
  Send
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
  };

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      phone: "+1 (415) 555-0123",
      email: "sf@optimizeev.com"
    },
    {
      city: "London",
      address: "45 King's Road, Floor 3",
      phone: "+44 20 7123 4567",
      email: "london@optimizeev.com"
    },
    {
      city: "Singapore",
      address: "71 Robinson Road, #14-01",
      phone: "+65 6789 0123",
      email: "singapore@optimizeev.com"
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
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              Have questions about OptimizeEV? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                    <MessageSquare className="h-12 w-12 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                    Message Received!
                  </h2>
                  <p className="text-secondary-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                        {office.city}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                          <span className="text-secondary-600">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-primary-600 mr-3" />
                          <span className="text-secondary-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-primary-600 mr-3" />
                          <span className="text-secondary-600">{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-secondary-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-secondary-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-4 text-sm">
                    * Hours are displayed in your local timezone
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;