import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  Settings, 
  LineChart,
  Wallet,
  Building2,
  Car,
  Power
} from 'lucide-react';

const integrations = [
  {
    category: "Charging Protocols",
    items: [
      { name: "OCPP 1.6/2.0", icon: Power, description: "Open Charge Point Protocol support" },
      { name: "CHAdeMO", icon: Power, description: "DC fast charging protocol" },
      { name: "CCS", icon: Power, description: "Combined Charging System" }
    ]
  },
  {
    category: "Fleet Management",
    items: [
      { name: "Geotab", icon: Car, description: "Fleet telematics integration" },
      { name: "Fleetio", icon: Car, description: "Maintenance management" },
      { name: "Samsara", icon: Car, description: "Fleet operations platform" }
    ]
  },
  {
    category: "Payment Systems",
    items: [
      { name: "Stripe", icon: Wallet, description: "Payment processing" },
      { name: "Square", icon: Wallet, description: "Point of sale" },
      { name: "Cybersource", icon: Wallet, description: "Enterprise payments" }
    ]
  },
  {
    category: "Enterprise Systems",
    items: [
      { name: "Salesforce", icon: Building2, description: "CRM integration" },
      { name: "SAP", icon: Building2, description: "ERP systems" },
      { name: "ServiceNow", icon: Building2, description: "ITSM platform" }
    ]
  }
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Integration Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Seamlessly connect with your existing infrastructure and systems
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {integrations.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-secondary-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-secondary-900 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex + itemIndex) * 0.1 }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-secondary-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-secondary-500">
                        {item.description}
                      </p>
                    </div>
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
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
            View Full Integration Directory
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;