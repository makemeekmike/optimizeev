import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for small fleets and pilot programs",
    features: [
      "Up to 25 charging stations",
      "Basic AI monitoring",
      "8/5 support",
      "Monthly reports",
      "Email alerts",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: "2,499",
    description: "Ideal for growing networks and medium fleets",
    features: [
      "Up to 100 charging stations",
      "Advanced AI predictions",
      "24/7 support",
      "Weekly reports",
      "SMS & email alerts",
      "Advanced analytics",
      "API access",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations and network providers",
    features: [
      "Unlimited charging stations",
      "Full AI suite",
      "24/7 priority support",
      "Real-time reporting",
      "Multi-channel alerts",
      "Enterprise analytics",
      "Full API access",
      "Custom development",
      "Dedicated account manager",
      "SLA guarantees"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Transparent Pricing for Every Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Choose the perfect plan for your EV charging infrastructure
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900">{plan.name}</h3>
                <p className="mt-2 text-secondary-500">{plan.description}</p>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-secondary-900">
                      ${plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="ml-2 text-secondary-500">/month</span>
                    )}
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary-500 mr-3" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200'
                }`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
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
          <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <HelpCircle className="h-5 w-5 mr-2" />
            <span>Need help choosing? Schedule a consultation</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;